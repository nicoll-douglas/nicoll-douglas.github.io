import Article from "../../components/Article";
import ArticleBody from "../../components/ArticleBody";
import ArticleSection from "../../components/ArticleSection";
import BlogHeader from "../../components/BlogHeader";
import elephantUrl from "../../assets/images/elephant.webp";

export default function TheBackendArc() {
  return (
    <Article>
      <BlogHeader title="The Backend Arc" date="17/06/24" />
      <ArticleBody>
        <ArticleSection heading="Change of Plans" headingColor="text-green-800">
          <p>
            The backend arc? What? At the end of my last post I talked a bit
            about my short-term goals. I specified those as {'"'}to build out
            interesting, good-looking, performant frontend applications in good
            time{'"'}. While that is still true, after finishing my last project
            I had a big realisation that achieving this goal before moving onto
            backend development wasn
            {"'"}t necessary as I initially believed.
          </p>
          <p>
            So far I{"'"}ve been following a very linear learning path with web
            development, starting with HTML, CSS and JavaScript and moving onto
            the logical next thing once proficient with the last thing. However,
            as someone who{"'"}s interested in full-stack development but
            already has decent frontend experience, whether I build a frontend
            app or a full-stack one, the common denominator is I{"'"}
            ll always have to build a frontend. And my philosophy that
            proficiency comes with practice made me realise that jumping into
            backend now and learning to build full-stack projects would help me
            become proficient with backend and frontend at the same time,
            killing two birds with one stone. And so, over the 2 weeks since the
            last post, that{"'"}s what I{"'"}ve been doing and it{"'"}s probably
            been the best decision I{"'"}ve made in regards to learning how to
            code.
          </p>
        </ArticleSection>
        <ArticleSection
          heading="Node.js & The Backend"
          headingColor="text-red-600"
        >
          <p>
            Over the last 1-2 weeks I have been learning Node.js and the Express
            framework naturally. I built a couple mini projects here and
            there—basic full-stack apps to get used to working with the
            request-response cycle, handling requests, working with the file
            system and building middleware and APIs. I definitely got
            comfortable with those and have learnt a decent amount from
            tutorials and the documentation to the point of starting a new
            mega-project which I talk about it in the next section. Overall, I
            have to say that moving away from the browser environment to the
            server-side of things has been refreshing and highly enjoyable and I
            think moving onto learning backend development in general was the
            right move if it wasn{"'"}t clear to me by now.
          </p>
        </ArticleSection>
        <ArticleSection heading="New Project" headingColor="text-purple-800">
          <p>
            As I mentioned in the last section, I{"'"}m currently working on a
            new project. I have no idea what to call it yet but the idea behind
            it is a social media platform similar to Reddit or Tumblr. So far
            what I{"'"}ve built out for the project includes a home page, a
            signup form as well as account creation and signup and email
            validation on the backend. I{"'"}ve already learnt an incredible
            amount from this project, including on the frontend and overall I
            {"'"}m incredibly excited to see how it turns out and learn more
            things. So much so that I can{"'"}t stop thinking about it and
            working on it haha. But I think eventually, if I can get a small
            amount of users on this platform that I{"'"}m building it would make
            a decent portfolio project. I shall keep working on it for now but
            more updates to come.
          </p>
          <img className="max-w-76" src={elephantUrl} />
        </ArticleSection>
      </ArticleBody>
    </Article>
  );
}
