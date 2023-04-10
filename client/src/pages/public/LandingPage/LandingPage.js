import React, {
  Suspense,
  lazy,
  memo,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import { PacmanLoader } from "react-spinners";
import "./LandingPage.scss";

const LOADING_DURATION = 2000;
const FADE_OUT_DURATION = 800;
const PACMAN_LOADER_COLOR = "#614644";
const PacmanLoaderMemo = memo(PacmanLoader);
const LazyPacmanLoader = lazy(() => import("react-spinners/PacmanLoader"));

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [sideBarOpener, setSideBarOpener] = useState(false);

  const navigate = useNavigate();

  const handleLoadingFinish = useCallback(() => {
    const timeoutId = setTimeout(() => {
      setFadeOut(true);
      const timeoutId2 = setTimeout(() => {
        setLoading(false);
      }, FADE_OUT_DURATION);
      return () => clearTimeout(timeoutId2);
    }, LOADING_DURATION);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    handleLoadingFinish();
  }, [handleLoadingFinish]);

  return (
    <div className="landing-page">
      {loading ? (
        <div className="splash-container">
          <Suspense fallback={<PacmanLoaderMemo color={PACMAN_LOADER_COLOR} />}>
            <LazyPacmanLoader
              css={{
                opacity: fadeOut ? 0 : 1,
                transition: `opacity ${FADE_OUT_DURATION}ms ease-in-out`,
              }}
              color={PACMAN_LOADER_COLOR}
            />
          </Suspense>
        </div>
      ) : (
        <div className="main">
          <header className="header">
            <div className="logo">SoundHive</div>
            <nav className="menu">
              <MenuItems />
            </nav>
            <div
              className={sideBarOpener ? "hide SideMenuWrap" : "SideMenuWrap"}
            >
              <div className="icon">
                <IoClose
                  className="item"
                  onClick={() => setSideBarOpener(!sideBarOpener)}
                  aria-label="Close sidebar"
                />
              </div>

              <MenuItems toggle={() => setSideBarOpener(!sideBarOpener)} />
            </div>

            <IoMenu
              className="menuIcon"
              onClick={() => setSideBarOpener(!sideBarOpener)}
              aria-label="Open sidebar"
            />
          </header>
          <div className="page home" id="home">
            <div className="home-container">
              <div className="content">
                <div className="heading">Welcome to SoundHive</div>
                <p>
                  the audio chat platform where you can join virtual spaces and
                  communicate with others in real-time through voice chat. With
                  SoundHive, you can connect with people from all around the
                  world and engage in meaningful conversations. Our platform is
                  designed to be user-friendly and accessible to people of all
                  ages and technical backgrounds. You can easily create an
                  account and join any of our active spaces or create your own
                  space and invite others to join
                </p>
                <div
                  className="get-start-btn"
                  onClick={() => navigate("/register")}
                >
                  Join Now!
                </div>
              </div>
              <div className="right"></div>
            </div>
          </div>

          <div className="page about" id="about">
            <div className="aboutus-heading"></div>
            <div className="aboutus-details">
              <div className="contrast">
                <div className="card">
                  <h1>About Us</h1>
                  At SoundHive, we believe that communication is essential for
                  building meaningful connections. We created SoundHive to
                  provide a platform where people can come together and engage
                  in real-time conversations through voice chat. Our team is
                  passionate about creating innovative solutions that empower
                  people to connect with each other. We are constantly working
                  to improve our platform and provide the best possible
                  experience for our users. We value our users' privacy and
                  security, and we take every measure to protect their
                  information. Our platform is designed to be easy to use and
                  accessible to everyone, regardless of their technical
                  background.
                  <p>
                    Join SoundHive today and become part of a community that
                    values authentic communication and meaningful connections.
                  </p>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const MenuItems = ({ toggle }) => {
  const navigate = useNavigate();
  const itemHandeler = useCallback(
    (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({ behavior: "smooth" });
      toggle();
    },
    [toggle]
  );

  return (
    <div className="menu-items">
      <div className="item" onClick={() => itemHandeler("home")}>
        Home
      </div>
      <div className="item" onClick={() => itemHandeler("about")}>
        About
      </div>
      <div href="#" className="item signin" onClick={() => navigate("/login")}>
        Signin
      </div>
    </div>
  );
};
export default LandingPage;
