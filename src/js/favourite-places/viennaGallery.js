const images = import.meta.glob("@/assets/images/places/vienna/*");
import createGallery from "../common/createGallery";

const leftBtn = document.querySelector("#vienna-left");
const rightBtn = document.querySelector("#vienna-right");
const image = document.querySelector("#vienna-img");

async function viennaGallery() {
  const { handleLeft, handleRight } = await createGallery(images, image);

  leftBtn.addEventListener("click", () => handleLeft(image));
  rightBtn.addEventListener("click", () => handleRight(image));
}

viennaGallery();
