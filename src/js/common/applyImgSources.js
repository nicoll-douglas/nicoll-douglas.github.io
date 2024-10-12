import ballOffUrl from "@/assets/images/common/ball-off.png";
import ballOnUrl from "@/assets/images/common/ball-on.gif";
import ballNewUrl from "@/assets/images/common/ball-new.gif";
import hDividerUrl from "@/assets/images/common/h-divider.gif";
import palmTree2 from "@/assets/images/common/palm-tree-2.gif";
import webBtnUrl from "@/assets/images/jiggys-webspace-btn.jpg";
import separator from "@/assets/images/common/separator-4.gif";
import printImg from "@/assets/images/common/print.gif";
import setSize from "./setSize";

const hDividers = [...document.querySelectorAll(".h-divider")];
hDividers.forEach((img) => {
  img.src = hDividerUrl;
  img.ariaHidden = true;
});

const statusBalls = [...document.querySelectorAll(".status-ball")];
statusBalls.forEach((img) => {
  img.ariaHidden = true;
  switch (img.dataset.variant) {
    case "off":
      img.src = ballOffUrl;
      setSize(img, 14);
      break;
    case "new":
      img.src = ballNewUrl;
      setSize(img, 24);
      break;
    default:
      img.src = ballOnUrl;
      setSize(img, 16);
  }
});

const palmDividers = [...document.querySelectorAll(".palm-divider")];
palmDividers.forEach((divider) => {
  const leftImg = document.createElement("img");
  const rightImg = document.createElement("img");
  const hr = document.createElement("hr");
  leftImg.src = palmTree2;
  rightImg.src = palmTree2;
  leftImg.ariaHidden = true;
  rightImg.ariaHidden = true;
  setSize(leftImg, 95);
  setSize(rightImg, 95);
  divider.appendChild(leftImg);
  divider.appendChild(hr);
  divider.appendChild(rightImg);
});

const webBtns = [...document.querySelectorAll(".web-btn")];
webBtns.forEach((div) => {
  const a = document.createElement("a");
  a.href = "https://nicoll-douglas.github.io";
  a.ariaLabel = "Jiggy's Webspace";
  const img = document.createElement("img");
  img.src = webBtnUrl;
  img.alt = "Jiggy's Webspace 88x31 button";
  a.appendChild(img);
  div.appendChild(a);
});

const separators = [...document.querySelectorAll(".separator-bar")];
separators.forEach((img) => {
  img.src = separator;
  img.ariaHidden = true;
  img.classList.add("w-full");
  img.style.height = "10px";
});

const printBtns = [...document.querySelectorAll(".print")];
printBtns.forEach((btn) => {
  const img = document.createElement("img");
  img.src = printImg;
  btn.appendChild(img);
  btn.addEventListener("click", () => window.print());
});
