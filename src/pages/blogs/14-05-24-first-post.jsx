import Article from "../../components/Article";
import ArticleBody from "../../components/ArticleBody";
import ArticleSection from "../../components/ArticleSection";
import BlogHeader from "../../components/BlogHeader";
import wizardTypingUrl from "../../assets/images/wizard-typing.gif";

export default function FirstPost() {
  return (
    <Article>
      <BlogHeader title="First Post" date="14/05/24" />
      <ArticleBody>
        <ArticleSection
          heading="Welcome to the blog :-)"
          headingColor="text-red-600"
        >
          <p>
            This series of pages will serve as a record for my coding progress
            via posts I plan to add to this blog every once in a while. Not only
            that, but I believe it will make a good medium for self-reflection
            and a catharsis from the endless coding grind. Perhaps there are
            also people interested in reading about my progress and so,
            naturally, this will be a more aggregate, complete record of that.
          </p>
        </ArticleSection>
        <ArticleSection heading="Recent Progress" headingColor="text-teal-800">
          <p>
            So as for what I{"'"}ve been doing recently, I{"'"}ve been working
            on a project called Studium. This is a relatively large frontend web
            application suite with several different features and it
            {"'"}s serving as my initial medium for getting to grips with the
            React framework and its paradigm. This includes hooks, state,
            working with components, routing, and the concept of rendering
            amongst many more.
          </p>
          <p>
            I was initially building this project with no framework and just
            vanilla Javascript as a sort of rite of passage before moving onto a
            frontend framework. And surprisingly I made it quite far however
            after 2-3 weeks of work, a humongous, out of control spaghetti
            codebase and, lack of enjoyment for the project, I hit a point of
            diminishing returns. Consequently, I decided my time would be better
            spent moving on to learning React. Thus leaving me to build the
            project at a later date.
          </p>
          <p>
            To be honest, I don{"'"}t regret my initial effort on the project. I
            had the choice between that and learning a framework straight away,
            and the things I learnt and realised from this incomplete project
            were quite valuable (as well as consolidating my knowledge of the
            JavaScript language). The first naturally being how painful it is to
            build large scale web applications without a frontend framework. An
            extension of that now being a firsthand account of why the
            declarative approach of React and reusable components is so
            effective in building user interfaces. The second thing: knowing the
            right time to quit and opting for better solutions. I believe this
            experience and these realisations have made me a marginally better
            developer and wouldn{"'"}t have been possible had I been lazy and
            decided to jump into a framework sooner.
          </p>
          <p>
            Either way, now that this website is complete and this post comes to
            a close, I{"'"}ll continue working on Studium, getting to grips with
            React along the way and continually progressing.
          </p>
          <p>More updates to come :-)</p>
          <img
            src={wizardTypingUrl}
            className="w-64"
            alt="gif of typing wizard"
          />
        </ArticleSection>
      </ArticleBody>
    </Article>
  );
}
