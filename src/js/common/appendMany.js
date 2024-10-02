import getUrls from "./getUrls";

export default async function appendMany(
  container,
  imageModules,
  altText,
  options
) {
  const urls = await getUrls(imageModules);
  for (let i = 0; i < urls.length; i++) {
    const img = document.createElement("img");
    if (options?.height) {
      img.style.height = `${options.height}px`;
    }
    if (options?.width) {
      img.style.width = `${options.width}px`;
    }
    img.src = urls[i];
    img.alt = `${altText} ${i}`;
    container.appendChild(img);
  }
}
