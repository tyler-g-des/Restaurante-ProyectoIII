package com.restaurante.roya.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.restaurante.roya.models.Inventory;
import com.restaurante.roya.services.InventoryService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/Inventory")
@Configuration
public class InventoryController{

    @Autowired
    InventoryService Inventoryervice;
    
    @GetMapping()
    @CrossOrigin (origins = "*")
    public ArrayList<Inventory> getInventory()
    {
        return Inventoryervice.getInventory();
    }

    @PostMapping()
    @CrossOrigin (origins = "*")
    public Inventory saveInventory(@RequestBody Inventory Inventory)
    {
        return this.Inventoryervice.saveInventory(Inventory);
    }

    @GetMapping(path = "/{id}")
    @CrossOrigin (origins = "*")
    public Optional<Inventory> getInventoryId(@PathVariable("id") Long id)
    {
        return this.Inventoryervice.getInventoryId(id);
    }
     
}