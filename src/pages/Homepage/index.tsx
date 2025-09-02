import { useFavorite } from "../../api/hooks/useFavourite";
import { useGetAllSpells } from "../../api/hooks/useSpell";
import SpellCard from "../../components/SpellCard";
import { useState } from "react";
import ListHeader from "../../components/ListHeader";
import NoResults from "../../components/NoResults";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

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

  if (loadingSpells) return <Loading title="Loading" message="Please wait while the data is being loaded..." />;
  if (errorSpells) return <Error message={errorSpells?.message} />;


  return (
    <div className=" my-4">
      <ListHeader title="Spell List" handleSearch={handleSearch} />

      {filteredSpells && filteredSpells?.length > 0 ?
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
                key={spell.index}
                name={spell.name}
                level={spell.level}
                index={spell.index}
                isFav={isFav}
                onDoubleClick={handleDoubleClick}
              />
            );
          })}
        </div>
        : <NoResults title="Not Found" message="No spells found" />
      }
    </div>
  );
};

export default Homepage;
