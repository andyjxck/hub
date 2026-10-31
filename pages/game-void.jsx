import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

export default function GameVoidPage() {
  return (
    <Layout>
      <div style={{
        width: "100%",
        background: "#0a0a0f",
        minHeight: "100vh",
      }}>
        <div style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "60px 24px",
        }}>
        <Link href="/" style={{
          display: "inline-block",
          marginBottom: "24px",
          color: "#666",
          textDecoration: "none",
          fontSize: "13px",
        }}>
          ← Back
        </Link>

        <div style={{
          marginBottom: "32px",
        }}>
          <h1 style={{
            fontSize: "32px",
            fontWeight: "600",
            marginBottom: "8px",
            color: "#fff",
            letterSpacing: "-0.5px",
          }}>
            Game Void
          </h1>
          <p style={{
            fontSize: "14px",
            color: "#666",
            margin: 0,
          }}>
            Play. Compete. Win.
          </p>
        </div>

        <div style={{
          marginBottom: "40px",
          paddingBottom: "40px",
          borderBottom: "1px solid #1a1a1f",
        }}>
          <a
            href="https://apps.apple.com/gb/app/game-void/id6751643961"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#fff",
              color: "#0a0a0f",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: "14px",
              marginRight: "12px",
            }}
          >
            App Store
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.andysocial.gamevoid0&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "12px 24px",
              background: "#1a1a1f",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "6px",
              fontWeight: "500",
              fontSize: "14px",
            }}
          >
            Google Play
          </a>
        </div>

        <div style={{
          fontSize: "15px",
          lineHeight: 1.7,
          color: "#888",
          marginBottom: "40px",
        }}>
          <p style={{ marginBottom: '24px' }}>
            Game Void is my collection of mini-games. I wanted one place for all the classics - the games you play when you're bored, waiting for something, or just need a quick break. No ads, no microtransactions, just games.
          </p>

          <p style={{ marginBottom: '24px' }}>
            There are 40+ games now. Sudoku for the puzzle people. Chess for the strategists. Snake for the nostalgic. 2048 for the number crunchers. Solitaire for the card players. Bingo for the casual crowd. And then there's the Void originals - games I built specifically for this collection.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Void Trivia tests your knowledge across categories. Void Ball is like breakout but better. Void Invaders is my take on space invaders. Whack-A-Tap is exactly what it sounds like. Word Search, Word Wheel, Word Tiles, Word Reflex - if you like word games, there's plenty here.
          </p>

          <p style={{ marginBottom: '24px' }}>
            The multiplayer is real-time. You can challenge friends to head-to-head matches in most games. Chat is built in - trash talk encouraged (within reason). The leaderboards are global - see how you stack up against everyone else.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Daily challenges give you something new every day. Complete them for rewards and bragging rights. The challenges rotate, so there's always fresh content.
          </p>

          <p style={{ marginBottom: '24px' }}>
            Everything works offline. No internet? No problem. Your progress saves locally and syncs when you're back online.
          </p>

          <p>
            Game Void is free to play with ads. No in-app purchases, no "watch this video to continue" gates. I built it because I was tired of mobile games that nickel-and-dime you for basic features. Games should be fun, not a revenue optimization problem.
          </p>
        </div>

        <h2 style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "20px",
          color: "#fff",
        }}>
          Games
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "12px",
          marginBottom: "40px",
        }}>
          {[
            'Sudoku', 'Chess', 'Snake', '2048', 'Solitaire', 'Bingo',
            'Block Blast', 'Bubble Bloom', 'Mine Finder', 'Paddle Battle',
            'Void Trivia', 'Word Search', 'Whack-A-Tap', 'Void Ball',
            'Void Invaders', 'Connect 4', 'Tic Tac Toe', 'Memory Match',
            'Simon Says', 'Pong', 'Hangman', 'Minesweeper',
            'Sliding Puzzle', 'Kakuro', 'Mahjong', 'Mancala',
            'Flow Connect', 'Fill The Grid', 'Pipe Puzzle', 'Water Sort',
            'Word Wheel', 'Word Tiles', 'Word Reflex', 'Jewel Slider',
            'Fruit Fuse', 'Smash Em', 'Stack Em', 'Void Flap',
            'Void Jump', 'Void Pop', 'Void Toss', 'Penalty Shootout',
            'Oceanfront', 'Tri Peaks', 'G Rummy', 'Choices',
            'Dots and Boxes', 'Hi Lo', 'Blockrise',
          ].map((game) => (
            <div
              key={game}
              style={{
                padding: "12px",
                borderRadius: "4px",
                border: "1px solid #1a1a1f",
                fontSize: "13px",
                color: "#888",
              }}
            >
              {game}
            </div>
          ))}
        </div>

        <h2 style={{
          fontSize: "18px",
          fontWeight: "600",
          marginBottom: "20px",
          color: "#fff",
        }}>
          Features
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "12px",
          marginBottom: "40px",
        }}>
          {[
            '40+ Mini-Games',
            'Global Leaderboards',
            'Real-time Multiplayer',
            'Daily Challenges',
            'Offline Play',
            'No In-App Purchases',
            'Chat System',
            'Progress Sync',
            'Achievements',
          ].map((feature) => (
            <div
              key={feature}
              style={{
                padding: "12px",
                borderRadius: "4px",
                border: "1px solid #1a1a1f",
                fontSize: "13px",
                color: "#888",
              }}
            >
              {feature}
            </div>
          ))}
        </div>

        <div style={{
          paddingTop: "40px",
          borderTop: "1px solid #1a1a1f",
          display: "flex",
          gap: "24px",
          fontSize: "13px",
        }}>
          <Link href="/game-void/privacy" style={{ color: "#666", textDecoration: "none" }}>
            Privacy
          </Link>
          <Link href="/game-void/terms" style={{ color: "#666", textDecoration: "none" }}>
            Terms
          </Link>
        </div>
        </div>
      </div>
    </Layout>
  );
}
