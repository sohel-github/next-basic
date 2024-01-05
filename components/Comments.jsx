import React from "react";

const Comments = async ({ promise }) => {
  const comments = await promise;
  return (
    <div>
      <h1 className="2xl mb-5">All Comments</h1>
      <ul>
        {comments
          ? comments.map((comment) => (
              <li key={comment.id}>
                <h3 className="text-green-500">
                  <b>Name : </b>
                  {comment.name}
                </h3>
                <h3 className="text-red-500">
                  <b>Email : </b>
                  {comment.email}
                </h3>
                <p>{comment.body}</p>
              </li>
            ))
          : "No comments is here"}
      </ul>
    </div>
  );
};

export default Comments;
