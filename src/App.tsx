import { useGetAllSpells } from "./api/hooks/useSpell";
import SpellCard from "./components/SpellCard";

const App = () => {
  const {
    data: spells,
    isLoading: loadingSpells,
    error: errorSpells,
  } = useGetAllSpells();

  if (loadingSpells) return <div>Loading...</div>;
  if (errorSpells) return <div>Error: {errorSpells.message}</div>;

  return (
    <div>
      <h1>Spells</h1>
      <ul>
        {spells?.results.map((spell) => (
          <SpellCard name={spell.name} level={spell.level} url={spell.url} />
        ))}
      </ul>
    </div>
  );
};

export default App;
