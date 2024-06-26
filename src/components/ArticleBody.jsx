import PropTypes from "prop-types";

ArticleBody.propTypes = {
  children: PropTypes.node,
};

export default function ArticleBody({ children }) {
  return (
    <div className="flex flex-col gap-6 items-center text-center">
      {children}
    </div>
  );
}
