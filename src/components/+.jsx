import React from "react";
import bell from "../bell.mp3";
import { useState } from "react";
function Plu() {
  const [Lv, setLv] = useState(Number(localStorage.getItem("px-")) || 1);
  const [count, sectcount] = useState(Number(localStorage.getItem("xp+")) || 1);
  const [reAsk, SetReAsk] = useState(localStorage.getItem("reAsk+") || 3);
  let random_Number = Math.floor(Math.random() * (Lv * 30));
  let random_Number2 = Math.floor(Math.random() * (Lv * 40));
  let result = random_Number2 > random_Number ? random_Number2 : random_Number;
  setTimeout((e) => {
    window.onload = () => check();
  }, 0);
  if (localStorage.getItem("turn+") <= 0) {
    window.history.back();
    localStorage.setItem("turn+", 0);
  }
  if (localStorage.getItem("turn-") <= 0) {
    window.history.back();
    localStorage.setItem("turn-", 0);
  }
  document.title = "Math App - (+)";

  function check() {
    localStorage.setItem("xp+", count);

    if (count < 10) {
      setLv((e) => (e = 0.25));
    }
    if (count > 10) {
      setLv((e) => (e = 0.3));
    }
    if (count >= 20) {
      setLv((e) => (e = 0.5));
    }
    if (count > 30) {
      setLv((e) => (e = 1));
    }
    if (count > 70) {
      setLv((e) => (e = 2));
    }
    if (count > 100) {
      setLv((e) => (e = 3));
    }
    if (count > 120) {
      setLv((e) => (e = 4));
    }
    if (document.querySelector(".inp").value !== "") {
      if (+document.querySelector(".inp").value + +random_Number === result) {
        sectcount((e) => (e += 1));
        let random_img = Math.round(Math.random() * 2);
        let random_img2 = Math.round(Math.random() * 2);
        const aduio = document.createElement("audio");
        let left = Math.round(Math.random() * 90);
        let left2 = Math.round(Math.random() * 90);
        let top2 = Math.round(Math.random() * 80);
        let top = Math.round(Math.random() * 80);

        let imgs = [
          "https://em-content.zobj.net/source/microsoft-teams/337/grinning-face-with-smiling-eyes_1f604.png",
          "https://em-content.zobj.net/source/microsoft-teams/337/star-struck_1f929.png",
          "https://em-content.zobj.net/source/microsoft-teams/337/winking-face_1f609.png",
        ];
        const pop = document.createElement("img");
        const pop2 = document.createElement("img");
        pop.classList.add("pop");
        pop2.classList.add("pop");
        pop.style.filter = "hue-rotate(130deg)";
        pop.src = imgs[random_img];
        pop.style.cssText = `position:absolute;wid th:100px;height:100px;top:${top}%;left:${left}%;text-align:center;z-index:1;`;
        pop2.src = imgs[random_img2];
        pop2.style.cssText = `position:absolute;width:100px;height:100px;left:${left2}%;top:${top2}%;text-align:center;z-index:0 ;`;
        document.querySelector("#plus").append(pop);
        document.querySelector("#plus").append(pop2);
        setInterval((e) => pop2.remove(), 1800);
        setInterval((e) => pop.remove(), 1800);
        aduio.autoplay = true;
        aduio.src = bell;
        aduio.playbackRate = 1.5;

        document.querySelector("#plus").append(aduio);
        setInterval((e) => aduio.remove(), 1000);
        document.querySelector(".inp").value = "";
      } else {
        const aduio = document.createElement("audio");
        const img = document.createElement("img");
        const img2 = document.createElement("img");
        let random_img = Math.round(Math.random() * 2);
        let imgs = [
          "https://em-content.zobj.net/source/microsoft-teams/337/persevering-face_1f623.png",
          "https://em-content.zobj.net/source/microsoft-teams/337/sad-but-relieved-face_1f625.png",
          "https://em-content.zobj.net/source/microsoft-teams/337/pensive-face_1f614.png",
        ];
        document.querySelector("#plus").append(img);
        document.querySelector("#plus").append(img2);
        img.classList.add("pop");
        img2.classList.add("pop");
        let top = Math.round(Math.random() * 80);
        let top2 = Math.round(Math.random() * 80);
        let left = Math.round(Math.random() * 80);
        let left2 = Math.round(Math.random() * 80);
        img.src = imgs[random_img];
        img2.src = imgs[random_img];
        img.style.cssText = `position:absolute;width:100px;height:100px;left:${left}%;top:${top}%;text-align:center;z-index:0 ;`;
        img2.style.cssText = `position:absolute;width:100px;height:100px;left:${left2}%;top:${top2}%;text-align:center;z-index:0 ;`;
        setInterval((e) => img2.remove(), 1800);
        setInterval((e) => img.remove(), 1800);
        document.querySelector("#plus").append(aduio);
        aduio.autoplay = true;
        //  aduio.src='./bell.mp3';
        document.querySelector(".inp").value = "";
        document.querySelector("#score_").classList.add("toggle");
        setTimeout(
          (e) => document.querySelector("#score_").classList.remove("toggle"),
          1000
        );
        setInterval((e) => aduio.remove(), 1000);
      }
      document.querySelector(".inp").focus();
    }
  }
  const ReAsk = (e) => {
    if (reAsk !== 0) {
      SetReAsk((e) => (e -= 1));
      localStorage.setItem("reAsk+", reAsk);
    }
    if (reAsk === 0) {
      alert("You have 0 reAsk ,Go to shop to buy it");
    }
  };

  return (
    <div id="plus">
      <h1 id="score" style={{ "--color": "#ff2247" }}>
        <i className="fa-regular fa-gem"></i> :{" "}
        <span id="score_"> {count} </span>
        <br />
        <i className="fa-solid fa-up-long"></i> : <span id="LV">{Lv}</span>
        <br />
      </h1>
      <span id="timer">
        <i className="fa-solid fa-hourglass-half"></i>
      </span>

      <button id="reAsk" onClick={ReAsk} style={{ "--color": "#ff2247" }}>
        <i className="fa-solid fa-rotate-right"></i>
      </button>
      <h1 id="qu" style={{ "--color": "#ff2247" }}>
        How much <span id="halal">+</span> {random_Number} = {result} ?
      </h1>

      <section className="quSection">
        <input
          type="number"
          className="inp"
          min="0"
          max="500"
          id="inpUT_"
          style={{ "--color": "#ff2247" }}
          onKeyDown={(e) => {
            if (e.target.value.length >= 4) {
              e.target.value = "";
              e.target.value.replace("-", "");
            }
            console.log(e.target.value.length);
            if (e.key === "Enter") {
              check();
            }
          }}
        />
        <h1 id="_" style={{ "--color": "#ff2247" }}>
          +
        </h1>
        <h1 id="number" style={{ "--color": "#ff2247" }}>
          {random_Number}
        </h1>
        <h1 id="eq" style={{ "--color": "#ff2247" }}>
          =
        </h1>
        <h1 id="result" style={{ "--color": "#ff2247" }}>
          {result}
        </h1>
      </section>
      <button id="check" onClick={check} style={{ "--color": "#ff2247" }}>
        check
      </button>
    </div>
  );
}

export default Plu;
