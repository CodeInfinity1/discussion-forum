import React, { useState } from "react";

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;

    const newPost = {
      id: Date.now(),
      title,
      description,
      comments: [],
    };

    addPost(newPost);
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit} className="post-form">
      <textarea
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit" className="new-discussion-btn"> New Discussion</button>
    </form>
  );
};

export default PostForm;
