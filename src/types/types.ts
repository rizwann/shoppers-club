export interface ArrowProps {
  side?: string;
  color?: string;
  slide?: number;
}
export interface CartPageProps {
  variant?: string;
  color?: string;
  type?: string;
}

export type sliderItem = {
  id: number;
  img: string;
  title?: string;
  desc?: string;
  bg?: string;
};

export type category = {
  id: number;
  img: string;
  title?: string;
  name?: string;
};

export type SingleProduct = {
  _id: string;
  categories: [];
  size: string[];
  color: string[];
  inStock?: boolean;
  price: number;
  name: string;
  image: string;
  desc?: string;
};

export type filters = {
  category?: string;
  size?: string;
  color?: string;
};
