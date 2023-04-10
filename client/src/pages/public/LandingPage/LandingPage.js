import { PacmanLoader } from "react-spinners";
import { IoClose, IoMenu } from "react-icons/io5";
import { memo, useCallback, useEffect, useState } from "react";
import "./LandingPage.scss";
import { useNavigate } from "react-router-dom";

const LOADING_DURATION = 2000;
const FADE_OUT_DURATION = 800;
const PacmanLoaderMemo = memo(PacmanLoader);

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [sideBarOpener, setSideBarOpener] = useState(false);

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
          <PacmanLoaderMemo
            className={fadeOut ? "fade-out" : ""}
            color="#614644"
          />
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
                />
              </div>

              <MenuItems />
            </div>

            <IoMenu
              className="menuIcon"
              onClick={() => setSideBarOpener(!sideBarOpener)}
            />
          </header>
          <div className="page home" id="home">
            <h1>Home</h1>
          </div>
          <div className="page about" id="about">
            <h1>About</h1>
          </div>
        </div>
      )}
    </div>
  );
};

const MenuItems = () => {
  const navigate = useNavigate();
  return (
    <div className="menu-items">
      <div
        className="item"
        onClick={() =>
          document.getElementById("home").scrollIntoView({ behavior: "smooth" })
        }
      >
        Home
      </div>
      <div
        className="item"
        onClick={() =>
          document
            .getElementById("about")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        About
      </div>
      <div href="#" className="item signin" onClick={() => navigate("/login")}>
        Signin
      </div>
    </div>
  );
};
export default LandingPage;
