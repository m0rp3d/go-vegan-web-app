import { FoodItem } from "./food-item";

export class CartFoodItem {

  id: number;
  name: string;
  imageUrl: string;
  price: number;
  protein: number;
  saturatedFat: number;
  transFat: number;
  cholesterol: number;
  fiber: number;
  sugars: number;
  vitaminA: number;
  vitaminB12: number;
  vitaminC: number;
  vitaminD: number;
  vitaminK: number;
  omega3: number;
  sodium: number;
  calcium: number;
  iron: number;
  potassium: number ;
  zinc: number;
  iodine: number;

  quantity: number;

  constructor(foodItem: FoodItem) {
    this.id = foodItem.id;
    this.name = foodItem.name;
    this.imageUrl = foodItem.imageUrl;
    this.price = foodItem.price;
    this.protein = foodItem.protein;
    this.saturatedFat = foodItem.saturatedFat;
    this.transFat = foodItem.transFat;
    this.cholesterol = foodItem.cholesterol;
    this.fiber = foodItem.fiber;
    this.sugars = foodItem.sugars;
    this.vitaminA = foodItem.vitaminA;
    this.vitaminB12 = foodItem.vitaminB12;
    this.vitaminC = foodItem.vitaminC;
    this.vitaminD = foodItem.vitaminD;
    this.vitaminK = foodItem.vitaminK;
    this.omega3 = foodItem.omega3;
    this.sodium = foodItem.sodium;
    this.calcium = foodItem.calcium;
    this.iron = foodItem.iron;
    this.potassium = foodItem.potassium;
    this.zinc = foodItem.zinc;
    this.iodine = foodItem.iodine;

    this.quantity = 1;
  }


}
