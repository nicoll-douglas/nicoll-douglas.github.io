import Header from "./Header";
import PropTypes from "prop-types";

BlogHeader.propTypes = {
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

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
