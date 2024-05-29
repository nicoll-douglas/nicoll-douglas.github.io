import PropTypes from "prop-types";

ArticleSection.propTypes = {
  children: PropTypes.node,
  heading: PropTypes.string,
  headingColor: PropTypes.string,
};

export default function ArticleSection({ heading, headingColor, children }) {
  return (
    <section>
      <h2 className={`underline text-xl mb-1 ${headingColor}`}>{heading}</h2>
      <div className="flex flex-col items-center gap-4">{children}</div>
    </section>
  );
}
