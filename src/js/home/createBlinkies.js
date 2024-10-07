import appendMany from "../common/appendMany";
const blinkies = import.meta.glob("@/assets/images/blinkies/*");

const container = document.querySelector("#blinkies-div");

appendMany(container, blinkies, (img) => {
  img.style.width = "150px";
  img.style.height = "20px";
});
