export interface Monster {
  name: string;
  source: string;
  page: number;
  srd?: boolean;
  size: Size;
  type: Type;
  alignment: Alignment[];
  ac: ArmorClass[];
  hp: HP;
  speed: Speed;
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
  save?: Save;
  resist?: (string | { resist: string[]; note?: string; cond?: boolean })[];
  skill: Skill;
  passive: number;
  languages: string[];
  cr: string | { cr: string; coven: string };
  trait: Entry[];
  action: Entry[];
  reaction: Entry[];
  environment?: Environment[];
  hasToken?: boolean;
  traitTags?: string[];
  senseTags?: string[];
  languageTags?: string[];
  spellcastingTags?: string[];
  damageTags?: string[];
  miscTags?: string[];
  conditionInflict?: string[];
  conditionInflictSpell?: string[];
  conditionImune?: string[];
  immune?: string[];
  variant?: any;
  spellcasting: any[];
  legendaryGroup?: { name: string; source: string };
}

export type Size = "S" | "M" | "L" | "H" | "G" | "T";

// Add types
export type Alignment = string;
export type Environment = string;
export type Type = string;

export interface ArmorClass {
  ac: number;
  from: string[];
}

export interface HP {
  average: number;
  formula: string;
}

export interface Speed {
  walk?: number;
  burrow?: number;
  climb?: number;
  fly?: number | { number: number; condition: string };
  swim?: number;
  canHover?: boolean;
}

export interface Skill {
  perception?: string;
  stealth?: string;
  insight?: string;
  arcana?: string;
  athletics?: string;
  // add rest
}

export interface Entry {
  name: string;
  entries: string[];
}

export interface Save {
  str: string;
  dex: string;
  con: string;
  int: string;
  wis: string;
}
