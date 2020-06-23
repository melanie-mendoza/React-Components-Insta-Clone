// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  let [comments] = useState(props.comments)
  let [newComment] = useState("")



  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      
      {comments.map(commentItems => {
        return(
          <Comment comment = {commentItems} />
        )
      })}
      <CommentInput addComment = {newComment} />
    </div>
  );
};

export default CommentSection;
