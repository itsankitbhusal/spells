// import logger from "../../utils/logger";
import axios from "../AxiosConfig";
import type { ISpellsResponse } from "./interface";

export const getAllSpells = async () => {
  const response = await axios.get<ISpellsResponse>("/spells");
  // logger.log(response.data);
  return response.data;
};
