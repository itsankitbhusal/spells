import { useQuery } from "@tanstack/react-query";
import { getAllSpells, getSpell } from "../SpellService";

export const queryKeys = {
  GET_ALL_SPELLS: "GET_ALL_SPELLS",
  GET_SPELL: "GET_SPELL",
};

export const useGetAllSpells = () => {
  return useQuery({
    queryKey: [queryKeys.GET_ALL_SPELLS],
    queryFn: () => getAllSpells(),
  });
};

export const useGetSpell = (index?: string) => {
  return useQuery({
    queryKey: [queryKeys.GET_SPELL, index],
    queryFn: () => getSpell(index),
    enabled: !!index,
  });
};
