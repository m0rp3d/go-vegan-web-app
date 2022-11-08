package com.veganestore.goveganbackend.entity;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name="food_category")
public class FoodCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @Column(name="food_name")
    private String foodName;

    public FoodCategory() {
    }

    public FoodCategory(String foodName) {
        this.foodName = foodName;
    }

    public Long getId() {
        return id;
    }

    /*
    public void setId(Long id) {
        this.id = id;
    }
    */


    public String getFoodName() {
        return foodName;
    }

    public void setFoodName(String foodName) {
        this.foodName = foodName;
    }

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "category")
    private Set<FoodItem> foodItems;
}
