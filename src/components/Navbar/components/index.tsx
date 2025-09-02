import { Link } from "react-router";

interface IProps {
  label: string;
  to: string;
}

const LinkItem = ({ label, to }: IProps) => {
  return (
    <Link to={to} className=" text-blue-700 text-underline hover:text-blue-600">
      {label}
    </Link>
  );
};

export default LinkItem;
