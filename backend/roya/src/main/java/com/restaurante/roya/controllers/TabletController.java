package com.restaurante.roya.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;


import com.restaurante.roya.models.Tablets;
import com.restaurante.roya.services.TabletService;

@RestController
@RequestMapping("/tablets")
@Configuration
public class TabletController {
    
    @Autowired
    TabletService tabletService;

    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public ArrayList<Tablets> getTablet()
    {
        return tabletService.getTablets();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public Tablets saveTablet(@RequestBody Tablets user)
    {
        return this.tabletService.saveTablet(user);
    }

    @GetMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public Optional<Tablets> getTabletId(@PathVariable("id") Long id)
    {
        return this.tabletService.getTabletId(id);
    }
}
