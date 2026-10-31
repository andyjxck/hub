// /pages/void-survival.jsx
import React, { useEffect, useRef, useState } from "react";
import Layout from "../components/Layout";

export default function VoidSurvivalPage() {
  const canvasRef = useRef(null);
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const animationRef = useRef(null);
  const gameStateRef = useRef(null);

  // Embedded mini-game
  useEffect(() => {
    if (!canvasRef.current || !gameActive) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    // Game state
    const game = {
      player: { x: canvas.width / 2, y: canvas.height / 2, size: 20, speed: 3 },
      enemies: [],
      projectiles: [],
      particles: [],
      score: 0,
      keys: {},
      lastShot: 0,
      gameOver: false,
      mouseX: canvas.width / 2,
      mouseY: canvas.height / 2
    };
    gameStateRef.current = game;

    // Input handlers
    const handleKeyDown = (e) => game.keys[e.key.toLowerCase()] = true;
    const handleKeyUp = (e) => game.keys[e.key.toLowerCase()] = false;
    const handleMouseMove = (e) => {
      const r = canvas.getBoundingClientRect();
      game.mouseX = e.clientX - r.left;
      game.mouseY = e.clientY - r.top;
    };
    const handleClick = () => {
      const now = Date.now();
      if (now - game.lastShot > 200) {
        const angle = Math.atan2(game.mouseY - game.player.y, game.mouseX - game.player.x);
        game.projectiles.push({
          x: game.player.x,
          y: game.player.y,
          vx: Math.cos(angle) * 8,
          vy: Math.sin(angle) * 8,
          life: 60
        });
        game.lastShot = now;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleClick);

    // Spawn enemies
    const spawnEnemy = () => {
      const edge = Math.floor(Math.random() * 4);
      let x, y;
      switch(edge) {
        case 0: x = Math.random() * canvas.width; y = -20; break;
        case 1: x = canvas.width + 20; y = Math.random() * canvas.height; break;
        case 2: x = Math.random() * canvas.width; y = canvas.height + 20; break;
        case 3: x = -20; y = Math.random() * canvas.height; break;
      }
      const types = ['basic', 'fast', 'tank'];
      const type = types[Math.floor(Math.random() * types.length)];
      game.enemies.push({
        x, y,
        type,
        size: type === 'tank' ? 25 : type === 'fast' ? 15 : 20,
        speed: type === 'fast' ? 2.5 : type === 'tank' ? 1 : 1.5,
        hp: type === 'tank' ? 3 : 1,
        color: type === 'fast' ? '#eab308' : type === 'tank' ? '#22c55e' : '#ef4444'
      });
    };

    let spawnTimer = 0;

    // Game loop
    const loop = () => {
      if (game.gameOver) {
        setGameOver(true);
        setScore(game.score);
        return;
      }

      // Clear
      ctx.fillStyle = '#0a0a14';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Grid effect
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.1)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Move player
      if (game.keys['w'] || game.keys['arrowup']) game.player.y -= game.player.speed;
      if (game.keys['s'] || game.keys['arrowdown']) game.player.y += game.player.speed;
      if (game.keys['a'] || game.keys['arrowleft']) game.player.x -= game.player.speed;
      if (game.keys['d'] || game.keys['arrowright']) game.player.x += game.player.speed;

      // Clamp player
      game.player.x = Math.max(20, Math.min(canvas.width - 20, game.player.x));
      game.player.y = Math.max(20, Math.min(canvas.height - 20, game.player.y));

      // Draw player
      ctx.save();
      ctx.translate(game.player.x, game.player.y);
      ctx.fillStyle = '#a855f7';
      ctx.shadowBlur = 20;
      ctx.shadowColor = '#a855f7';
      ctx.beginPath();
      ctx.arc(0, 0, game.player.size, 0, Math.PI * 2);
      ctx.fill();
      // Player inner core
      ctx.fillStyle = '#fff';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#fff';
      ctx.beginPath();
      ctx.arc(0, 0, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Auto-shoot nearest enemy
      let nearest = null;
      let nearestDist = Infinity;
      game.enemies.forEach(e => {
        const dist = Math.hypot(e.x - game.player.x, e.y - game.player.y);
        if (dist < nearestDist && dist < 200) {
          nearestDist = dist;
          nearest = e;
        }
      });

      if (nearest) {
        const now = Date.now();
        if (now - game.lastShot > 400) {
          const angle = Math.atan2(nearest.y - game.player.y, nearest.x - game.player.x);
          game.projectiles.push({
            x: game.player.x,
            y: game.player.y,
            vx: Math.cos(angle) * 10,
            vy: Math.sin(angle) * 10,
            life: 60,
            auto: true
          });
          game.lastShot = now;
        }
      }

      // Update and draw projectiles
      game.projectiles = game.projectiles.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.fillStyle = p.auto ? '#c084fc' : '#fff';
        ctx.shadowBlur = 10;
        ctx.shadowColor = p.auto ? '#c084fc' : '#fff';
        ctx.beginPath();
        ctx.arc(0, 0, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        return p.life > 0 && p.x > -10 && p.x < canvas.width + 10 && p.y > -10 && p.y < canvas.height + 10;
      });

      // Spawn enemies
      spawnTimer++;
      if (spawnTimer > 60) {
        spawnEnemy();
        spawnTimer = 0;
      }

      // Update and draw enemies
      game.enemies = game.enemies.filter(e => {
        // Move toward player
        const angle = Math.atan2(game.player.y - e.y, game.player.x - e.x);
        e.x += Math.cos(angle) * e.speed;
        e.y += Math.sin(angle) * e.speed;

        // Check collision with player
        const distToPlayer = Math.hypot(e.x - game.player.x, e.y - game.player.y);
        if (distToPlayer < e.size + game.player.size) {
          game.gameOver = true;
        }

        // Check collision with projectiles
        let hit = false;
        game.projectiles = game.projectiles.filter(p => {
          const dist = Math.hypot(p.x - e.x, p.y - e.y);
          if (dist < e.size + 5) {
            hit = true;
            // Spawn particles
            for (let i = 0; i < 5; i++) {
              game.particles.push({
                x: e.x,
                y: e.y,
                vx: (Math.random() - 0.5) * 6,
                vy: (Math.random() - 0.5) * 6,
                life: 20,
                color: e.color
              });
            }
            return false;
          }
          return true;
        });

        if (hit) {
          e.hp--;
          if (e.hp <= 0) {
            game.score += e.type === 'tank' ? 30 : e.type === 'fast' ? 20 : 10;
            setScore(game.score);
            return false;
          }
        }

        // Draw enemy
        ctx.save();
        ctx.translate(e.x, e.y);
        ctx.fillStyle = e.color;
        ctx.shadowBlur = 15;
        ctx.shadowColor = e.color;
        ctx.beginPath();
        if (e.type === 'fast') {
          ctx.moveTo(0, -e.size);
          ctx.lineTo(e.size, e.size);
          ctx.lineTo(-e.size, e.size);
        } else if (e.type === 'tank') {
          ctx.rect(-e.size/2, -e.size/2, e.size, e.size);
        } else {
          ctx.arc(0, 0, e.size, 0, Math.PI * 2);
        }
        ctx.fill();
        ctx.restore();

        return true;
      });

      // Update and draw particles
      game.particles = game.particles.filter(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life--;
        ctx.save();
        ctx.globalAlpha = p.life / 20;
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
        return p.life > 0;
      });

      // Draw UI
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 20px Inter, system-ui';
      ctx.fillText(`Score: ${game.score}`, 20, 35);

      // Instructions
      ctx.font = '14px Inter, system-ui';
      ctx.fillStyle = 'rgba(255,255,255,0.6)';
      ctx.fillText('WASD to move • Click to shoot • Auto-fires at nearby enemies', 20, canvas.height - 20);

      animationRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleClick);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [gameActive]);

  const startGame = () => {
    setGameActive(true);
    setGameOver(false);
    setScore(0);
  };

  return (
    <Layout>
      <div className="vs-container">
        {/* Hero with Game */}
        <section className="vs-hero">
          <div className="hero-content">
            <div className="hero-badge">⚔️ Beta</div>
            <h1 className="vs-title">Void Survival</h1>
            <p className="vs-tagline">
              Fight waves of enemies. Level up. Survive.
              <br />
              <span className="try-it">Try the demo below ↓</span>
            </p>
          </div>

          {/* Embedded Game */}
          <div className="game-embed">
            {!gameActive ? (
              <div className="game-placeholder">
                <div className="game-preview">
                  <div className="preview-enemies">
                    <span className="enemy-icon red">●</span>
                    <span className="enemy-icon yellow">▲</span>
                    <span className="enemy-icon green">■</span>
                  </div>
                  <div className="preview-player">●</div>
                  <div className="preview-text">
                    <h3>Play the Demo</h3>
                    <p>WASD to move • Click to shoot</p>
                  </div>
                </div>
                <button className="play-btn" onClick={startGame}>
                  Start Playing
                </button>
              </div>
            ) : gameOver ? (
              <div className="game-over">
                <h2>Game Over</h2>
                <p className="final-score">Score: {score}</p>
                <p className="game-over-hint">
                  The full game has power-ups, bosses, and endless waves.
                </p>
                <button className="play-btn" onClick={startGame}>
                  Play Again
                </button>
              </div>
            ) : (
              <canvas ref={canvasRef} className="game-canvas" />
            )}
          </div>
        </section>

        {/* Features */}
        <section className="features-section">
          <h2 className="section-title">Game Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon combat">⚔️</div>
              <h3>Auto-Battler Combat</h3>
              <p>Your weapons fire automatically. Focus on movement and positioning while your arsenal handles the destruction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon enemies">👹</div>
              <h3>Enemy Variety</h3>
              <p>Face different enemy types: basic grunts, fast hunters, and tanky brutes. Each requires different tactics.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon progression">📈</div>
              <h3>Roguelike Progression</h3>
              <p>Collect XP, level up, and choose from random upgrade cards to build unique runs every time.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon endless">∞</div>
              <h3>Endless Waves</h3>
              <p>The void gets harder every 30 seconds. Bosses spawn at 60-second intervals. How long can you last?</p>
            </div>
          </div>
        </section>

        {/* Download / Beta Signup */}
        <section className="download-section">
          <div className="download-card">
            <h2>Join the Beta</h2>
            <p className="download-subtitle">
              Void Survival is currently in closed beta.
              <br />
              Sign up to get early access.
            </p>
            <div className="download-buttons">
              <button className="download-btn primary" disabled>
                <span>📱</span>
                <span>iOS Beta — Coming Soon</span>
              </button>
              <button className="download-btn primary" disabled>
                <span>🤖</span>
                <span>Android Beta — Coming Soon</span>
              </button>
            </div>
            <p className="download-note">
              Want to test early? Email <a href="mailto:andy@theandysocial.website">andy@theandysocial.website</a>
            </p>
          </div>
        </section>
      </div>

      <style jsx>{`
        .vs-container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 24px;
        }

        .vs-hero {
          text-align: center;
          padding: 40px 0 60px;
        }

        .hero-content {
          margin-bottom: 40px;
        }

        .hero-badge {
          display: inline-block;
          padding: 8px 16px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(124, 58, 237, 0.3));
          border: 1px solid rgba(168, 85, 247, 0.5);
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          color: #c4b5fd;
          margin-bottom: 20px;
        }

        .vs-title {
          font-size: clamp(40px, 8vw, 64px);
          font-weight: 800;
          background: linear-gradient(135deg, #fff 0%, #c4b5fd 30%, #a855f7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 16px;
          letter-spacing: -0.02em;
        }

        .vs-tagline {
          font-size: clamp(16px, 3vw, 20px);
          color: #94a3b8;
          margin: 0;
          line-height: 1.6;
        }

        .try-it {
          color: #a855f7;
          font-weight: 500;
        }

        .game-embed {
          background: linear-gradient(135deg, rgba(10, 10, 22, 0.8), rgba(5, 5, 12, 0.9));
          border: 2px solid rgba(168, 85, 247, 0.3);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(168, 85, 247, 0.2);
        }

        .game-placeholder {
          padding: 60px 40px;
          text-align: center;
        }

        .game-preview {
          position: relative;
          margin-bottom: 30px;
        }

        .preview-enemies {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-bottom: 30px;
        }

        .enemy-icon {
          font-size: 48px;
          filter: drop-shadow(0 0 20px currentColor);
          animation: float 3s ease-in-out infinite;
        }

        .enemy-icon.red { color: #ef4444; animation-delay: 0s; }
        .enemy-icon.yellow { color: #eab308; animation-delay: 0.5s; }
        .enemy-icon.green { color: #22c55e; animation-delay: 1s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .preview-player {
          font-size: 64px;
          color: #a855f7;
          filter: drop-shadow(0 0 30px #a855f7);
          margin-bottom: 20px;
        }

        .preview-text h3 {
          font-size: 24px;
          font-weight: 700;
          color: #f1f5f9;
          margin: 0 0 8px;
        }

        .preview-text p {
          color: #64748b;
          margin: 0;
        }

        .play-btn {
          padding: 16px 40px;
          font-size: 18px;
          font-weight: 600;
          color: #fff;
          background: linear-gradient(135deg, #a855f7, #7c3aed);
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 8px 25px rgba(168, 85, 247, 0.4);
        }

        .play-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(168, 85, 247, 0.5);
        }

        .game-canvas {
          width: 100%;
          height: 400px;
          display: block;
          cursor: crosshair;
        }

        .game-over {
          padding: 60px 40px;
          text-align: center;
        }

        .game-over h2 {
          font-size: 36px;
          font-weight: 700;
          color: #f87171;
          margin: 0 0 16px;
        }

        .final-score {
          font-size: 48px;
          font-weight: 800;
          color: #a855f7;
          margin: 0 0 16px;
        }

        .game-over-hint {
          color: #64748b;
          margin: 0 0 30px;
        }

        .features-section {
          padding: 60px 0;
        }

        .section-title {
          font-size: 28px;
          font-weight: 700;
          text-align: center;
          margin: 0 0 40px;
          color: #f1f5f9;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 24px;
        }

        .feature-card {
          background: rgba(10, 10, 22, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 28px;
          transition: all 0.2s ease;
        }

        .feature-card:hover {
          border-color: rgba(168, 85, 247, 0.3);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(168, 85, 247, 0.15);
        }

        .feature-icon {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .feature-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: #f1f5f9;
          margin: 0 0 12px;
        }

        .feature-card p {
          font-size: 14px;
          color: #94a3b8;
          margin: 0;
          line-height: 1.6;
        }

        .download-section {
          padding: 40px 0 80px;
        }

        .download-card {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(124, 58, 237, 0.1));
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 20px;
          padding: 48px;
          text-align: center;
        }

        .download-card h2 {
          font-size: 32px;
          font-weight: 700;
          color: #f1f5f9;
          margin: 0 0 12px;
        }

        .download-subtitle {
          font-size: 16px;
          color: #94a3b8;
          margin: 0 0 32px;
        }

        .download-buttons {
          display: flex;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }

        .download-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 15px;
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .download-btn.primary {
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.9), rgba(124, 58, 237, 0.9));
          color: white;
        }

        .download-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .download-note {
          font-size: 14px;
          color: #64748b;
          margin: 0;
        }

        .download-note a {
          color: #a78bfa;
        }

        @media (max-width: 640px) {
          .vs-container {
            padding: 16px;
          }
          .game-canvas {
            height: 300px;
          }
          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </Layout>
  );
}
