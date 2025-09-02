import { Link } from "react-router";
import { useFavorite } from "../../api/hooks/useFavourite";
import { useGetAllSpells } from "../../api/hooks/useSpell";
import SpellCard from "../../components/SpellCard";
import { useState } from "react";
import ListHeader from "../../components/ListHeader";

const Homepage = () => {
  const {
    data: spells,
    isLoading: loadingSpells,
    error: errorSpells,
  } = useGetAllSpells();

  const [search, setSearch] = useState<string | null>(null);


  const filteredSpells = spells?.results.filter((spell) => {
    return spell.name.toLowerCase().includes(search?.toLowerCase() || "");
  });
  

  const handleSearch = (search: string) => {
    setSearch(search);
  };
  const { addToFavorite, isFavorite, removeFromFavorite } = useFavorite();

  if (loadingSpells) return <div>Loading...</div>;
  if (errorSpells) return <div>Error: {errorSpells.message}</div>;

 
  return (
    <div className=" my-4 mx-4 ">
      <ListHeader title="Spell List" handleSearch={handleSearch} />
      
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
        {filteredSpells?.map((spell) => {
          const isFav = isFavorite(spell.index);
          const handleDoubleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            if (isFav) {
              removeFromFavorite(spell.index);
            } else {
              addToFavorite(spell.index);
            }
          };
          return (
            <SpellCard
              name={spell.name}
              level={spell.level}
              index={spell.index}
              isFav={isFav}
              onDoubleClick={handleDoubleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
