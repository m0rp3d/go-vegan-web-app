package com.veganestore.goveganbackend.dao;

import com.veganestore.goveganbackend.entity.FoodItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface FoodItemRepository extends JpaRepository<FoodItem, Long> {

    // get page of foodItem objects using the categoryId property
    Page<FoodItem> findByCategoryId(@Param("id") Long id, Pageable pageable);

    // get id for the food item using name
    @Query(value = "SELECT f.id FROM food_item f where f.name = :name", nativeQuery = true)
    Long getFoodItemIdUsingName(@Param("name") String name);
}
