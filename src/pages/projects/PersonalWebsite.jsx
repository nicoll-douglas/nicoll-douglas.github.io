import Article from "../../components/Article";
import ArticleBody from "../../components/ArticleBody";
import ProjectHeader from "../../components/ProjectHeader";
import ArticleSection from "../../components/ArticleSection";
import starUrl from "../../assets/images/star.gif";

export default function PersonalWebsite() {
  return (
    <Article>
      <ProjectHeader
        background="bg-yellow-100"
        imageUrl={starUrl}
        title="My Personal Website"
        repoLink="https://github.com/nicoll-douglas/nicoll-douglas.github.io"
        finishedOn="14/05/24"
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
            As someone who{"'"}s into Vaporwave and 90s web aesthetics, this
            website was heavily inspired by that if you were wondering and the
            tools I used to build it include React, Vite, TailwindCSS and{" "}
            <a href="https://jdan.github.io/98.css/" target="_blank">
              98.css
            </a>
            , a neat little Windows-98-inspired CSS library made by{" "}
            <a href="https://github.com/jdan" target="_blank">
              Jordan Scales
            </a>
            . Be sure to take a look around if you haven{"'"}t already!
          </p>
        </ArticleSection>
      </ArticleBody>
    </Article>
  );
}
