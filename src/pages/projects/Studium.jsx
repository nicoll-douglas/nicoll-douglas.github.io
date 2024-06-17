import rubiksCubeUrl from "../../assets/images/rubiks-cube.webp";
import Article from "../../components/Article";
import ProjectHeader from "../../components/ProjectHeader";
import ArticleBody from "../../components/ArticleBody";
import ArticleSection from "../../components/ArticleSection";
import gallery from "../../data/studiumGallery";
import { useState } from "react";

export default function Studium() {
  const [galleryIndex, setGalleryIndex] = useState(0);

  function handleGalleryRight() {
    if (galleryIndex === 6) return setGalleryIndex(0);
    setGalleryIndex(galleryIndex + 1);
  }

  function handleGalleryLeft() {
    if (galleryIndex === 0) return setGalleryIndex(6);
    setGalleryIndex(galleryIndex - 1);
  }

  return (
    <Article>
      <ProjectHeader
        background="bg-orange-200"
        imageUrl={rubiksCubeUrl}
        title="Studium"
        projectLink="https://nicoll-douglas.github.io/studium"
        repoLink="https://github.com/nicoll-douglas/studium"
        finishedOn="29/05/24"
      />
      <ArticleBody>
        <ArticleSection heading="Background" headingColor="text-teal-700">
          <p>
            {
              "This is one of my projects that I've worked on. A web application named 'Studium' after the Latin word for 'study'. Fancy huh? It is an application, or rather, a collective set of smaller, related applications that consists of study tools like a note-taker, to do list and bookmarking feature. The main idea behind this application was to try and build some kind of fully fleshed-out, mock web product/service to not only test my skills, but also help me get to grips with React, the JavaScript framework it is built on."
            }
          </p>
        </ArticleSection>
        <ArticleSection
          heading="Some key features of this project:"
          headingColor="text-red-600"
        >
          <ul className="list-disc items-center px-4">
            <li>A landing page</li>
            <li>Site navigation with client-side routing</li>
            <li>Full site responsiveness and accessibility</li>
            <li>
              Note-taking, to-do list and bookmarking apps with CRUD features
            </li>
            <li>Pomodoro timer and calculator apps</li>
            <li>
              A real time dashboard to view user-created items and current timer
            </li>
            <li>Drag and drop functionality</li>
          </ul>
        </ArticleSection>
        <ArticleSection heading="Gallery" headingColor="text-purple-700">
          <figure className="window">
            <img
              src={gallery[galleryIndex].url}
              className="min-w-[1020px] xl:w-auto xl:min-w-0"
            />
            <figcaption className="text-lg">
              {gallery[galleryIndex].caption}
            </figcaption>
          </figure>
          <div className="flex gap-1">
            <button className="bg-gray-300" onClick={handleGalleryLeft}>
              {"<"}
            </button>
            <button className="bg-gray-300" onClick={handleGalleryRight}>
              {">"}
            </button>
          </div>
        </ArticleSection>
      </ArticleBody>
    </Article>
  );
}
