import Header from "./Header";
import PropTypes from "prop-types";

ProjectHeader.propTypes = {
  title: PropTypes.string.isRequired,
  projectLink: PropTypes.string,
  repoLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
  finishedOn: PropTypes.string.isRequired,
};

export default function ProjectHeader({
  title,
  projectLink,
  repoLink,
  imageUrl,
  background,
  finishedOn,
}) {
  return (
    <Header background={background}>
      <img src={imageUrl} className="w-24 sm:hidden mr-4" aria-hidden="true" />
      <div className="flex flex-col items-center justify-center mx-6 md:mx-0">
        <h1 className="text-5xl sm:text-3xl">{title}</h1>
        {projectLink ? (
          <a href={projectLink} target="_blank" className="text-lg">
            {projectLink}
          </a>
        ) : null}
        {repoLink ? (
          <a href={repoLink} target="_blank" className="text-lg -mt-1">
            GitHub repo
          </a>
        ) : null}
        <p className="text-lg -mt-1">{`Finished on: ${finishedOn}`}</p>
      </div>
      <img src={imageUrl} className="w-24 sm:hidden mr-4" aria-hidden="true" />
    </Header>
  );
}
