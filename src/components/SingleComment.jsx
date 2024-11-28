import React from "react";

const SingleComment = ({ comment }) => (
	<li className="list-group-item w-100">
		{comment.author}: {comment.comment}
	</li>
);

export default SingleComment;
