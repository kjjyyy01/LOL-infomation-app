type Spells = {
  name: string;
  description: string;
  tooltip: string;
};

export type Champion = {
  name: string;
  title: string;
  image: {
    full: string;
  };
};

export type ChampionType = {
  data: {
    [id: string]: Champion;
  };
};

export type ChampionDetail = {
  name: string;
  title: string;
  lore: string;
  image: {
    full: string;
  };
  spells: Spells[];
};
