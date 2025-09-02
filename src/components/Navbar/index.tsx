import LinkItem from "./components";
import { Link } from "react-router";
import Info from "./components/Info";

const Navbar = () => {
  return (
    <>
      <nav className="bg-gray-50 ">
        <div className="flex justify-between items-center p-4">
          {/* <LinkItem label="Home" to="/" /> */}
          <Link
            to="/"
            className=" text-gray-900 font-extrabold text-[1.6rem] tracking-tighter  hover:text-gray-800"
          >
            Spells
          </Link>
          <LinkItem label="Favorite List" to="/favorite-list" />
        </div>
      </nav>
      <Info />
    </>
  );
};

export default Navbar;
