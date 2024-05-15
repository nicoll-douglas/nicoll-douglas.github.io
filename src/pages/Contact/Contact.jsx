import { useRef } from "react";
import Header from "../../components/Header";
import wordArtUrl from "../../assets/images/word-art-metallic.png";
import personalPhotoUrl from "../../assets/images/personal-photo.jpg";
import dogUrl from "../../assets/images/dog.gif";
import potPlantUrl from "../../assets/images/pot-plant.gif";

export default function Contact() {
  const textareaRef = useRef(null);
  return (
    <>
      <Header background="bg-red-100">
        <img src={potPlantUrl} className="w-24 sm:hidden" aria-hidden="true" />
        <div className="flex flex-col items-center text-center">
          <p className="text-2xl text-green-700">How to reach...</p>
          <img src={wordArtUrl} alt="Nicoll Douglas" />
        </div>
        <img src={potPlantUrl} className="w-24 sm:hidden" aria-hidden="true" />
      </Header>
      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-1">
        <main className="flex flex-col gap-2" id="main">
          <p className="text-blue-700">Feel free to hmu :-)</p>
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
            src={dogUrl}
            className="w-64 mt-auto mx-auto"
            aria-hidden="true"
          />
        </main>
        <img
          src={personalPhotoUrl}
          className="w-80 window sm:hidden"
          alt="photo of author"
        />
      </div>
    </>
  );
}
