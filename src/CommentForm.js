import React, { useState } from "react";

const CommentForm = ({ addComment }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newComment = {
      id: Date.now(),
      text,
    };

    addComment(newComment);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="comment-form">
      <input
        type="text"
        placeholder="Add a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />
      <button type="submit">Comment</button>
    </form>
  );
};

export default CommentForm;
