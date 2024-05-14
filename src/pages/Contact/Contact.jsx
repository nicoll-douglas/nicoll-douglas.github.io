import { useRef } from "react";
import Header from "../../components/Header";

export default function Contact() {
  const textareaRef = useRef(null);
  return (
    <>
      <Header background="bg-red-100">
        <img
          src="/animated/pot-plant.gif"
          className="w-24 sm:hidden"
          aria-hidden="true"
        />
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl text-green-700">How to reach...</p>
          <img src="/word-art/word-art-metallic.png" alt="Nicoll Douglas" />
        </div>
        <img
          src="/animated/pot-plant.gif"
          className="w-24 sm:hidden"
          aria-hidden="true"
        />
      </Header>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-1">
        <main className="flex flex-col gap-2" id="main">
          <p className="text-blue-700">Thanks for wanting to talk :-)</p>
          <label htmlFor="username-textarea" className="text-lg">
            Message me on discord:
          </label>
          <textarea
            id="username-textarea"
            ref={textareaRef}
            className="resize-none"
            value="@mogadon69"
            readOnly={true}
          ></textarea>
          <button
            className="p-4 bg-green-500 max-w-fit"
            onClick={() => {
              textareaRef.current.select();
              document.execCommand("copy");
            }}
          >
            Click to copy
          </button>
          <img
            src="/animated/dog.gif"
            className="w-64 mt-auto mx-auto"
            aria-hidden="true"
          />
        </main>
        <img
          src="/images/personal-photo.jpg"
          className="w-80 window sm:hidden"
          alt="photo of author"
        />
      </div>
    </>
  );
}
