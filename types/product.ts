export interface Product {
  _id: string;
  categories: string[];
  tags: string[];
  title: string;
  link: string;
  price: number;
  credit: number;
  oldPrice?: number;
  description: string;
  characteristics: Characteristic[];
  createdAt: string;
  updatedAt: string;
  __v: number;
  image: string;
  initialRating: number;
  reviews: Review[];
  reviewCount: number;
  reviewAvg?: number;
  advantages?: string;
  disadvantages?: string;
}

export interface Characteristic {
  name: string;
  value: string;
}

export interface Review {
  _id: string;
  name: string;
  title: string;
  description: string;
  rating: number;
  createdAt: string;
}

