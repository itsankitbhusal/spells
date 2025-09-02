import { useFavorite } from "../../api/hooks/useFavourite";
import { useGetAllSpells } from "../../api/hooks/useSpell";
import SpellCard from "../../components/SpellCard";
import ListHeader from "../../components/ListHeader";
import { useMemo, useState } from "react";
import NoResults from "../../components/NoResults";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

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

  const favSpells = useMemo(() => {
    return spells?.results.filter((spell) => {
      return favorites.includes(spell.index);
    });
  }, [favorites, spells]);

  const filteredFavSpells = favSpells?.filter((spell) => {
    return spell.name.toLowerCase().includes(search?.toLowerCase() || "");
  });

  if (loadingSpells) return <Loading title="Loading" message="Please wait while the data is being loaded..." />;
  if (errorSpells) return <Error message={errorSpells.message} />;

  return (
    <div className=" my-4">
      <ListHeader title="Favorite Spells" handleSearch={handleSearch} />
      {filteredFavSpells && filteredFavSpells?.length > 0 ?
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
        : <NoResults title="Not Found" message="No favorite spells found" />
      }
    </div>
  );
};

export default FavoriteList;
