package com.restaurante.roya.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restaurante.roya.models.Plates;
import com.restaurante.roya.repositories.PlateRepository;

@Service
public class PlateService {
    
    @Autowired
    PlateRepository plateRepository;

    public ArrayList<Plates> getPlate()
    {
        return (ArrayList<Plates>) plateRepository.findAll();
    }

    public Plates savePlate(Plates plate)
    {
        return plateRepository.save(plate);
    }

    public Optional<Plates> getPlateId(Long id) {
        return plateRepository.findById(id);
    }
}
