import { Category } from "./category.interface";

export interface IProduct {
    id: string;
    name: string;
    description: string;
    price: number;
    stock: number;
    image: string;
    isAvailable: boolean;
    category: Category
    categoryId: string;
}