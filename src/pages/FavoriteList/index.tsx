import { useFavorite } from "../../api/hooks/useFavourite";
import { useGetAllSpells } from "../../api/hooks/useSpell";
import SpellCard from "../../components/SpellCard";
import ListHeader from "../../components/ListHeader";
import { useState } from "react";

const FavoriteList = () => {
  const { favorites, removeFromFavorite } = useFavorite();

  const {
    data: spells,
    isLoading: loadingSpells,
    error: errorSpells,
  } = useGetAllSpells();

  const [search, setSearch] = useState<string | null>(null);

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const favSpells = spells?.results.filter((spell) => {
    return favorites.includes(spell.index);
  });

  const filteredFavSpells = favSpells?.filter((spell) => {
    return spell.name.toLowerCase().includes(search?.toLowerCase() || "");
  });

  if (loadingSpells) return <div>Loading...</div>;
  if (errorSpells) return <div>Error: {errorSpells.message}</div>;

  return (
    <div className=" my-4 px-4">
      <ListHeader title="Favorite Spells" handleSearch={handleSearch} />
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
        {filteredFavSpells?.map((spell) => {
          const handleDoubleClick = (e: React.MouseEvent) => {
            e.preventDefault();
            removeFromFavorite(spell.index);
          };
          return (
            <SpellCard
              key={spell.index}
              name={spell.name}
              level={spell.level}
              index={spell.index}
              isFav={true}
              onDoubleClick={handleDoubleClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteList;
