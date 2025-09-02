import { useQuery } from "@tanstack/react-query";
import { getAllSpells } from "../SpellService";

export const queryKeys = {
  GET_ALL_SPELLS: "GET_ALL_SPELLS",
};

export const useGetAllSpells = () => {
  return useQuery({
    queryKey: [queryKeys.GET_ALL_SPELLS],
    queryFn: () => getAllSpells(),
  });
};
