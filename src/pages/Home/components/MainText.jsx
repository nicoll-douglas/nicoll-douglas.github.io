export default function MainText() {
  return (
    <main
      className="max-w-[720px] flex flex-col items-center text-center gap-1 leading-snug"
      aria-label="biography"
      id="main"
    >
      <p className="text-green-700 text-xl">
        You{"'"}ve successfully made it to my cool and epic website!
      </p>
      <p className="text-orange-500">
        I{"'"}m a self-taught programmer! Currently learning web development and
        my goal is to hopefully land a job in the industry within 1-2 years or
        less.
      </p>
      <p className="text-blue-700">
        So far the technologies I{"'"}ve worked with and gotten familiar with
        include, HTML5, TailwindCSS, Webpack, Git and JavaScript + React. I{"'"}
        ve become passionate about self-learning as it allows me to indulge in
        my curiosities and not limit myself like I once was in formal education.
        There are lots more things I have yet to learn such as backend
        development, databases and also other areas of programming such as
        low-level languages and game development that I hold a curiosity about.
        And so my ultimate goal is to become good at what I do and to never stop
        learning and overcoming challenges.
      </p>
      <p className="mt-4">
        On this informal website you can find a showcase of some projects that I
        have worked on, links, as well as a blog that I plan to add to monthly
        where I write about my journey and progress in learning to code. Take a
        look around! :-)
      </p>
    </main>
  );
}
