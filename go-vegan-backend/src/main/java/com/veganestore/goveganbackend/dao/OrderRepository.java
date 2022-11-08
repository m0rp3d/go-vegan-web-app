package com.veganestore.goveganbackend.dao;

import com.veganestore.goveganbackend.entity.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@CrossOrigin("http://localhost:4200")
public interface OrderRepository extends JpaRepository<Order, Long> {

    // get pade of order objects through the account id
    Page<Order> findByAccountId(@Param("id") Long id, Pageable pageable);


    /*
    @Query(value = "SELECT * FROM orders o join account a on a.id = o.account_id where o.account_id = :id", nativeQuery = true)
    List<Order> getOrdersWithId(@Param("id") long id);

     */

    // native query method to get the max order id(latest id) from the current account
    // used to get the latest order for that account
    @Query(value = "SELECT max(o.id) FROM orders o join account a on a.id = o.account_id where o.account_id = :id", nativeQuery = true)
    Long getHighestIdFromAccount(@Param("id") long id);

    /*
    @Query("FROM Order WHERE id = ?1")
    List<Order> findById(long id);

     */

}
