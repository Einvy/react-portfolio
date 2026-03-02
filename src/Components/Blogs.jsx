import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BLOGS_INDEX_URL = "/blogs/index.json";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const [selectedSlug, setSelectedSlug] = useState(null);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIndex = async () => {
      try {
        const res = await fetch(BLOGS_INDEX_URL);
        if (!res.ok) throw new Error("Failed to load blog list");
        const data = await res.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchIndex();
  }, []);

  useEffect(() => {
    if (!selectedSlug) {
      setContent("");
      return;
    }
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/blogs/${selectedSlug}.md`);
        if (!res.ok) throw new Error("Failed to load post");
        const text = await res.text();
        setContent(text);
      } catch (err) {
        setError(err.message);
        setContent("");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [selectedSlug]);

  const handleSelectPost = (slug) => {
    setSelectedSlug(slug);
  };

  const handleBack = () => {
    setSelectedSlug(null);
    setContent("");
    setError(null);
  };

  const selectedPost = posts.find((p) => p.slug === selectedSlug);

  return (
    <section className="Blogs" aria-labelledby="blogs-heading">
      <h2 id="blogs-heading">Blogs</h2>

      {error && (
        <p className="Blogs__error" role="alert">
          {error}
        </p>
      )}

      {!selectedSlug ? (
        <div className="Blogs__list-wrapper">
          {loading ? (
            <p className="Blogs__loading">Loading posts…</p>
          ) : (
            <ul className="Blogs__list">
              {posts.map((post) => (
                <li key={post.slug}>
                  <button
                    type="button"
                    className="Blogs__post-link"
                    onClick={() => handleSelectPost(post.slug)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSelectPost(post.slug);
                      }
                    }}
                    aria-label={`Read blog: ${post.title}`}
                  >
                    <span className="Blogs__post-title">{post.title}</span>
                    <span className="Blogs__post-date">{post.date}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : (
        <article className="Blogs__article">
          <button
            type="button"
            className="Blogs__back"
            onClick={handleBack}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleBack();
              }
            }}
            aria-label="Back to blog list"
          >
            ← Back
          </button>
          {loading ? (
            <p className="Blogs__loading">Loading…</p>
          ) : (
            <>
              {selectedPost && (
                <header className="Blogs__article-header">
                  <h3 className="Blogs__article-title">{selectedPost.title}</h3>
                  <time className="Blogs__article-date" dateTime={selectedPost.date}>
                    {selectedPost.date}
                  </time>
                </header>
              )}
              <div className="Blogs__markdown">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
              </div>
            </>
          )}
        </article>
      )}
    </section>
  );
};

export default Blogs;
