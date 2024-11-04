export type PreviewMenu = {
  name: string;
  price: number;
  description: string;
  image: string;
};

export type Menu = {
  image: string;
  name: string;
  price: number;
  alt: string;
  id: string;
};

export type CompleteMenu = {
  category: 'dish' | 'drink' | 'dessert';
} & Menu;

export type Categories = 'dish' | 'drink' | 'dessert';
export type AllCategories = 'all' | Categories;

export type FilterCategories = {
  categ: AllCategories;
  label: string;
};

export type CartSelection = {
  quantity: number;
} & Menu;
