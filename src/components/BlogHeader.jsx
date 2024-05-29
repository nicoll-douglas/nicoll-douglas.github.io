import Header from "./Header";

export default function BlogHeader({ date, title }) {
  return (
    <Header background="bg-gray-300">
      <div className="flex flex-col text-xl mx-5">
        <h1 className="text-5xl">{title}</h1>
        <p>{date}</p>
      </div>
    </Header>
  );
}
