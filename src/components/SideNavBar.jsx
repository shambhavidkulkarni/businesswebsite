import React from "react";
import "./sidenav.css";

export const SideNavBar = () => {
  return (
    <>
      {/* <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">
          &times;
        </a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <h2>Animated Sidenav Example</h2>
      <p>Click on the element below to open the side navigation menu.</p>
      <span style="font-size:30px;cursor:pointer" onclick="openNav()">
        &#9776; open
      </span> */}

      <div className="sidenav bg-transparent">
        <h5 className="border-left border-light"><a href="#about">About</a></h5>
        <h5><a href="#services">Services</a></h5>
        <h5><a href="#clients">Clients</a></h5>
        <h5><a href="#contact">Contact</a></h5>
      </div>
    </>
  );
};
