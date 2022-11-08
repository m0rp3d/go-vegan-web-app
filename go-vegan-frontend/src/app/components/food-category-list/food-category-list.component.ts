import { Component, OnInit } from '@angular/core';
import { FoodCategory } from '../../common/food-category';
import { FoodItemService } from '../../services/food-item.service';

@Component({
  selector: 'app-food-category-list',
  templateUrl: './food-category-list.component.html',
  styleUrls: ['./food-category-list.component.css']
})
export class FoodCategoryListComponent implements OnInit {

  foodCategories!: FoodCategory[];

  constructor(private foodItemService: FoodItemService) { }

  ngOnInit(): void {
    this.listFoodCategories();
  }

  // method to get foodCategory objects and subscribe
  // to the foodCategories foodCategory object array
  listFoodCategories() {
    this.foodItemService.getFoodCategories().subscribe(
      data => {
        //console.log('Food Categories=' + JSON.stringify(data));
        this.foodCategories = data;
      }
    )
  }

}
