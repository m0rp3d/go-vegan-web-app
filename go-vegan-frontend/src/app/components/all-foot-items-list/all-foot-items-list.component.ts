import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodItem } from '../../common/food-item';
import { FoodItemService } from '../../services/food-item.service';

@Component({
  selector: 'app-all-foot-items-list',
  templateUrl: './all-foot-items-list.component.html',
  styleUrls: ['./all-foot-items-list.component.css']
})
export class AllFootItemsListComponent implements OnInit {

  nutritionValue: string;
  foodItems: FoodItem[] = [];
  showItems: boolean = false;

  /*
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;
  */

  constructor(private activatedRoute: ActivatedRoute, private foodItemService: FoodItemService) { }

  ngOnInit(): void {
    // get the param id (nutritional value) of the current route
    // assign the param id to this.nutritionValue
    this.nutritionValue = this.activatedRoute.snapshot.paramMap.get("id");
    //console.log(this.nutritionValue);
    this.listAllFoodItems();
 
  }

  // get all food items
  listAllFoodItems() {
    this.foodItemService.getAllFoodItems(0,
      37).subscribe(
        data => {
          this.foodItems = data._embedded.foodItems;
          /*
          this.thePageNumber = data.page.number + 1;
          this.thePageSize = data.page.size;
          this.theTotalElements = data.page.totalElements;
          */
        }
    )

  }

  // sort the list of obtained food items by the this.nutritionValue variable
  // passed into the method as a parameter
  // sorting from greatest to lowest
  sortFoodItems(nutritionValue: string) {
    //console.log('foodItems[nutrition value] is ' + this.foodItems[nutritionValue]);
    // assign param id from route to local string variable nutritionValue
    nutritionValue = this.activatedRoute.snapshot.paramMap.get("id");
    this.showItems = true;
    this.foodItems = this.foodItems.sort(function (a, b) {
      if (a[nutritionValue] < b[nutritionValue]) {
        return 1;
      } else {
        return -1;
      }
    });
  }

  

}
