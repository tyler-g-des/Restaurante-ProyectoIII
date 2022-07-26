package com.restaurante.roya.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.restaurante.roya.models.Plates;
import com.restaurante.roya.services.PlateService;

@RestController
@RequestMapping("/plates")
@Configuration
public class PlateController {
    
    @Autowired
    PlateService plateService;
    
    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public ArrayList<Plates> getPlates()
    {
        return plateService.getPlate();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public Plates savePlate(@RequestBody Plates plate)
    {
        return this.plateService.savePlate(plate);
    }

    @GetMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public Optional<Plates> getPlateId(@PathVariable("id") Long id)
    {
        return this.plateService.getPlateId(id);
    }
}
