package com.restaurante.roya.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "inventories")
public class Inventory {
    
    @Id
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(unique = true, nullable = false)
    private String ingredient;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private String ingredientType;


    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }
    
    public String getIngredient()
    {
        return ingredient;
    }

    public void setIngredient(String Ingredient)
    {
        this.ingredient = Ingredient;
    }

    public int getQuantity()
    {
        return quantity;
    }

    public void setQuantity(int quantity)
    {
        this.quantity = quantity;
    }

    public String getIngredientType()
    {
        return ingredientType;
    }

    public void setIngredientType(String ingredientType)
    {
        this.ingredientType = ingredientType;
    }

    
}
