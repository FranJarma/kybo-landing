import { CategoryEnum } from "./Category";

export type Product = {
  category: CategoryEnum;
  description: string;
  image: string;
  name: string;
};
