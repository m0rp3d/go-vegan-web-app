package com.veganestore.goveganbackend.dao;

import com.veganestore.goveganbackend.entity.OrderItem;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

    // get page of orderitems using order id
    Page<OrderItem> findByOrderId(@Param("id") Long id, Pageable pageable);
}
