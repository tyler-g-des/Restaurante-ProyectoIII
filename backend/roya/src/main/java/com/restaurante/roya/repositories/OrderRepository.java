package com.restaurante.roya.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.restaurante.roya.models.Order;

@Repository
public interface OrderRepository extends CrudRepository<Order,Long>{
    
    //public abstract Order findByUserAndStatus(String name, boolean status);
}
