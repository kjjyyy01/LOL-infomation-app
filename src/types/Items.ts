type TotalGold = {
  total: number;
};

type Image = {
  group: string;
};

export type Item = {
  name: string;
  description: string;
  image: Image;
  gold: TotalGold;
};
