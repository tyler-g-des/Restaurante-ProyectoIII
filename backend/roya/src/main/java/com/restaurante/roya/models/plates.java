package com.restaurante.roya.models;

import javax.persistence.Column;
import javax.persistence.Id;

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
}
  