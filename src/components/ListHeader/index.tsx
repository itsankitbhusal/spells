import logger from "../../utils/logger";

interface IProps {
  title: string;
  handleSearch: (search: string) => void;
}

const ListHeader = ({ title, handleSearch }: IProps) => {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");
    handleSearch(search?.toString() || "");
    logger.log("search", search);
  };

  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              name="search"
              placeholder="Search"
              className="border-[1px] border-gray-200 rounded-l-[.8rem] p-2"
            />
            <button
              type="submit"
              className="rounded-r-[.8rem] p-2 bg-gray-200 border-[1px] border-gray-200 cursor-pointer px-4"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListHeader;
