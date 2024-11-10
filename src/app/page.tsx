import Image from "next/image";
import PostsSection from "./components/PostsSection";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* start Hero Section */}
      <div className="hero-section">
        <div className="main-container">
          <div className="main-content">
            {/*Content div start */}
            <div className="hero-text">
              <h1 className="title">Hi, I am John, Creative Technologist</h1>
              <p className="description">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
              <button className="resume-btn">Download Resume</button>
            </div>
            {/*Content div end */}

            {/*Image div start */}
            <div className="hero-image-container">
              <div className="hero-image">
                <Image
                  src="/images/hero-image.png"
                  alt="hero"
                  width={292}
                  height={299}
                ></Image>
              </div>
            </div>
            {/*Image div end */}
          </div>
        </div>
      </div>
      {/* end Hero Section */}

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

      {/* featured-section */}
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
                ></Image>

                <div className="card-content">
                  <h2>Designing Dashboards</h2>

                  {/* badge*/}
                  <div className="badge-container">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p className="para">Dashboard</p>
                  </div>
                  <p className="paragraph">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
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
                ></Image>

                <div className="card-content">
                  <h2>Designing Dashboards</h2>

                  {/* badge*/}
                  <div className="badge-container">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p className="para">Dashboard</p>
                  </div>
                  <p className="paragraph">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
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
                ></Image>

                <div className="card-content">
                  <h2>Designing Dashboards</h2>

                  {/* badge*/}
                  <div className="badge-container">
                    <div className="badge">
                      <p>2020</p>
                    </div>
                    <p className="para">Dashboard</p>
                  </div>
                  <p className="paragraph">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
