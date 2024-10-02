export default async function getUrls(modules) {
  const urlsArray = [];

  for (const path in modules) {
    const module = await modules[path]();
    const url = module.default;
    urlsArray.push(url);
  }

  return urlsArray;
}
