import PropTypes from "prop-types";

Header.propTypes = {
  children: PropTypes.node,
  background: PropTypes.string,
};

export default function Header({ children, background }) {
  return (
    <div
      className={`flex items-center justify-center text-center window ${background} py-4 lg:px-4 w-full`}
    >
      {children}
    </div>
  );
}
