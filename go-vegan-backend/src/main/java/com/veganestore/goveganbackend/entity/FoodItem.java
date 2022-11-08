package com.veganestore.goveganbackend.entity;

import javax.persistence.*;

@Entity
@Table(name="food_item")
public class FoodItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "item_id", nullable = false)
    private FoodCategory category;

    @Column(name="name")
    private String name ;

    @Column(name="weight")
    private String  weight;

    @Column(name="serving")
    private String serving;

    @Column(name="price")
    private double price;

    @Column(name="image_url")
    private String imageUrl;

    @Column(name="calories")
    private int calories;

    /*
    @Column(name="item_id")
    private Long itemId;

     */

    @Column(name="protein")
    private int protein;

    @Column(name="saturated_fat")
    private int saturatedFat;

    @Column(name="trans_fat")
    private int transFat;

    @Column(name="cholesterol")
    private int cholesterol;

    @Column(name="fiber")
    private int fiber;

    @Column(name="sugars")
    private int sugars;

    @Column(name="vitamin_a")
    private int vitaminA;

    @Column(name="vitamin_b12")
    private int vitaminB12;

    @Column(name="vitamin_c")
    private int vitaminC;

    @Column(name="vitamin_d")
    private int vitaminD;

    @Column(name="vitamin_k")
    private int vitaminK;

    @Column(name="omega_3")
    private int omega3;

    @Column(name="sodium")
    private int sodium;

    @Column(name="calcium")
    private int calcium;

    @Column(name="iron")
    private int iron;

    @Column(name="potassium")
    private int potassium;

    @Column(name="zinc")
    private int zinc;

    @Column(name="iodine")
    private int iodine;

    public FoodItem() {

    }

    public FoodItem(String name, String weight, String serving,
                    double price, String imageUrl, int calories,
                    int protein, int saturatedFat, int transFat,
                    int cholesterol, int fiber, int sugars, int vitaminA, int vitaminB12,
                    int vitaminC, int vitaminD, int vitaminK, int omega3, int sodium,
                    int calcium, int iron, int potassium, int zinc, int iodine) {

        //this.id = id;
        this.name = name;
        this.weight = weight;
        this.serving = serving;
        this.price = price;
        this.imageUrl = imageUrl;
        this.calories = calories;
        //this.itemId = itemId;
        this.protein = protein;
        this.saturatedFat = saturatedFat;
        this.transFat = transFat;
        this.cholesterol = cholesterol;
        this.fiber = fiber;
        this.sugars = sugars;
        this.vitaminA = vitaminA;
        this.vitaminB12 = vitaminB12;
        this.vitaminC = vitaminC;
        this.vitaminD = vitaminD;
        this.vitaminK = vitaminK;
        this.omega3 = omega3;
        this.sodium = sodium;
        this.calcium = calcium;
        this.iron = iron;
        this.potassium = potassium;
        this.zinc = zinc;
        this.iodine = iodine;
    }


    public Long getId() {
        return id;
    }


    /*
    public void setId(Long id) {
        this.id = id;
    }

    */

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getWeight() {
        return weight;
    }

    public void setWeight(String weight) {
        this.weight = weight;
    }

    public String getServing() {
        return serving;
    }

    public void setServing(String serving) {
        this.serving = serving;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    /*
    public Long getItemId() {
        return itemId;
    }

    public void setItemId(Long itemId) {
        this.itemId = itemId;
    }

    */

    public int getProtein() {
        return protein;
    }

    public void setProtein(int protein) {
        this.protein = protein;
    }

    public int getSaturatedFat() {
        return saturatedFat;
    }

    public void setSaturatedFat(int saturatedFat) {
        this.saturatedFat = saturatedFat;
    }

    public int getTransFat() {
        return transFat;
    }

    public void setTransFat(int transFat) {
        this.transFat = transFat;
    }

    public int getCholesterol() {
        return cholesterol;
    }

    public void setCholesterol(int cholesterol) {
        this.cholesterol = cholesterol;
    }

    public int getFiber() {
        return fiber;
    }

    public void setFiber(int fiber) {
        this.fiber = fiber;
    }

    public int getSugars() {
        return sugars;
    }

    public void setSugars(int sugars) {
        this.sugars = sugars;
    }

    public int getVitaminA() {
        return vitaminA;
    }

    public void setVitaminA(int vitaminA) {
        this.vitaminA = vitaminA;
    }

    public int getVitaminB12() {
        return vitaminB12;
    }

    public void setVitaminB12(int vitaminB12) {
        this.vitaminB12 = vitaminB12;
    }

    public int getVitaminC() {
        return vitaminC;
    }

    public void setVitaminC(int vitaminC) {
        this.vitaminC = vitaminC;
    }

    public int getVitaminD() {
        return vitaminD;
    }

    public void setVitaminD(int vitaminD) {
        this.vitaminD = vitaminD;
    }

    public int getVitaminK() {
        return vitaminK;
    }

    public void setVitaminK(int vitaminK) {
        this.vitaminK = vitaminK;
    }

    public int getOmega3() {
        return omega3;
    }

    public void setOmega3(int omega3) {
        this.omega3 = omega3;
    }

    public int getSodium() {
        return sodium;
    }

    public void setSodium(int sodium) {
        this.sodium = sodium;
    }

    public int getCalcium() {
        return calcium;
    }

    public void setCalcium(int calcium) {
        this.calcium = calcium;
    }

    public int getIron() {
        return iron;
    }

    public void setIron(int iron) {
        this.iron = iron;
    }

    public int getPotassium() {
        return potassium;
    }

    public void setPotassium(int potassium) {
        this.potassium = potassium;
    }

    public int getZinc() {
        return zinc;
    }

    public void setZinc(int zinc) {
        this.zinc = zinc;
    }

    public int getIodine() {
        return iodine;
    }

    public void setIodine(int iodine) {
        this.iodine = iodine;
    }

    public int getCalories() {
        return calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }
}
