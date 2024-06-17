import Article from "../../components/Article";
import ArticleBody from "../../components/ArticleBody";
import ArticleSection from "../../components/ArticleSection";
import BlogHeader from "../../components/BlogHeader";
import babyUrl from "../../assets/images/baby.webp";

import { Link } from "react-router-dom";

export default function TheReactArcContinues() {
  return (
    <Article>
      <BlogHeader title="The React Arc Continues" date="29/05/24" />
      <ArticleBody>
        <ArticleSection heading="Studium Finished" headingColor="text-red-600">
          <p>
            I{"'"}ve finally completed the Studium project. Overall from when I
            first started creating this project in vanilla to now completing the
            remastered version in React, it has probably taken me about 5 weeks.
            But every single part of the process, trying one way,
            re-strategising, learning new skills, trying another way, has been a
            really good experience and I{"'"}ve learnt a lot. Not only that but
            I definitely gotten to grips with React as I aspired to, which I
            mentioned in the last post. Thus I consider this project a major
            success, some more details on it{" "}
            <Link to="/projects/studium">here</Link>. This project is also the
            last time I ever build the cliché to do list or notes application,
            but they have have been some good learning exercises at every step
            of my journey nonetheless.
          </p>
        </ArticleSection>
        <ArticleSection heading="Next Steps" headingColor="text-blue-800">
          <p>
            {
              "As for what I plan to do next, there are quite a few major things on the agenda. One of them being UI libraries which I did not use in this last project. Over the course of my learning, there have been several memorable moments where I noticed that as my projects grew larger and more complex, the technologies and methods I was using became a lot more inefficient. I remember making a big project and writing all my CSS without a framework and that was quite long and painful, so I started using TailwindCSS. When I was initially building Studium with vanilla JavaScript, that was even more painful and so I moved onto React. I've now reached another of those points where using Tailwind classes and building all my component styles manually is becoming a bit taxing. So following the pattern, I think using a UI library in my next project would be a good idea. Not only that, but it will provide a more consistent design system as well as other benefits that come with learning one."
            }
          </p>
          <p>
            {
              "Another thing on the agenda is learning how to handle API calls and client-server interaction in React. Based on what I've read, libraries like SWR, React-query and Axios are quite standard for those jobs. And so that is also something I will try to incorporate into my next project."
            }
          </p>
          <p>
            {
              "Thirdly is testing. This last project is the last I will ever do where I forego learning how to test and utilising testing frameworks. Learning how to formally test my applications is something that has been overdue for a while now and that I've been putting off in order to learn other things of higher importance. But I've reached a point where testing my applications is more of a need rather than an insurance that they work. And so before I start working on my next project, looking into testing frameworks and libraries comes first. Once I become proficient with writing tests, I think going back and testing the Studium codebase would be a good exercise."
            }
          </p>
          <p>
            {
              "Fourthly and finally is looking into state management libraries like Redux as well as other popular and standardly used libraries in the React ecosystem. With the useReducer hook in React, state management becomes a lot more organisational and easier to keep track of, however I think having a library as an option, as well as libaries in general, is something good to have under the toolbelt when working on a project. So for future projects I will try to look into those if the opportunity calls."
            }
          </p>
        </ArticleSection>
        <ArticleSection
          heading="Short-term Goals"
          headingColor="text-purple-800"
        >
          <p>
            {
              "One of the main benefits of the React framework is that it allows you to build websites and applications incredibly quickly. And I think ultimately that is one of my short-term goals when it comes to learning React—being able to build out interesting, good-looking, performant frontend applications in good time. I think once I have that down I will be satisfied enough to move onto learning backend development. And overall I think that point isn't too far off which is quite exciting."
            }
          </p>
          <img src={babyUrl} className="w-32 mt-4" alt="dancing baby" />
        </ArticleSection>
      </ArticleBody>
    </Article>
  );
}
