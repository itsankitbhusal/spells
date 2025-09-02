interface IProps {
  name?: string;
  index?: string;
}

const ClassCapsule = ({ name }: IProps) => {
  return (
    <div className="flex items-center px-2 py-1 bg-gray-200 text-[.7rem] w-fit font-medium rounded-full text-gray-500">
      {name}
    </div>
  );
};

export default ClassCapsule;
