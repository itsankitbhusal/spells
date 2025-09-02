import LinkItem from "./components";
import { Link } from "react-router";

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
      <div className="bg-blue-50 border border-blue-200 rounded-[.8rem] p-4 m-4 flex items-start flex-col gap-1">
        <p className="text-gray-700 text-sm font-medium ">Quick Tips</p>
        <ul className="text-gray-600 text-sm list-disc list-inside pl-2">
          <li>Double click on a spell to add it to favorites.</li>
          <li>Click on the spell title to view its details.</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
