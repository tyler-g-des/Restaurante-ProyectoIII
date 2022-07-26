package com.restaurante.roya.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "plates")
public class Plates {
    @Id
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(unique = true, nullable = false)
    private String dish;

    @Column(unique = true, nullable = false)
    private int price;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private String dishDescription;

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }
    
    public String getDish()
    {
        return dish;
    }

    public void setDish(String dish)
    {
        this.dish = dish;
    }

    public int getPrice()
    {
        return price;
    }

    public void setPrice(int price)
    {
        this.price = price;
    }

    public int getQuantity()
    {
        return quantity;
    }

    public void setQuantity(int quantity)
    {
        this.quantity = quantity;
    }

    public String getDishDescription()
    {
        return dishDescription;
    }

    public void setDishDescription(String dishDescription)
    {
        this.dishDescription = dishDescription;
    }
}  