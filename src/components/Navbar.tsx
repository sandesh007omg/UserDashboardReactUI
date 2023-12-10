import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaTh, FaUserAlt } from "react-icons/fa";
import * as routes from "../constants/route";
import { DASHBOARD, USERS } from "../constants/navigationMenu";
import styled from "styled-components";
import { useOutsideClick } from "../hooks/useClickOutside";

interface SidebarItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

function Navbar() {
  const [sidebar, setSidebar] = useState<boolean>(false);

  const showSidebar = () => setSidebar(!sidebar);
  const menuItem = [
    {
      path: routes?.DASHBOARD,
      name: DASHBOARD?.toLowerCase(),
      icon: <FaTh />,
    },
    {
      path: routes?.USERS,
      name: USERS?.toLowerCase(),
      icon: <FaUserAlt />,
    },
  ];
  const ref = useOutsideClick(() => setSidebar(false));
  return (
    <NavbarStyled>
      <IconContext.Provider value={{ color: "#000000 " }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar} ref={ref}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {menuItem.map((item: SidebarItem, index: number) => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={index}
                  className={`${item.name} ${isActive ? "active" : ""}`}
                >
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </NavbarStyled>
  );
}

export { Navbar };

const NavbarStyled = styled.div`
  .navbar {
    background: rgb(0, 39, 102);
    display: flex;
    justify-content: start;
    align-items: center;
    height: 56px;
  }

  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }

  .nav-menu {
    background-color: #fff;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    z-index: 2;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
  }

  .nav-text {
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 56px;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  .nav-menu-items {
    width: 100%;
    box-shadow: rgba(39, 40, 51, 0.12) 0px 10px 17px 5px;
    li {
      padding: 16px 24px 16px 24px;
      &.active {
        border-bottom: 2px solid #0b5fff;
        background: rgba(11, 95, 255, 0.3);
        svg,
        a {
          fill: #fff;
          color: #ffffff;
        }
      }
      a {
        color: #000;
        text-decoration: none;
      }
      span {
        text-transform: capitalize;
      }
    }
    .menu-bars {
      margin-left: 3rem;
      svg {
        fill: #fff;
      }
    }
  }
  .menu-bars {
    margin-left: 3rem;
    svg {
      fill: #fff;
    }
  }

  .navbar-toggle {
    background: rgb(0, 39, 102);
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }
`;
export default NavbarStyled;
