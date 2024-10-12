import "../../css/home.css";
import "./wordGuesser";
import "./musicPlayer";
import "./createButtons";
import "./createBlinkies";
import "./songSelectionModal";
import "./timeSinceY2k";

const dangerZone = document.querySelector("#danger-zone");
setInterval(() => {
  dangerZone.classList.toggle("text-white");
  dangerZone.classList.toggle("text-black");
}, 750);
