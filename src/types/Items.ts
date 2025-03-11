export type Item = {
  name: string;
  plaintext: string;
  image: {
    full: string;
  };
  gold: {
    total: number;
  };
};

export type ItemData = {
  data: {
    [id: string]: Item;
  };
};
