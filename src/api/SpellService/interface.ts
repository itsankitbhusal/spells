export interface ISpell {
  index: string;
  name: string;
  level: number;
  url: string;
}

export interface ISpellsResponse {
  count: number;
  results: ISpell[];
}
