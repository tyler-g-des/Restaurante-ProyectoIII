package com.restaurante.roya.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "orderDetails")
public class OrdersDetails {
     
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(nullable = false)
    private String plato;

    @Column(nullable = false)
    private String bebida;

    @Column(nullable = false)
    private String postre;

    @ManyToOne
    private Order order;


    public Long getId()
    {
        return id;
    }

    public void setId(Long id)
    {
        this.id = id;
    }
    

    public String getPlato()
    {
        return plato;
    }

    public void setPlato(String plato)
    {
        this.plato = plato;
    }

    public String getBebida()
    {
        return bebida;
    }

    public void setBebida(String bebida)
    {
        this.bebida = bebida;
    }

    public String getPostre()
    {
        return postre;
    }

    public void setPostre(String postre)
    {
        this.postre = postre;
    }

    public Order getOrder()
    {
        return order;
    }

    public void setOrder(Order order)
    {
        this.order = order;
    }
}  