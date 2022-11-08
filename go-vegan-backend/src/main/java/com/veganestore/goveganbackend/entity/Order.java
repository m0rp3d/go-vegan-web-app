package com.veganestore.goveganbackend.entity;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    /*
    @Column(name="total_price")
    private int totalPrice;

     */

    @Column(name="total_price")
    private double totalPrice;

    @Column(name="total_quantity")
    private int totalQuantity;

    @Column(name="date_created")
    @CreationTimestamp
    private Date dateCreated;

    @Column(name="shipping_address")
    private String shippingAddress;

    @ManyToOne
    @JoinColumn(name = "account_id",nullable = false, insertable = true, updatable = true)
    private Account account;



    ///////////////////////////////////////////////////////

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }




/*
    @Column(name = "account_id")
    private long accountId;

    public long getAccountId() {
        return accountId;
    }

    public void setAccountId(long accountId) {
        this.accountId = accountId;
    }
    */


    /*
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    private Set<OrderItem> orderItems = new HashSet<>();
    */

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "order")
    private List<OrderItem> orderItems;



    public Order() {

    }


    public Order(double totalPrice,
                 int totalQuantity,
                 Date dateCreated,
                 String shippingAddress,
                 Account account,
                 List<OrderItem> orderItems) {
        this.totalPrice = totalPrice;
        this.totalQuantity = totalQuantity;
        this.dateCreated = dateCreated;
        this.shippingAddress = shippingAddress;
        this.account = account;
        this.orderItems = orderItems;
    }

    /*
    public Order(int totalPrice,
                 int totalQuantity,
                 Date dateCreated,
                 String shippingAddress,
                 Account account,
                 Set<OrderItem> orderItems) {
        this.totalPrice = totalPrice;
        this.totalQuantity = totalQuantity;
        this.dateCreated = dateCreated;
        this.shippingAddress = shippingAddress;
        this.account = account;
        this.orderItems = orderItems;
    }

     */

    public long getId() {
        return id;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }

    /*
    public int getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(int totalPrice) {
        this.totalPrice = totalPrice;
    }

     */

    public int getTotalQuantity() {
        return totalQuantity;
    }

    public void setTotalQuantity(int totalQuantity) {
        this.totalQuantity = totalQuantity;
    }

    public Date getDateCreated() {
        return dateCreated;
    }

    public void setDateCreated(Date dateCreated) {
        this.dateCreated = dateCreated;
    }

    public String getShippingAddress() {
        return shippingAddress;
    }

    public void setShippingAddress(String shippingAddress) {
        this.shippingAddress = shippingAddress;
    }
//////////////////////////////////////////////////////////////////////////////
    public List<OrderItem> getOrderItems() {
        return orderItems;
    }

    public void setOrderItems(List<OrderItem> orderItems) {
        this.orderItems = orderItems;
    }









    /*
    public Account getAccount() {
        return account;
    }



    public void setAccount(Account account) {
        this.account = account;
    }

     */

}

