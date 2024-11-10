import React from "react";
import PostsSection from "../components/PostsSection";
import Link from "next/link";

const page = () => {
  return (
    <>
      {/* start Posts Section */}
      <div className="posts-section">
        <div className="main-container">
          <div className="divider">
            <div className="heading">
              <h3>Recent Posts</h3>
              <Link className="view-all" href="#">
                View all
              </Link>
            </div>

            {/* Post Card 1*/}
            <div className="main-card">
              <PostsSection />
            </div>
          </div>
        </div>
      </div>
      {/* end Posts Section */}
    </>
  );
};

export default page;
