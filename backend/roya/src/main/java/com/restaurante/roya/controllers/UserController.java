package com.restaurante.roya.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.restaurante.roya.models.Users;
import com.restaurante.roya.services.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/users")
@Configuration
public class UserController{

    @Autowired
    UserService userService;
    
    @GetMapping()
    @CrossOrigin (origins = "*")
    public ArrayList<Users> getUsers()
    {
        return userService.getUsers();
    }

    @PostMapping()
    @CrossOrigin (origins = "*")
    public Users saveUser(@RequestBody Users user)
    {
        return this.userService.saveUser(user);
    }

    @GetMapping(path = "/{id}")
    @CrossOrigin (origins = "*")
    public Optional<Users> getUserId(@PathVariable("id") Long id)
    {
        return this.userService.getUserId(id);
    }

    @PostMapping("/logins")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public ResponseEntity<String> ValidatedLogin(@RequestBody Users user){

        if(this.userService.login(user) != null){
        return new ResponseEntity<>("User signed-in successfully!",HttpStatus.ACCEPTED);
        }
            else
            {
                return new ResponseEntity<>("Not found",HttpStatus.ACCEPTED);
            }

    }

    @PostMapping("/getUserName")
    @CrossOrigin(origins = "*")
    public Users getUserName(@RequestBody Users user)
    {
        if(this.userService.getData(user) != null){

            ArrayList<Users> listUser = userService.getData(user);

            for (Users userFind : listUser) {

                return userFind;
            }
        }
        return null;
    }


    @PostMapping("/getUserComplete")
    @CrossOrigin(origins = "*")
    public Users getUserComplete(@RequestBody Users user)
    {
        if(this.userService.getDataComplete(user) != null){

            ArrayList<Users> listUser = userService.getDataComplete(user);

            for (Users userFind : listUser) {

                return userFind;
            }
        }
        return null;
    }
}