package com.restaurante.roya.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.restaurante.roya.repositories.TabletRepository;
import com.restaurante.roya.models.Tablets;;

@Service
public class TabletService {

    @Autowired
    TabletRepository tabletRepository;

    
    public ArrayList<Tablets> getTablets()
    {
        return (ArrayList<Tablets>) tabletRepository.findAll();
    }

    public Tablets saveTablet(Tablets tablet)
    {
        return tabletRepository.save(tablet);
    }

    public Optional<Tablets> getTabletId(Long id) {
        return tabletRepository.findById(id);
    }


    public ArrayList<Tablets> getTabletsAvalible()
    {
        ArrayList<Tablets> table = (ArrayList<Tablets>) tabletRepository.findAll();
        ArrayList<Tablets> tableAvalible = new ArrayList<>();

        for (Tablets tabletFind : table) {

            if (tabletFind.getStatus().equals("Libre"))
            {
               tableAvalible.add(tabletFind);
            }
        }
        return tableAvalible;
    }

}