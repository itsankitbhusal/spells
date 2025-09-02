interface IProps {
  name: string;
  level: number;
  url: string;
}
const SpellCard = ({ name, level, url }: IProps) => {
  return (
    <div className=" my-4 bg-red-200 p-4">
      <h2>{name}</h2>
      <p>Level: {level}</p>
      <p>URL: {url}</p>
    </div>
  );
};

export default SpellCard;
