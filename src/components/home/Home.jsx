import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Header from "./Header";
import "../../style/Home.css";
import { Tasks } from "./Tasks.jsx";
const Home = () => {
  const [turnP, setturnP] = useState(localStorage.getItem("turn+") || 5);
  const [turnN, setturnN] = useState(localStorage.getItem("turnN-") || 5);
  localStorage.setItem("turn+", turnP);
  localStorage.setItem("turn-", turnN);
  document.title = "Math App - Home";

  return (
    <>
      <div className="home">
        <Header />

        <nav className="c">
          <NavLink
            to="/Plu"
            onClick={(e) => {
              if (localStorage.getItem("turn+") !== 0) {
                localStorage.setItem(
                  "turn+",
                  +localStorage.getItem("turn+") - 1
                );
              }
            }}
          >
            <p
              className="tags__"
              style={{ "--color": "#ff2247", "--color2": "#b10017" }}
            >
              +
            </p>
          </NavLink>
          <NavLink
            to="/M"
            onClick={(e) => {
              if (localStorage.getItem("turn-") !== 0) {
                localStorage.setItem(
                  "turn-",
                  +localStorage.getItem("turn-") - 1
                );
              }
            }}
          >
            <p
              className="tags__ "
              style={{ "--color": "#07f", "--color2": "#0a6fe3" }}
            >
              -
            </p>
          </NavLink>
        </nav>
        <Tasks />
      </div>
    </>
  );
};

export default Home;
