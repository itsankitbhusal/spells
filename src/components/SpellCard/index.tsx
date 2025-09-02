import { Link } from "react-router";
interface IProps {
  name: string;
  level: number;
  index: string;
  isFav?: boolean;
  onDoubleClick?: (e: React.MouseEvent) => void;
}
const SpellCard = ({ name, level, index, isFav, onDoubleClick }: IProps) => {
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.preventDefault();
      onDoubleClick?.(e);
  };
  return (
    <div
      onDoubleClick={handleDoubleClick}
      title="Double click to add to favorites"
      className=" cursor-pointer relative select-none"
      >
      <div className=" rounded-[.8rem] p-4 border-[1px] border-gray-200 min-h-[6rem] flex flex-col justify-center px-6">
        <Link to={`/spell/${index}`} className="w-fit" title="Click to view spell details">
          <h2 className="text-xl font-bold text-gray-700">{name}</h2>
        </Link>
        <p className="text-gray-600">Level: {level}</p>
      </div>
      <div className="absolute bottom-4 right-4">
        {isFav && (
          <p className="text-gray-600 text-2xl transition-all duration-300">
            ❤️
          </p>
        )}
      </div>
    </div>
  );
};

export default SpellCard;
