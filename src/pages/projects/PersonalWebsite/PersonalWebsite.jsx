import Article from "../../../components/Article";
import ArticleBody from "../../../components/ArticleBody";
import ArticleHeader from "../../../components/ArticleHeader";
import ArticleSection from "../../../components/ArticleSection";

import starUrl from "../../../assets/images/star.gif";

export default function PersonalWebsite() {
  return (
    <Article>
      <ArticleHeader
        background="bg-yellow-100"
        imageUrl={starUrl}
        title="My Personal Website"
        repoLink="https://github.com/nicoll-douglas/nicoll-douglas.github.io"
      />
      <ArticleBody>
        <ArticleSection heading="Background" headingColor="text-red-600">
          <p>
            The website that you are on is what I now consider my personal
            website. It is something I put together in three days or so and is
            just an informal thing I did for fun. A place to display and
            aggregate my projects, reflect and write about my coding progress
            and as a record that might be nice to have in future.
          </p>
          <p>
            This project is actually a proper full remake of a project I made
            when I originally started coding. I{"'"}m very into vaporwave and
            old 90s web aesthetics and so when I was first started learning HTML
            and CSS, I had the idea to build a mock personal website in such a
            style. The idea allowed me to work on a project I would enjoy as
            well as allow me to practice structuring and styling a simple,
            static webpage composed of HTML and CSS (which is really all 90s
            websites are and were). A good initial project.
          </p>
          <p>
            Much further along in my coding journey when I made this project, I
            decided to remake it given how much my skills had improved as well
            as gaining new ones such as working with CSS libraries, JavaScript
            and React. However, the bigger difference would be that this is a
            project that I now actively update and maintain as an official
            website of mine instead of it being another project that I leave to
            rot and age in my file system.
          </p>
          <p>
            The tools I used to build this site include React, Vite, TailwindCSS
            and{" "}
            <a href="https://jdan.github.io/98.css/" target="_blank">
              98.css
            </a>
            , a neat little Windows-98-inspired CSS library made by{" "}
            <a href="https://github.com/jdan" target="_blank">
              Jordan Scales
            </a>
            . Although this project doesn{"'"}t include much React-driven UI
            interactivity, it was certainly an invaluable learning experience.
            The major thing that I gained from this project was becoming
            comfortable working with React routing. The original project was
            actually just a series of different webpages, with HTML and CSS that
            I copy and pasted for the layout, having no clue how multi-page
            applications and websites worked haha. I have definitely grown a lot
            since those days and this project is a part of that.
          </p>
        </ArticleSection>
      </ArticleBody>
    </Article>
  );
}
