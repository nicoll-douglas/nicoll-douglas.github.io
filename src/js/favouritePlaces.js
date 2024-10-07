import "../css/favourite-places.css";
const brazilImages = import.meta.glob("@/assets/images/places/brazil/*");
const viennaImages = import.meta.glob("@/assets/images/places/vienna/*");
import createGallery from "./common/createGallery";

const brazilLeft = document.querySelector("#brazil-left");
const brazilRight = document.querySelector("#brazil-right");
const brazilImg = document.querySelector("#brazil-img");

async function brazilGallery() {
  const { handleLeft, handleRight } = await createGallery(
    brazilImages,
    brazilImg
  );
  brazilLeft.addEventListener("click", () => handleLeft(brazilImg));
  brazilRight.addEventListener("click", () => handleRight(brazilImg));
}

brazilGallery();

const viennaLeft = document.querySelector("#vienna-left");
const viennaRight = document.querySelector("#vienna-right");
const viennaImg = document.querySelector("#vienna-img");

async function viennaGallery() {
  const { handleLeft, handleRight } = await createGallery(
    viennaImages,
    viennaImg
  );
  viennaLeft.addEventListener("click", () => handleLeft(viennaImg));
  viennaRight.addEventListener("click", () => handleRight(viennaImg));
}

viennaGallery();
