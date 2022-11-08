import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { FoodCategory } from '../common/food-category';
import { FoodItem } from '../common/food-item';

@Injectable({
  providedIn: 'root'
})
export class FoodItemService {

  private baseUrl = 'http://localhost:8080/api/foodItems'

  private categoryUrl = "http://localhost:8080/api/foodCategories";

  constructor(private httpClient: HttpClient) { }

  // get all food items using pagination
  getAllFoodItems(thePage: number,
    thePageSize: number): Observable<GetResponseAll> {

    const newUrl = `${this.baseUrl}?page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseAll>(newUrl);
    
  }
  ////////////////////////////////////////////////////////////////////////////////////

  // get a list of foodItems using the theCategoryId
  // with pagination
  getFoodItemListPaginate(thePage: number,
    thePageSize: number,
    theCategoryId: number): Observable<GetResponseFood> {

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
      + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseFood>(searchUrl);
  }

  //////////////////////////////////////////////////////////////////////////////////////
  
  // http get request function to get a list of FoodItems using the category id property
  getFoodItemList(theCategoryId: number): Observable<FoodItem[]> {

   const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.httpClient.get<GetResponseFood>(searchUrl).pipe(
      map(response => response._embedded.foodItems)
    );
  }

  // http get request for all foodCategory objects
  getFoodCategories(): Observable<FoodCategory[]> {

    return this.httpClient.get<GetResponseCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.foodCategories)
    );
  }

  // http get request for the foodItem using the foodItem's id
  getFoodItem(theFoodItemId: number): Observable<FoodItem> {

    const foodItemUrl = `${this.baseUrl}/${theFoodItemId}`;

    return this.httpClient.get<FoodItem>(foodItemUrl);
  }

  // http get request to obtain the id property of a foodItem
  // using the name of the foodItem
  getFoodItemId(name: string): Observable<any> {
    return this.httpClient.get<any>(`http://localhost:8080/api/food-item-name/${name}`);
  }  
  
}

interface GetResponseAll {
  _embedded: {
    foodItems: FoodItem[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseFood {
  _embedded: {
    foodItems: FoodItem[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}

interface GetResponseCategory {
  _embedded: {
    foodCategories: FoodCategory[];
  }
}
