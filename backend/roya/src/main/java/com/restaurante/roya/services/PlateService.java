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
        ArrayList<Plates> tablets = (ArrayList<Plates>)  plateRepository.findAll();
        ArrayList<Plates> tablesNept = new ArrayList<Plates>();

        Long menor = (long) 1;

        while(menor <= 10)
        {
            for (Plates tablet : tablets) 
            {
                if(tablet.getId() == menor)
                {
                   tablesNept.add(tablet);
                }
            }
            menor ++;
           
       }
       return (tablesNept);
    }

    public Plates savePlate(Plates plate)
    {
        return plateRepository.save(plate);
    }

    public Optional<Plates> getPlateId(Long id) {
        return plateRepository.findById(id);
    }

    public Plates getPlateName(String name) {
        
        ArrayList<Plates> platos = (ArrayList<Plates>) plateRepository.findAll();
        for (Plates plato : platos) {
            if(plato.getDish() == name){
               return plato;
            }
        }
        return null;
    }
}
