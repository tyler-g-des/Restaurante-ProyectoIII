package com.restaurante.roya.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.restaurante.roya.models.Plates;

@Repository
public interface PlateRepository extends CrudRepository<Plates,Long> {
    
}
