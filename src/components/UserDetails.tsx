import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { formatter, getCurrentDay, routine } from "../utils/date";
import { FaHandHoldingWater } from "react-icons/fa";
import CardContainer from "../features/Dashboard/DashboardMain/Components/CardContainer";

interface UserDetailsProps {
  title: string;
  syncTime?: string;
}

const UserDetails: React.FC<UserDetailsProps> = ({ title, syncTime }) => {
  const [fullScreen, setFullScreen] = useState(false);

  const handleFullScreen = () => {
    const docEl = document.getElementsByClassName("section-content")[0];

    const requestFullScreen =
      docEl.requestFullscreen ||
      docEl.mozRequestFullScreen ||
      docEl.webkitRequestFullScreen ||
      docEl.msRequestFullscreen;
    const cancelFullScreen =
      document.exitFullscreen ||
      document.mozCancelFullScreen ||
      document.webkitExitFullscreen ||
      document.msExitFullscreen;

    if (
      !document.fullscreenElement &&
      !document.mozFullScreenElement &&
      !document.webkitFullscreenElement &&
      !document.msFullscreenElement
    ) {
      requestFullScreen.call(docEl);
      setFullScreen(true);
    } else {
      setFullScreen(false);
      cancelFullScreen.call(document);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      if (document.fullscreenElement === null) {
        setFullScreen(false);
      }
    };

    const handleWebkitFullscreenChange = () => {
      if (document.webkitFullscreenElement === null) {
        setFullScreen(false);
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener(
      "webkitfullscreenchange",
      handleWebkitFullscreenChange
    );

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleWebkitFullscreenChange
      );
    };
  }, []);

  return (
    <SectionStyled className="custom-display user-detail">
      <CardContainer>
        <img
          src={`/images/${
            fullScreen ? "exit-fullscreen" : "enter-fullscreen"
          }.svg`}
          className="full-screen"
          onClick={handleFullScreen}
          alt="image"
        />
        <div className="greet">
          <h3>{`Good ${routine()} !`}</h3>
          <h1>
            {title.length !== 1 ? (
              title
            ) : (
              <span style={{ color: "#fff" }}>XXXXX XXXXX</span>
            )}
          </h1>
        </div>
        <div className="text-holder">
          <div className="sm-card date">
            <div className="lft">
              <FaHandHoldingWater />
              <span className="rt">Date</span>
            </div>
            <span className="rt">
              {formatter(getCurrentDay()).format("ll")}
            </span>
          </div>
        </div>
      </CardContainer>
    </SectionStyled>
  );
};

export { UserDetails };

const SectionStyled = styled.div`
  position: relative;
  img {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
    fill: #a7a9bc;
  }
  a {
    text-decoration: none;
    color: #272833;
    cursor: pointer;
  }
  &.user-detail {
    .text-holder {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      font-size: 10px;
      line-height: 10px;
      .sm-card {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 6px 12px;
        border-radius: 4px;
        font-weight: 400;
        min-width: 152px;
        border: 1px solid rgba(46, 90, 172, 0.4);
        color: #2e5aac;
        background-color: #eef2fa;
        &.sync {
          border: 1px solid #47c464;
          color: #287d3c;
          background-color: #edf9f0;
          .icon {
            fill: #287d3c;
          }
        }
        .icon {
          height: 9px;
          width: 9px;
          fill: #2e5aac;
          margin-right: 6px;
        }
        .lft {
          .icon {
            position: relative;
            top: -1px;
          }
        }
        .rt {
          font-weight: 500;
        }
      }
    }
  }
`;
export default SectionStyled;
