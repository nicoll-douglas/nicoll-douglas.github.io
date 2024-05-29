import rubiksCubeUrl from "../../assets/images/rubiks-cube.webp";
import reactExectuionFlowUrl from "../../assets/images/react-execution-flow.png";
import Article from "../../components/Article";
import ProjectHeader from "../../components/ProjectHeader";
import ArticleBody from "../../components/ArticleBody";
import ArticleSection from "../../components/ArticleSection";

export default function Studium() {
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
              "This is one of my projects that I've worked on. A web application named 'Studium' after the Latin word for 'study'. Fancy huh? It is an application, or rather, a collective set of smaller, related applications that consists of study tools like a note-taker, to do list and bookmarking feature. The main idea behind this application was to try and build some kind of fully fleshed-out, mock web product/service to not only test my skills, but also help me learn React, the JavaScript framework it is built on. Of which those aims were most definitely achieved. When it comes to my opinion, I think for what its worth, my skill level at the time of this project and what I learnt, this application is quite solid for my first React app. "
            }
          </p>
          <p>
            {
              "When I started this project, my understanding of React was quite limited to just the basics. I had looked over some initial resources like the official React docs as well as a tutorial or two on how to set up a React environment with Vite. So pretty much all I knew was just the main concepts behind React such as components, JSX syntax, props and state. However, due to the large nature and complexity of the project, I came out on the other side familiar with at least 80% of the React framework. Things like component composition, the rendering process in React, the main hooks like useState, useEffect, useReducer, useContext, useCallback, useMemo etc., how they tie into the rendering process, working with libraries and so on. This project was single handedly one of the largest bursts of progress and learning for me."
            }
          </p>
          <p>
            {
              "This project is something I initially attempted to build without a framework and just vanilla JavaScript as a skill-test (which I've written about in my first blog post). However due to how large this project is, it was incredibly time consuming and draining, leading me to make an executive decision to reallocate my time somewhere more productive (learning React and coming back to the project at a later date). And I think, that calculated decision, and knowing the right time to readjust my strategy helped me come back better, smarter and stronger as a developer with this project."
            }
          </p>
        </ArticleSection>
        <ArticleSection heading="The Home Page" headingColor="text-green-800">
          <p>
            So before I started this project, one of the things I did was use{" "}
            <a href="https://www.figma.com/" target="_blank">
              Figma
            </a>{" "}
            to mock up some designs of how I wanted the application and its home
            page to look like. I attempted to go for a modern and clean look and
            used some websites like{" "}
            <a href="https://www.designspiration.com/" target="_blank">
              Designspiration
            </a>{" "}
            to get some inspiration. Overall, I think as a programmer and not a
            product designer or marketing expert, I{"'"}ve managed to create a
            simple but effective design with a hero section as the center piece
            for the home page. The home page is also fuly responsive and
            accessible with structured flow, landmarks, a navbar and mobile
            dropdown menu. The latter of which being very simple to code in
            React using a simple boolean state for whether it is toggled or not.
          </p>
        </ArticleSection>
        <ArticleSection
          heading="Notes, To Do List & Bookmark Apps"
          headingColor="text-red-600"
        >
          <p>
            When it comes to the notes, to do list and bookmark applications,
            they are all fairly similar feature-wise and thus code-wise. The
            main logic behind them naturally being simple{" "}
            <abbr title="Create, Read, Update, Delete">CRUD</abbr> operations
            and displaying them upon creation, giving various options to the
            user to edit and manipulate them. It stores the data of each
            note/bookmark/list-item in a stateful array and updates it
            appropriately with a dispatch function called by some event handler,
            provided by the useReducer hook. Finally, it synchronises any state
            changes to local browser storage{"\u2014"}a simple but effective and
            scalable piece of logic. Other features such as drag & drop and
            modal views are handled with simple state updates. But overall,
            taking this as an example, this was an incredibly useful learning
            experience when it came to hooks, custom hooks and reusing React
            logic (the hook being appropriately named {"'"}useCRUD
            {"'"}).
          </p>
        </ArticleSection>
        <ArticleSection
          heading="Pomodoro Timer & Calculator Apps"
          headingColor="text-blue-900"
        >
          <p>
            {
              "When it comes to the Pomodoro timer and calculator apps, the logic is slighty more complex but follows similar principles to the aformentioned. The timer stores its information in state naturally i.e whether it's active, what the initial timer setting was, the number of seconds left and so on. With the associated buttons and event handlers, this state gets updated by a reducer with several different corresponding actions thus updating the UI to reflect that. The counting down itself is managed by a useEffect which detects whether the timer is active and sets a 1 second timeout depending on whether the time left has changed thus repeating the cycle every second until it detects 0."
            }
          </p>
          <p>
            The calculator app works similarly by storing state and handles the
            corresponding user input with a reducer to change the state. It also
            utilises a library called{" "}
            <a href="https://mikemcl.github.io/decimal.js/" target="_blank">
              Decimal.js
            </a>{" "}
            to account for mathematically precise floating point arithmetic.
          </p>
        </ArticleSection>
        <ArticleSection
          heading="The Dashboard Page"
          headingColor="text-orange-600"
        >
          <p>
            {
              "As for the dashboard page, the logic is quite simple. It also utilises my 'useCRUD' hook to allow it to mainly read the notes/to do list/bookmarks from local storage and thus also synchronise the display. There is also a link feature that allows you to jump straight into an open note editing window from the dashboard and this is done storing the state in the search parameters in the URL. Perhaps not the best use case for URL search parameters but something I had fun learning about and a very good thing to learn either way. As for the timer, the state of the actual timer is actually the same state for the dashboard timer since it is kept higher up in the DOM tree and passed down using React context. This allows it to run in the background and alerts the user when it is over if the user is in a different tab such as the note-taker."
            }
          </p>
        </ArticleSection>
        <ArticleSection heading="Summary" headingColor="text-purple-900">
          <p>
            {
              "As mentioned before, this project was an incredibly good learning experience and is probably my best project to date. However, this application could most definitely be improved upon. For one, the code is not formally tested but works to the best of my knowledge. When it comes to my learning, testing is one of the next things I plan to learn and so testing this application will definitely be a good exercise to come back to once I do that. Secondly you could also argue that if I wanted to make this into a genuine product for real users, more study tools, features and UX improvements could be concentrated into the application in order to provide a better product as well as user aunthentication and a proper database. I think this room for improvement though is one of the things that excites me to keep learning and will definitely make me come back to this project as well as creating bigger and better ones."
            }
          </p>
          <figure className="window max-w-full md:hidden">
            <img src={reactExectuionFlowUrl} alt="Screenshot of txt file" />
            <figcaption className="text-base px-6 py-2">
              Figure 1 - Some notes I made whilst trying to figure out the React
              rendering process. Probably the most crucial and interesting thing
              I learnt from this project.
            </figcaption>
          </figure>
        </ArticleSection>
      </ArticleBody>
    </Article>
  );
}
