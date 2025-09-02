import { useState } from "react";

export const useFavorite = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  const addToFavorite = (spellIndex: string) => {
    const updatedFavorites = [...favorites, spellIndex];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFromFavorite = (spellIndex: string) => {
    const updatedFavorites = favorites.filter((index) => index !== spellIndex);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const isFavorite = (spellIndex: string) => {
    return favorites.includes(spellIndex);
  };

  return {
    favorites,
    addToFavorite,
    removeFromFavorite,
    isFavorite,
  };
};
