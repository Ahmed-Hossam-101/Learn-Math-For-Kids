import React, { useRef, useState } from "react";
import "../../style/Home.css";
import "../../style/Media.css";
import "../../style/Shop.css";
function Header(params) {
  const Shop = useRef();
  const [rerender, setrerender] = useState(0);
  //   const openShop= e =>{
  // alert('')
  //   }
  const buy1 = () => {
    // console.log(localStorage.getItem('xp+') != 0 && localStorage.getItem('xp-') != 0 );
    if (localStorage.getItem("xp+") > 0 && localStorage.getItem("xp-") > 0) {
      localStorage.setItem("xp+", +localStorage.getItem("xp+") - 2);
      localStorage.setItem("xp-", +localStorage.getItem("xp-") - 2);
      localStorage.setItem("reAsk+", +localStorage.getItem("reAsk+") + 1);
    }
    if (localStorage.getItem("xp+") >= 0 && localStorage.getItem("xp-") <= 0) {
      alert("you didn't play - ");
    }
    if (localStorage.getItem("xp+") <= 0 && localStorage.getItem("xp-") <= 0) {
      alert("you didn't play any game ");
    }
    if (localStorage.getItem("xp+") <= 0 && localStorage.getItem("xp-") >= 0) {
      alert("you didn't play + ");
    }
    setrerender((e) => (e += 1));
    console.log(rerender);
  };
  const buy2 = () => {
    if (localStorage.getItem("xp+") > 0) {
      localStorage.setItem("xp+", +localStorage.getItem("xp+") - 3);
      localStorage.setItem("turn+", +localStorage.getItem("turn+") + 1);
    }

    if (localStorage.getItem("xp+") <= 0) {
      alert("you should play + ");
    }
    setrerender((e) => (e += 1));
    console.log(rerender);
  };
  const buy3 = () => {
    if (localStorage.getItem("xp-") > 0) {
      localStorage.setItem("xp-", +localStorage.getItem("xp-") - 3);
      localStorage.setItem("turn+", +localStorage.getItem("turn+") + 1);
    }

    if (localStorage.getItem("xp-") <= 0) {
      alert("you should play - ");
    }
    setrerender((e) => (e += 1));
    console.log(rerender);
  };
  const buy = () => {
    if (localStorage.getItem("xp+") > 0) {
      localStorage.setItem("xp+", +localStorage.getItem("xp+") - 1);
      localStorage.setItem("turn+", +localStorage.getItem("turn+") + 1);
    }

    if (localStorage.getItem("xp+") <= 0) {
      alert("you should play + ");
    }
    setrerender((e) => (e += 1));
    console.log(rerender);
  };
  return (
    <>
      <nav id="header">

        <span
          className="shop"
          onClick={(e) => (Shop.current.style.display = "block")}
        >
          <i className="fa-solid fa-shop"></i>
        </span>
      </nav>
      <div className="Shop" ref={Shop} style={{ display: "none" }}>
        <section className="blackScreen"></section>
        <section className="items">
          <section id="coins">
            <p
              className="px -"
              style={{ "--color": "#22db25", "--color2": "#0f7" }}
            >
              <i className="fa-regular fa-gem"></i>{" "}
              <span>
                {" "}
                {Number(
                  +localStorage.getItem("xp+") + +localStorage.getItem("xp-")
                )}
              </span>
            </p>
            <p className="px -" style={{ "--color": "#ff2247" }}>
              <i className="fa-regular fa-gem"></i>{" "}
              <span> {Number(localStorage.getItem("xp+"))}</span>
            </p>
            <p className="px +" style={{ "--color": "#07f" }}>
              <i className="fa-regular fa-gem"></i>
              <span> {Number(localStorage.getItem("xp-"))}</span>
            </p>
          </section>
          <nav style={{ "--color": "#25db25" }}>
            <span className="icon">
              <i className="fa-solid fa-rotate-right"></i>
            </span>
            <span className="qty-item">
              {Number(localStorage.getItem("reAsk+"))}
            </span>
            <button
              className="buy"
              onClick={(e) => {
                buy1();
              }}
            >
              buy
            </button>
          </nav>
          <nav style={{ "--color": "#ff2247" }}>
            <span className="icon">
              <i className="bx bxs-bolt-circle"></i>
            </span>
            <span className="qty-item">
              {Number(localStorage.getItem("turn+"))}
            </span>
            <button className="buy" 
               onClick={(e) => {
                buy2();
              }}>buy</button>
          </nav>
          <nav style={{ "--color": "#07f" }}>
            <span className="icon">
              <i className="bx bxs-bolt-circle"></i>
            </span>
            <span className="qty-item">
              {Number(localStorage.getItem("turn-"))}
            </span>
            <button className="buy">buy</button>
          </nav>
          <span onClick={(e) => (Shop.current.style.display = "none")} id="ex">
            <i class="fa-solid fa-xmark"></i>
          </span>
        </section>
      </div>
    </>
  );
}
export default Header;
