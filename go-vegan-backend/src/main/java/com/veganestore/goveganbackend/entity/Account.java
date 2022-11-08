package com.veganestore.goveganbackend.entity;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name="account")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @Column(name="first_name")
    private String firstName;

    @Column(name="last_name")
    private String lastName;

    @Column(name="email")
    private String email;

    @Column(name="user_name")
    private String userName;

    @Column(name="password")
    private String password;

    @Column(name="address")
    private String address;

    @Column(name="city")
    private String city;

    @Column(name="state")
    private  String state;

    @Column(name="country")
    private String country;

    @Column(name="zipcode")
    private String zipcode;

    @Column(name="credit_card_number")
    private String creditCardNumber;

    @Column(name="credit_card_code")
    private int creditCardCode;

    @Column(name="credit_card_name")
    private String creditCardName;

    @Column(name="credit_card_expiration_month")
    private int creditCardExpirationMonth;

    @Column(name="credit_card_expiration_year")
    private int creditCardExpirationYear;


    /*
    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private Set<Order> orders = new HashSet<>();

     */


    @OneToMany(mappedBy = "account", cascade = CascadeType.ALL)
    private List<Order> orders;

    public void addOrder(Order order) {
        if (order == null) {
            orders = new ArrayList<>();
        }
        order.setAccount(this);
        orders.add(order);
    }


    /*
    public void addOrder(Order order) {
        this.orders.add(order);
        order.setAccount(this);
    }

     */

    /*
    public void addTrend(Order order) {
        this.orders.add(order);
        order.setAccount(this);
    }
    */

    /*
    public void add(Order order) {

        if (order != null) {

            if (orders == null) {
                orders = new HashSet<>();
            }

            orders.add(order);
            order.setAccount(this);
        }
    }

     */




    public Account() {

    }

    public Account(String firstName,
                   String lastName,
                   String email,
                   String userName,
                   String password,
                   String address,
                   String city,
                   String state,
                   String country,
                   String zipcode,
                   String creditCardNumber,
                   int creditCardCode,
                   String creditCardName,
                   int creditCardExpirationMonth,
                   int creditCardExpirationYear) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipcode = zipcode;
        this.creditCardNumber = creditCardNumber;
        this.creditCardCode = creditCardCode;
        this.creditCardName = creditCardName;
        this.creditCardExpirationMonth = creditCardExpirationMonth;
        this.creditCardExpirationYear = creditCardExpirationYear;
        //this.orders = orders;
    }

    /*
    public Account(String firstName,
                   String lastName,
                   String email,
                   String userName,
                   String password,
                   String address,
                   String city,
                   String state,
                   String country,
                   String zipcode,
                   String creditCardNumber,
                   int creditCardCode,
                   String creditCardName,
                   int creditCardExpirationMonth,
                   int creditCardExpirationYear) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
        this.password = password;
        this.address = address;
        this.city = city;
        this.state = state;
        this.country = country;
        this.zipcode = zipcode;
        this.creditCardNumber = creditCardNumber;
        this.creditCardCode = creditCardCode;
        this.creditCardName = creditCardName;
        this.creditCardExpirationMonth = creditCardExpirationMonth;
        this.creditCardExpirationYear = creditCardExpirationYear;
    }

     */

    public long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getZipcode() {
        return zipcode;
    }

    public void setZipcode(String zipcode) {
        this.zipcode = zipcode;
    }

    public String getCreditCardNumber() {
        return creditCardNumber;
    }

    public void setCreditCardNumber(String creditCardNumber) {
        this.creditCardNumber = creditCardNumber;
    }

    public int getCreditCardCode() {
        return creditCardCode;
    }

    public void setCreditCardCode(int creditCardCode) {
        this.creditCardCode = creditCardCode;
    }

    public String getCreditCardName() {
        return creditCardName;
    }

    public void setCreditCardName(String creditCardName) {
        this.creditCardName = creditCardName;
    }

    public int getCreditCardExpirationMonth() {
        return creditCardExpirationMonth;
    }

    public void setCreditCardExpirationMonth(int creditCardExpirationMonth) {
        this.creditCardExpirationMonth = creditCardExpirationMonth;
    }

    public int getCreditCardExpirationYear() {
        return creditCardExpirationYear;
    }

    public void setCreditCardExpirationYear(int creditCardExpirationYear) {
        this.creditCardExpirationYear = creditCardExpirationYear;
    }

    ///////////////////////////////////////////

    /*
    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

     */
}

