// pages/blog.jsx
import { useEffect, useState, useMemo } from "react";
import Layout from "../components/Layout";
import { supabase } from "../lib/supabaseClient";

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAdmin, setShowAdmin] = useState(false);
  const [pass, setPass] = useState("");
  const [authed, setAuthed] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [saving, setSaving] = useState(false);
  const [activeId, setActiveId] = useState(null);

  async function loadPosts() {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) {
      setPosts(data || []);
      if (!activeId && (data?.length ?? 0) > 0) {
        setActiveId(data[0].id);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  const activePost = useMemo(
    () => posts.find((p) => p.id === activeId) || null,
    [posts, activeId]
  );

  function tryAuth(e) {
    e.preventDefault();
    if (pass.trim() && pass === process.env.NEXT_PUBLIC_BLOG_PASSWORD) {
      setAuthed(true);
    } else {
      alert("Wrong password.");
    }
  }

  async function submitPost(e) {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    setSaving(true);
    const { data, error } = await supabase.from("posts").insert({
      title: title.trim(),
      body: body.trim(),
    }).select().single();
    setSaving(false);
    if (error) {
      alert(error.message || "Failed to publish");
      return;
    }
    setTitle("");
    setBody("");
    await loadPosts();
    if (data?.id) setActiveId(data.id);
  }

  async function deletePost(id) {
    if (!confirm("Delete this post?")) return;
    await supabase.from("posts").delete().eq("id", id);
    await loadPosts();
    if (id === activeId && posts.length > 0) {
      const next = posts.find((p) => p.id !== id);
      setActiveId(next ? next.id : null);
    }
  }

  return (
    <Layout>
      <div className="blog-root">

        {/* Page header */}
        <div className="page-header">
          <p className="eyebrow">andysocial</p>
          <h1 className="page-title">Blog</h1>
          <p className="page-desc">Updates, release notes, and thoughts from the studio.</p>
        </div>

        {/* Admin toggle — subtle, bottom right */}
        <div className="admin-bar">
          <button className="admin-toggle" onClick={() => setShowAdmin((v) => !v)}>
            {showAdmin ? "Hide" : "·"}
          </button>
        </div>

        {/* Admin panel */}
        {showAdmin && (
          <div className="admin-panel">
            {!authed ? (
              <form onSubmit={tryAuth} className="admin-auth">
                <input type="password" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} className="a-input" />
                <button className="a-btn" type="submit">Unlock</button>
              </form>
            ) : (
              <form onSubmit={submitPost} className="admin-form">
                <p className="admin-label">New Post</p>
                <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="a-input" />
                <textarea placeholder="Write your update..." value={body} onChange={(e) => setBody(e.target.value)} className="a-textarea" rows={7} />
                <div className="admin-actions">
                  <button className="a-btn" type="submit" disabled={saving}>{saving ? "Publishing…" : "Publish"}</button>
                  <button type="button" className="a-btn ghost" onClick={() => { setTitle(""); setBody(""); }}>Clear</button>
                </div>
              </form>
            )}
          </div>
        )}

        {/* Two-column layout */}
        <div className="blog-layout">

          {/* Sidebar */}
          <aside className="sidebar">
            <p className="sidebar-label">All Posts</p>
            {loading ? (
              <p className="muted-text">Loading…</p>
            ) : posts.length === 0 ? (
              <p className="muted-text">No posts yet.</p>
            ) : (
              <div className="post-list">
                {posts.map((p) => {
                  const isActive = p.id === activeId;
                  return (
                    <button
                      key={p.id}
                      className={`post-item ${isActive ? "active" : ""}`}
                      onClick={() => setActiveId(p.id)}
                    >
                      <span className="post-item-title">{p.title}</span>
                      <span className="post-item-date">
                        {new Date(p.created_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </aside>

          {/* Main content */}
          <main className="post-reader">
            {loading ? (
              <p className="muted-text">Loading…</p>
            ) : !activePost ? (
              <p className="muted-text">Select a post to read.</p>
            ) : (
              <article className="post-article">
                <div className="post-top">
                  <div>
                    <p className="post-date-label">
                      {new Date(activePost.created_at).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                    </p>
                    <h2 className="post-title">{activePost.title}</h2>
                  </div>
                  {authed && (
                    <button className="delete-btn" onClick={() => deletePost(activePost.id)}>Delete</button>
                  )}
                </div>
                <div className="post-divider" />
                <div className="post-body">{activePost.body}</div>
              </article>
            )}
          </main>

        </div>
      </div>

      <style jsx>{`
        .blog-root {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 24px 80px;
          position: relative;
        }
        .page-header { margin-bottom: 48px; }
        .eyebrow {
          font-size: 11px; font-weight: 700; letter-spacing: 0.25em;
          text-transform: uppercase; color: rgba(251,191,36,0.5); margin: 0 0 12px;
        }
        .page-title {
          font-size: clamp(36px, 6vw, 56px); font-weight: 900;
          letter-spacing: -2px; line-height: 1; margin: 0 0 14px; color: #fff;
        }
        .page-desc { font-size: 16px; color: rgba(255,255,255,0.35); margin: 0; }

        .admin-bar {
          position: absolute; top: 48px; right: 24px;
        }
        .admin-toggle {
          background: none; border: none; color: rgba(255,255,255,0.15);
          font-size: 20px; cursor: pointer; padding: 4px 8px; line-height: 1;
        }
        .admin-toggle:hover { color: rgba(255,255,255,0.4); }

        .admin-panel {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(245,158,11,0.12);
          border-radius: 14px; padding: 20px; margin-bottom: 32px;
        }
        .admin-label {
          font-size: 10px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.2em; color: rgba(245,158,11,0.5); margin: 0 0 14px;
        }
        .admin-auth, .admin-form { display: flex; flex-direction: column; gap: 12px; }
        .a-input {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 8px; padding: 10px 14px; font-size: 14px; color: #f1f5f9;
          outline: none; font-family: inherit;
        }
        .a-input:focus { border-color: rgba(245,158,11,0.4); }
        .a-textarea {
          background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.09);
          border-radius: 8px; padding: 10px 14px; font-size: 14px; color: #f1f5f9;
          outline: none; font-family: inherit; resize: vertical;
        }
        .a-textarea:focus { border-color: rgba(245,158,11,0.4); }
        .admin-actions { display: flex; gap: 10px; }
        .a-btn {
          padding: 10px 20px; border-radius: 8px; border: none;
          background: linear-gradient(135deg, #b45309, #f59e0b);
          color: #fff; font-size: 13px; font-weight: 700; cursor: pointer;
        }
        .a-btn.ghost {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.4);
        }
        .a-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .blog-layout {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 24px;
          align-items: start;
        }
        @media (max-width: 768px) {
          .blog-layout { grid-template-columns: 1fr; }
        }

        .sidebar {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          overflow: hidden;
          position: sticky;
          top: 24px;
        }
        .sidebar-label {
          font-size: 10px; font-weight: 800; text-transform: uppercase;
          letter-spacing: 0.2em; color: rgba(245,158,11,0.5);
          padding: 16px 18px 10px; margin: 0;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }
        .post-list { display: flex; flex-direction: column; }
        .post-item {
          width: 100%; background: none; border: none; border-bottom: 1px solid rgba(255,255,255,0.04);
          padding: 14px 18px; text-align: left; cursor: pointer; transition: background 0.15s;
          display: flex; flex-direction: column; gap: 4px;
        }
        .post-item:last-child { border-bottom: none; }
        .post-item:hover { background: rgba(245,158,11,0.05); }
        .post-item.active { background: rgba(245,158,11,0.07); border-left: 2px solid #f59e0b; }
        .post-item-title { font-size: 13px; font-weight: 600; color: #f1f5f9; line-height: 1.4; }
        .post-item.active .post-item-title { color: #fbbf24; }
        .post-item-date { font-size: 11px; color: rgba(255,255,255,0.25); }
        .muted-text { font-size: 13px; color: rgba(255,255,255,0.25); padding: 20px 18px; margin: 0; }

        .post-reader {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 32px;
          min-height: 400px;
        }
        .post-article {}
        .post-top {
          display: flex; align-items: flex-start; justify-content: space-between; gap: 16px;
          margin-bottom: 20px;
        }
        .post-date-label {
          font-size: 11px; font-weight: 700; text-transform: uppercase;
          letter-spacing: 0.12em; color: rgba(245,158,11,0.5); margin: 0 0 8px;
        }
        .post-title {
          font-size: clamp(22px, 3vw, 32px); font-weight: 900;
          letter-spacing: -0.5px; color: #fff; margin: 0; line-height: 1.15;
        }
        .delete-btn {
          background: rgba(239,68,68,0.08); border: 1px solid rgba(239,68,68,0.2);
          color: #fca5a5; border-radius: 8px; padding: 7px 14px;
          font-size: 12px; font-weight: 600; cursor: pointer; white-space: nowrap; flex-shrink: 0;
        }
        .delete-btn:hover { background: rgba(239,68,68,0.15); }
        .post-divider {
          height: 1px; background: rgba(255,255,255,0.07); margin-bottom: 24px;
        }
        .post-body {
          font-size: 15px; color: rgba(255,255,255,0.55); line-height: 1.8;
          white-space: pre-wrap;
        }
      `}</style>
    </Layout>
  );
}
