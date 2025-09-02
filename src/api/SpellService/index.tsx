// import logger from "../../utils/logger";
import axios from "../AxiosConfig";
import type { ISpellsResponse, ISpellDetail } from "./interface";

export const getAllSpells = async () => {
  const response = await axios.get<ISpellsResponse>("/spells");
  // logger.log(response.data);
  return response.data;
};

export const getSpell = async (index?: string) => {
  if (!index) return null;
  const response = await axios.get<ISpellDetail>(`/spells/${index}`);
  // logger.log(response.data);
  return response.data;
};
