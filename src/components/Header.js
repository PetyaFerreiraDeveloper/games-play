import React from "react";
import logo from "../assets/logo.svg";
import {ReactComponent as LogoWhiteIcon} from "../assets/logoWhite.svg";

const Header = () => {
  return (
    <header>
      {/* Navigation */}
      <h1>
        <a className="home" href="#">
          GamesPlay
        </a>
        {/* <img src={logoWhite} alt="" width="100px"/> */}
        <LogoWhiteIcon className="logoPan"/>
      </h1>
      <nav>
        <a href="#">All games</a>
        {/* Logged-in users */}
        <div id="user">
          <a href="#">Create Game</a>
          <a href="#">Logout</a>
        </div>
        {/* Guest users */}
        <div id="guest">
          <a href="#">Login</a>
          <a href="#">Register</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
