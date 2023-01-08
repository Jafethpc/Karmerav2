import React, { useEffect } from "react";

export const Navigation = () => {
  useEffect(() => {
    const handleMenuClick = () => {
      const menu = document.querySelector(".navigation-slider");
      const navIcon = document.querySelector(".nav-btn");
      const invis = document.querySelector(".invisible");
      const marginProp = window
        .getComputedStyle(menu)
        .getPropertyValue("margin-left");

      if (marginProp === "-300px") {
        menu.style.marginLeft = "0px";
        navIcon.style.position = "fixed";
        invis.style.position = "relative";
      } else if (marginProp === "0px") {
        menu.style.marginLeft = "-300px";
        navIcon.style.removeProperty("position");
        invis.style.position = "absolute";
      }
    };

    const handleMainClick = () => {
      const menu = document.querySelector(".navigation-slider");
      const navIcon = document.querySelector(".nav-btn");
      const invis = document.querySelector(".invisible");
      const marginProp = window
        .getComputedStyle(menu)
        .getPropertyValue("margin-left");

      if (marginProp === "0px") {
        menu.style.marginLeft = "-300px";
        navIcon.style.removeProperty("position");
        invis.style.position = "absolute";
      }
    };

    if (document.querySelector(".nav-btn")) {
      document
        .querySelector(".nav-btn")
        .addEventListener("click", handleMenuClick);
    }
    if (document.querySelector("main")) {
      document.querySelector("main").addEventListener("click", handleMainClick);
    }

    return () => {
      if (document.querySelector(".nav-btn")) {
        document
          .querySelector(".nav-btn")
          .removeEventListener("click", handleMenuClick);
      }
      if (document.querySelector("main")) {
        document
          .querySelector("main")
          .removeEventListener("click", handleMainClick);
      }
    };
  }, []);

  return (
    <>
      <section className="navigation-slider">
        <section className="sign-in">
          <img
            className="profile-icon"
            src={require("../images/Icons/profile-icon.png")}
            alt="Sign in"
          />
          <a className="sign-in_link">Sign in</a>
        </section>
        <ul className="navigation-options">
          <li className="option">
            <a href="/">
              <p>Home</p>
              <p>&#10095;</p>
            </a>
          </li>
          <li className="option">
            <a href="/products">
              <p>Cameras</p>
              <p>&#10095;</p>
            </a>
          </li>
          <li className="option">
            <a href="/products">
              <p>Lens</p>
              <p>&#10095;</p>
            </a>
          </li>
          <li className="option">
            <a href="/products">
              <p>Accessories</p>
              <p>&#10095;</p>
            </a>
          </li>
          <li className="option">
            <a href="/products">
              <p>Carrying Bags</p>
              <p>&#10095;</p>
            </a>
          </li>

          <li className="option">
            <a href="/products">
              <p>Tripods</p>
              <p>&#10095;</p>
            </a>
          </li>
          <li className="option">
            <a href="/products">
              <p>Sale</p>
              <p>&#10095;</p>
            </a>
          </li>
        </ul>
        <ul className="help-options">
          <li className="option">
            <a href="/contact">
              <p>Contact Us</p>
            </a>
          </li>
          <li className="option">
            <a href="/contact">
              <p>Newsletter</p>
            </a>
          </li>
          <li className="option">
            <a href="/contact">
              <p>Find a store</p>
            </a>
          </li>
          <li className="option">
            <a href="/contact">
              <p>Legal & Privacy</p>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
};
