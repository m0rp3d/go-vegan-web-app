package com.veganestore.goveganbackend.controller;

import com.veganestore.goveganbackend.dao.OrderItemRepository;
import com.veganestore.goveganbackend.entity.OrderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderItemController {

    @Autowired
    private OrderItemRepository orderItemRepository;

    // post method for saving all order items
    @PostMapping("/save-order-item")
    @CrossOrigin(origins = "http://localhost:4200")
    public void saveOrderItem(@RequestBody List<OrderItem> orderItem) {

        List<OrderItem> orderItem1 = orderItem;

        orderItemRepository.saveAll(orderItem1);

    }
}
