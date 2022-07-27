package com.restaurante.roya.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.restaurante.roya.models.OrdersDetails;

@Repository
public interface OrderDetailRepository extends CrudRepository<OrdersDetails,Long>{
    

}
