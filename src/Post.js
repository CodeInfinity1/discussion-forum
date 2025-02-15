import React, { useState } from "react";
import CommentForm from "./CommentForm.js";

const Post = ({ post }) => {
  const [comments, setComments] = useState(post.comments);

  const addComment = (comment) => {
    setComments([...comments, comment]);
  };

  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <small>Last edited on {new Date().toLocaleDateString()}</small>
      <CommentForm addComment={addComment} />
      {comments.map((comment) => (
        <p key={comment.id} className="comment">{comment.text}</p>
      ))}
    </div>
  );
};

export default Post;
