import { Link } from "react-router-dom";

const Button = ({ name, link, style }) => {
  return (
    <Link
      to={link}
      className={`${style} inline-block px-4 py-2 text-white bg-yellowBirdz font-semibold  rounded-md hover:bg-yellowHover transition duration-500 ease-in-out shadow-md uppercase tracking-wide`}
    >
      {name}
    </Link>
  );
};

export default Button;