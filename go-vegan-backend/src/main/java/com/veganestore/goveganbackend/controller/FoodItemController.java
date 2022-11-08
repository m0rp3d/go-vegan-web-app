package com.veganestore.goveganbackend.controller;

import com.veganestore.goveganbackend.dao.FoodItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class FoodItemController {

    @Autowired
    private FoodItemRepository foodItemRepository;

    // get method to get the latest order id from user
    // after order is posted
    @GetMapping("/food-item-name/{name}")
    @CrossOrigin(origins = "http://localhost:4200")
    public long getIdForFoodItemUsingName(@RequestBody @PathVariable String name) {
        return foodItemRepository.getFoodItemIdUsingName(name);
    }
}