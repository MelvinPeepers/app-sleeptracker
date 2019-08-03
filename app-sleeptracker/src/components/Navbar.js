import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/zzz-white.png";
import banner from "../Assets/banner.jpg";

const Header = styled.header`
  font-family: Sans-Serif;
  background-image: url(${banner});
  background-size: cover;
  padding: 4rem 0;
  @media only screen and (max-width: 800px) {
    padding: 5rem 0;
  }
`;

const Nav = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  .logo {
    height: 3rem;
    display: flex;
    flex-grow: 1;
    a {
      font-size: 1rem;
      display: flex;
      padding: 0;
      text-decoration: none;
      :visited {
        color: white;
      }
      img {
        height: 3rem;
      }
      h1 {
        align-self: center;
      }
    }
  }
  #menu {
      display: flex;
    .nav-items {
      display: flex;
      height: 3rem;
      justify-content: center;
      align-items: center;
      a {
        margin: 0.5rem;
        color: white;
        text-decoration: none;
        :visited {
          color: white;
        }
      }
    }
    .login {
      display: flex;
      button {
        margin: 0 0.5rem;
        height: 3rem;
        background-color: #2e4482;
        border: none;
        border-radius: 5px;
        :hover {
          background-color: yellow;
          a {
            color: black !important;
          }
        }
        a {
          text-decoration: none;
          :visited {
            color: white;
          }
        }
      }
    }
    @media only screen and (max-width: 800px) {
      display: none !important;
    }
  }

  #menuToggle {
    display: block;
    position: absolute;
    top: 50px;
    right: 50px;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;
    @media only screen and (min-width: 800px) {
      display: none !important;
    }
    a {
      text-decoration: none;
      color: #232323;

      transition: color 0.3s ease;
      :hover {
        color: tomato;
      }
    }
    input {
      display: block;
      width: 40px;
      height: 32px;
      position: absolute;
      top: -7px;
      left: -5px;

      cursor: pointer;

      opacity: 0; /* hide this */
      z-index: 2; /* and place it over the hamburger */

      -webkit-touch-callout: none;
    }
    span {
      display: block;
      width: 33px;
      height: 4px;
      margin-bottom: 5px;
      position: relative;

      background: #cdcdcd;
      border-radius: 3px;

      z-index: 1;

      transform-origin: 4px 0px;

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
        background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
      :first-child {
        transform-origin: 0% 0%;
      }
      :nth-last-child(2) {
        transform-origin: 0% 100%;
      }
    }
    input:checked ~ span {
      opacity: 1;
      transform: rotate(45deg) translate(-2px, -1px);
      background: #232323;
    }
    input:checked ~ span:nth-last-child(3) {
      opacity: 0;
      transform: rotate(0deg) scale(0.2, 0.2);
    }
    input:checked ~ span:nth-last-child(2) {
      opacity: 1;
      transform: rotate(-45deg) translate(0, -1px);
    }
    input:checked ~ .mobile-menu {
      transform: scale(1, 1);
      opacity: 1;
    }

    .mobile-menu {
      position: absolute;
      width: 300px;
      margin: -100px 0 0 0;
      padding: 50px;
      padding-top: 125px;
      right: -100px;

      background: #ededed;
      list-style-type: none;
      -webkit-font-smoothing: antialiased;

      transform-origin: 0% 0%;
      transform: translate(100%, 0);

      transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
      .nav-items {
        display: flex;
        flex-direction: column;
      }
      a {
        padding: 10px 0;
        font-size: 22px;
      }
    }
  }
`;

class NavBar extends React.Component {
  render() {
    return (
      <Header>
        <Nav>
          <div className="logo">
            <a href="/">
              <img src={logo} alt="logo" />
              <h1>Sleep Tracker</h1>
            </a>
          </div>
          <div id="menu">
            <div className="nav-items">
              <a href="https://www-sleeptracker-july.netlify.com/what_is_sleep_tracker.html">What is Sleep Tracker?</a>
              <a href="https://www-sleeptracker-july.netlify.com/why-sleep.html">Why Sleep?</a>
              <a href="https://www-sleeptracker-july.netlify.com/who-are-we.html">Who are we?</a>
            </div>
            <div className="login">
              <button>
                <Link to="/signup">Sign Up</Link>
              </button>
              <button>
                <Link to="/login">Log In</Link>
              </button>
            </div>
          </div>
          <div id="menuToggle">
            <input type="checkbox" />
            <span />
            <span />
            <span />
            <div className="mobile-menu">
              <div className="nav-items">
                <a href="https://www-sleeptracker-july.netlify.com/what_is_sleep_tracker.html">What is Sleep Tracker?</a>
                <a href="https://www-sleeptracker-july.netlify.com/why-sleep.html">Why Sleep?</a>
                <a href="https://www-sleeptracker-july.netlify.com/who-are-we.html">Who are we?</a>
              </div>
              <div className="login">
                <button>
                  <Link to="/signup">Sign Up</Link>
                </button>
                <button>
                  <Link to="/login">Log In</Link>
                </button>
              </div>
            </div>
          </div>
        </Nav>
      </Header>
    );
  }
}
export default NavBar;
