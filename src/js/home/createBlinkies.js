import appendMany from "../common/appendMany";
const blinkies = import.meta.glob("@/assets/images/blinkies/*");

const container = document.querySelector("#blinkies-div");

appendMany(container, blinkies, "Blinkie", { width: 150, height: 20 });
