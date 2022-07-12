package com.restaurante.roya.services;

import java.util.ArrayList;
import java.util.Optional;

import com.restaurante.roya.models.Inventory;
import com.restaurante.roya.repositories.InventoryRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class InventoryService{

    @Autowired
    InventoryRepository inventoryRepository;


    public ArrayList<Inventory> getInventory()
    {
        return (ArrayList<Inventory>) inventoryRepository.findAll();
    }


    public Inventory saveInventory(Inventory Inventory)
    {
        return inventoryRepository.save(Inventory);
    }

    public Optional<Inventory> getInventoryId(Long id) {
        return inventoryRepository.findById(id);
    }


}