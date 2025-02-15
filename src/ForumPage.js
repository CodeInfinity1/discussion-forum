import React, { useState } from "react";
import PostList from "./PostList.js";
import PostForm from "./PostForm.js";

const ForumPage = () => {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="forum-page">
      <h1>DISCUSSION FORUM</h1>
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
};

export default ForumPage;
