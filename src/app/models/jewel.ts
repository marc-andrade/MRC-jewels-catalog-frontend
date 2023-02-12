import { CategoryDTO } from "./category";

export interface Jewel{
    id?: any;
    name: string;
    imgUrl: string;
    description: string;
    weight: string;
    size: string;
    price: number;
    category: CategoryDTO
}

  