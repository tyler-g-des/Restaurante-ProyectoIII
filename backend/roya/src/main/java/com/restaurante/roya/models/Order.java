package com.restaurante.roya.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "orders")
public class Order {
     
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @ManyToOne
    private Tablets tablet;

    @ManyToOne
    private Users user;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private double totalOrder;

    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }
    

    public Tablets getTable()
    {
        return tablet;
    }

    public void setTablet(Tablets tablet)
    {
        this.tablet = tablet;
    }

    public Users getUser()
    {
        return user;
    }

    public void setUser(Users user)
    {
        this.user = user;
    }

    public String getDate()
    {
        return date;
    }

    public void setDate(String date)
    {
        this.date = date;
    }

    public Double getTotalOrder()
    {
        return totalOrder;
    }

    public void setDate(Double totalOrder)
    {
        this.totalOrder = totalOrder;
    }

}  