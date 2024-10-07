import getUrls from "./getUrls";

export default async function appendMany(container, imageModules, callback) {
  const urls = await getUrls(imageModules);
  for (let i = 0; i < urls.length; i++) {
    const img = document.createElement("img");
    if (callback) callback(img);
    img.src = urls[i];
    img.alt = `Image ${i}`;
    container.appendChild(img);
  }
}
