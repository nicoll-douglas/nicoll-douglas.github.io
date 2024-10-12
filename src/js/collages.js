import "../css/collages.css";
const images = import.meta.glob("@/assets/images/collages/blue/*");
const images2 = import.meta.glob("@/assets/images/collages/orange/*");

import appendMany from "./common/appendMany";

const container = document.querySelector("#blue-collage");
const container2 = document.querySelector("#orange-collage");

const imgCallback = (img) => {
  img.classList.add("collage-image");
  img.classList.add("border");
  img.classList.add("p-[4px]");
};

appendMany(container, images, imgCallback);
appendMany(container2, images2, imgCallback);
