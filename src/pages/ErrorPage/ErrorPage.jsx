import { Link } from "react-router-dom";

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
        <img src="./animated/error-1.gif" aria-hidden="true" className="w-64" />
        <img
          src="./animated/skeleton.gif"
          aria-hidden="true"
          className="w-64"
        />
        <img src="./animated/error-2.gif" aria-hidden="true" className="h-24" />
      </div>
    </section>
  );
}
