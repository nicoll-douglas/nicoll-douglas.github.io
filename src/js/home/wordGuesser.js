import blueBtnHover from "@/assets/images/common/blue-btn-hover.gif";
import blueBtn from "@/assets/images/common/blue-btn.gif";

const btn = document.querySelector("#word-guesser-btn");
const image = btn.firstElementChild;

function handleClick() {
  const answer = window.prompt("Type something!");
  window.alert(`Are you sure you've typed: ${answer}?`);
  window.alert("Wrong, it appears you have typed: jiggy is awesome 8)");
}

btn.addEventListener("mouseenter", () => (image.src = blueBtnHover));
btn.addEventListener("mouseleave", () => (image.src = blueBtn));
btn.addEventListener("click", handleClick);
