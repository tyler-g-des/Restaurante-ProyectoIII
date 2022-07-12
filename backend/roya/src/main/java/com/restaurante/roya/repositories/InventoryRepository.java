package com.restaurante.roya.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.restaurante.roya.models.Inventory;

@Repository
public interface InventoryRepository extends CrudRepository<Inventory,Long> {
    
}
