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


interface IDamageType {
  index: string;
  name: string;
  url: string;
}

interface IDamage {
  damage_type: IDamageType;
  damage_at_character_level: {
    [level: string]: string;
  };
}

interface IDCType {
  index: string;
  name: string;
  url: string;
}

interface IDC {
  dc_type: IDCType;
  dc_success: string;
}

interface ISchool {
  index: string;
  name: string;
  url: string;
}

interface IClass {
  index: string;
  name: string;
  url: string;
}

interface ISubclass {
  index: string;
  name: string;
  url: string;
}

export interface ISpellDetail {
  higher_level: string[];
  index: string;
  name: string;
  desc: string[];
  range: string;
  components: string[];
  ritual: boolean;
  duration: string;
  concentration: boolean;
  casting_time: string;
  level: number;
  damage: IDamage;
  dc: IDC;
  school: ISchool;
  classes: IClass[];
  subclasses: ISubclass[];
  url: string;
  updated_at: string;
}
