package com.restaurante.roya.repositories;

import org.springframework.data.repository.CrudRepository;
import com.restaurante.roya.models.Tablets;

public interface TabletRepository extends CrudRepository<Tablets,Long> {
    
}
