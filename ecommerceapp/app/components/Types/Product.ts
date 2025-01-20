export type Product = {
  name: string;
  price: number;
  description: string;
  _id: string;
  images: Array<{ url: string }>;
  slug: { current: string };
};
