package com.veganestore.goveganbackend.controller;

import com.veganestore.goveganbackend.dao.OrderRepository;
import com.veganestore.goveganbackend.entity.Account;
import com.veganestore.goveganbackend.entity.Order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api")
public class OrderController {

    @Autowired
    private OrderRepository orderRepository;


    // get method to get the latest order id from user
    // after order is posted
    @GetMapping("/recent-id/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public long getLatestIdFromOrder(@RequestBody @PathVariable long id) {
        return orderRepository.getHighestIdFromAccount(id);
    }


    /*
    // get list of orders based on id of account
    @GetMapping("/list-of-orders/{something}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Order> getOrdersBasedOnId(@RequestBody @PathVariable long something) {

        return orderRepository.findById(something);
    }

     */


    /*
    @GetMapping("/get-orders/{something}")
    @CrossOrigin(origins = "http://localhost:4200")
    public List<Order> getOrdersUsingId(@RequestBody  @PathVariable long something) {

        return orderRepository.getOrdersWithId(something);

    }

     */


    // post method to save order to database
    // method will set the date property of the order object
    // at time order is saved to database
    @PostMapping("/save-order")
    @CrossOrigin(origins = "http://localhost:4200")
    public Order saveOrder(@RequestBody Order order) {

        Order order1 = new Order();
        order1 = order;

        Date tempDate = new Date(System.currentTimeMillis());

        order1.setDateCreated(tempDate);

        return orderRepository.save(order1);

    }

    /*
    @PostMapping("/account/{accountId}/orders")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {

        return orderRepository.save(order);

    }

     */
}
