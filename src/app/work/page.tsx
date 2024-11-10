import React from "react";
import Image from "next/image";

const Page = () => {
  return (
    <div className="featured-section">
      <div className="main-container">
        <div className="main">
          <div className="main-heading">
            <h3>Featured Works</h3>
          </div>

          {/* Featured Card */}
          <div className="parent-card">
            {/* featured Card 1*/}
            <div className="main-card">
              <Image
                src="/images/work1.png"
                alt="work1"
                width={246}
                height={180}
              />

              <div className="card-content">
                <h2>Designing Dashboards</h2>

                {/* badge*/}
                <div className="badge-container">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                  <p>Dashboard</p>
                </div>
                <p className="paragraph">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            {/* featured Card 2*/}
            <div className="main-card">
              <Image
                src="/images/work2.png"
                alt="work1"
                width={246}
                height={180}
              />

              <div className="card-content">
                <h2>Designing Dashboards</h2>

                {/* badge*/}
                <div className="badge-container">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                  <p>Dashboard</p>
                </div>
                <p className="paragraph">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            {/* featured Card 3*/}
            <div className="main-card">
              <Image
                src="/images/work3.png"
                alt="work1"
                width={246}
                height={180}
              />

              <div className="card-content">
                <h2>Designing Dashboards</h2>

                {/* badge*/}
                <div className="badge-container">
                  <div className="badge">
                    <p>2020</p>
                  </div>
                  <p>Dashboard</p>
                </div>
                <p className="paragraph">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
