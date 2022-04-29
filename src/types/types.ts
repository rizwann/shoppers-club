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
  title: string;
};
