import React from "react";

const PostsSection = () => {
  return (
    <>
      <div className="post-card">
        <h2 className="title">Making a design system from scratch</h2>
        <p className="date">
          12 Feb 2020 | Design, Pattern
        </p>
        <p className="paragraph">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>

      {/* Post Card 2*/}

      <div className="post-card">
        <h2 className="title">Making a design system from scratch</h2>
        <p className="date">12 Feb 2020 | Design, Pattern</p>
        <p className="paragraph">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </>
  );
};

export default PostsSection;
