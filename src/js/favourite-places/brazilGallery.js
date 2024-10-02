const images = import.meta.glob("@/assets/images/places/brazil/*");
import createGallery from "../common/createGallery";

const leftBtn = document.querySelector("#brazil-left");
const rightBtn = document.querySelector("#brazil-right");
const image = document.querySelector("#brazil-img");

async function brazilGallery() {
  const { handleLeft, handleRight } = await createGallery(images, image);

  leftBtn.addEventListener("click", () => handleLeft(image));
  rightBtn.addEventListener("click", () => handleRight(image));
}

brazilGallery();
