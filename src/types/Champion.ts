export type Champion = {
  id: string;
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

export type Spells = {
  id: string;
  name: string;
  description: string;
  image: {
    full: string;
  };
};

export type Passive = {
  name: string;
  description: string;
  image: {
    full: string;
  };
};

export type ChampionDetail = {
  id: string;
  name: string;
  title: string;
  lore: string;
  image: {
    full: string;
  };
  spells: Spells[];
  passive: Passive;
};

export type ChampionDetailType = {
  data: {
    [id: string]: ChampionDetail;
  };
};

export type ChampionsDetailPageProps = {
  params: {
    id: string;
  };
};
