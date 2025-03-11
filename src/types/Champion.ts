type Image = {
  full: string;
  group: string;
};

type Spells = {
  name: string;
  description: string;
  tooltip: string;
};

export type Champion = {
  name: string;
  title: string;
  image: Image;
};

export type ChampionDetail = {
  name: string;
  title: string;
  lore: string;
  image: Image;
  spells: Spells[];
};
