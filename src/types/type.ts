export interface ProductItemProps {
  id: string;
  image: string;
  title: string;
  describtion: string;
  price: number;
}
export interface DiscountDataProps {
  id: number;
  code: string;
  percentage: number;
}
export interface ProductListProps {
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number;
  prev: number | null;
  data: ProductItemProps[];
}
