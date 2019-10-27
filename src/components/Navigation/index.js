import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "gatsby-link";
import { css } from "@emotion/core";
import Logo from "../../assets/logo.svg";

const basicNav = css`
  display: flex;
  position: fixed;
  top: 0;
  align-items: center;
  background-color: white;
  margin: 0;
  width: 100%;
  padding: 0.25rem 16px;
  list-style-type: none;
  -webkit-box-shadow: 0px 2px 15px 1px rgba(99, 99, 99, 0.8);
  -moz-box-shadow: 0px 2px 15px 1px rgba(99, 99, 99, 0.8);
  box-shadow: 0px 2px 15px 1px rgba(99, 99, 99, 0.8);
  z-index: 9998;
  height: 3.5rem;

  @media (min-width: 832px) {
    padding: 0.25rem 64px;
  }
`;

const linkStyle = css`
  color: inherit;
  font-weight: 600;

  & :hover {
    cursor: pointer;
  }
`;

const fullNav = css`
  ${basicNav};
  display: none;
  & li {
    margin: 0;
  }

  & li img {
    display: inline-block;
    vertical-align: middle;
  }
  & div {
    display: flex;
    min-width: 28em;
    justify-content: space-between;
    margin-left: auto;
  }

  & div a {
    ${linkStyle};
  }
  @media (min-width: 991px) {
    display: flex;
  }
`;

const mobileNav = css`
  ${basicNav};
  & li {
    margin: 0;
  }

  & li:last-child {
    margin-left: auto;
    font-weight: 600;
  }

  & li img {
    display: block;
    margin: auto;
  }
  @media (min-width: 991px) {
    display: none;
  }
`;

const mobileStyle = css`
  position: fixed;
  background-color: white;
  display: block;
  padding: 1rem;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  & ul {
    list-style-type: none;
    margin: 3rem 0 0 0;
    height: 100%;
    text-align: center;
    font-size: 2rem;
  }

  & ul li {
    margin-top: 2rem;
  }
  & ul li a {
    ${linkStyle};
  }

  & div {
    font-weight: 600;
    text-align: right;
  }
`;

class MobileNav extends Component {
  constructor(props) {
    super(props);
    this.mobileContainer = document.createElement("div");
    document.body.appendChild(this.mobileContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.mobileContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <nav css={mobileStyle}>
        <div onClick={this.props.toggleNav}>X</div>
        {this.props.children}
      </nav>,
      this.mobileContainer
    );
  }
}

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileActive: false
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    if (this.state.mobileActive) {
      this.setState({ mobileActive: false });
    } else {
      this.setState({ mobileActive: true });
    }
  }

  render() {
    return (
      <nav>
        <ul css={fullNav}>
          <li>
            <img alt="Company Logo" src={Logo} width="30px" height="30px" />{" "}
            {this.props.name ? this.props.name : "My Company"}
          </li>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/team">Team</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/career">Career</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </div>
        </ul>
        <ul css={mobileNav}>
          <li>
            <img alt="Company Logo" src={Logo} width="30px" height="30px" />{" "}
            {this.props.name ? this.props.name : "My Company"}
          </li>
          <li onClick={this.toggleNav}>MENU</li>
          {this.state.mobileActive && (
            <MobileNav toggleNav={this.toggleNav}>
              <ul>
                <li onClick={this.toggleNav}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={this.toggleNav}>
                  <Link to="/about">About Us</Link>
                </li>
                <li onClick={this.toggleNav}>
                  <Link to="/team">Team</Link>
                </li>
                <li onClick={this.toggleNav}>
                  <Link to="/projects">Projects</Link>
                </li>
                <li onClick={this.toggleNav}>
                  <Link to="/career">Career</Link>
                </li>
                <li onClick={this.toggleNav}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </MobileNav>
          )}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
