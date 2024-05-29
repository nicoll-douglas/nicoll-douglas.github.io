import Header from "./Header";

export default function ArticleHeader({
  title,
  projectLink,
  repoLink,
  imageUrl,
  background,
}) {
  return (
    <Header background={background}>
      <img src={imageUrl} className="w-24 sm:hidden mr-4" aria-hidden="true" />
      <div className="flex flex-col items-center justify-center mx-6 md:mx-0">
        <p className="text-xl text-purple-700 ">Project:</p>
        <h1 className="text-5xl sm:text-3xl">{title}</h1>
        {projectLink ? (
          <a href={projectLink} target="_blank" className="text-lg">
            {projectLink}
          </a>
        ) : null}
        {repoLink ? (
          <a href={repoLink} target="_blank" className="text-base">
            GitHub repo
          </a>
        ) : null}
      </div>
      <img src={imageUrl} className="w-24 sm:hidden mr-4" aria-hidden="true" />
    </Header>
  );
}
