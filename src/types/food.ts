import { Nutrition } from "./nutrition";

export interface FoodItem {
    id:number;
    name: string;
    amount: number;
    unit: string;
    nutrition:Nutrition;
}