import getUrls from "./getUrls";

export default async function createGallery(imageModules, image) {
  const urls = await getUrls(imageModules);
  let currentIndex = 0;
  image.src = urls[currentIndex];

  function handleLeft() {
    if (currentIndex === 0) {
      currentIndex = urls.length - 1;
    } else {
      currentIndex -= 1;
    }
    image.src = urls[currentIndex];
  }

  function handleRight() {
    if (currentIndex === urls.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex += 1;
    }
    image.src = urls[currentIndex];
  }

  return { handleLeft, handleRight };
}
