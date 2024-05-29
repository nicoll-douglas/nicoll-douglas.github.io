import { Link } from "react-router-dom";

import error1Url from "../assets/images/error-1.gif";
import error2Url from "../assets/images/error-2.gif";
import skeletonUrl from "../assets/images/skeleton.gif";

export default function ErrorPage() {
  return (
    <section className="flex flex-col">
      <h1 className="text-2xl text-red-500">404</h1>
      <p className="uppercase">
        The page you{"'"}re looking for cannot be found, sorry :-(
      </p>
      <Link
        to="/"
        className="button bg-blue-300 p-4 max-w-fit self-start mt-4 text-black"
      >
        Back to home page
      </Link>
      <div className="flex flex-wrap">
        <img src={error1Url} aria-hidden="true" className="w-64" />
        <img src={skeletonUrl} aria-hidden="true" className="w-64" />
        <img src={error2Url} aria-hidden="true" className="h-24" />
      </div>
    </section>
  );
}
