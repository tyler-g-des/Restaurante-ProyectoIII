package com.restaurante.roya.models;

import javax.persistence.Column;
import javax.persistence.Id;

public class plates {
    @Id
    @Column(unique = true, nullable = false)
    private Long id;

    @Column(unique = true, nullable = false)
    private String dish;

    @Column(nullable = false)
    private int quantity;

    @Column(nullable = false)
    private String dishDescription;
}
  