import { Category } from "./category";

export interface Jewel{
    id?: any;
    name: string;
    imageUrl: string;
    description: string;
    weight: string;
    size: string;
    price: number;
    category: Category
}

  