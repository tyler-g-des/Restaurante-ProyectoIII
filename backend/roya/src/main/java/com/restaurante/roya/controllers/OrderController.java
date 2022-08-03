package com.restaurante.roya.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.restaurante.roya.models.Order;
import com.restaurante.roya.services.OrderService;

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
@RequestMapping("/orders")
@Configuration
public class OrderController{

    @Autowired
    OrderService orderService;
    
    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public ArrayList<Order> getOrder()
    {
        return orderService.getOrder();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public Order saveOrder(@RequestBody Order order)
    {
        return this.orderService.saveOrder(order);
    }

    @GetMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public Optional<Order> getOrderId(@PathVariable("id") Long id)
    {
        return this.orderService.getOrderId(id);
    }
     
    @PostMapping("/getOrderActive")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin(origins = "*")
    public Order getUserName(@RequestBody Order order)
    {
      if(orderService.getOrderActive(order) != null)
      {
        return orderService.getOrderActive(order);
      }else{
        return null;
      }
    }

    @GetMapping(path = "/getOrderActiveLoguin/{id}")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin(origins = "*")
    public ResponseEntity<String> getOrderActiveLoguin(@PathVariable("id") Long id)
    {
        if(this.orderService.getOrderActiveLoguin(id) != null)
        {
           if(this.orderService.getOrderActiveLoguin(id).getstatusOrder().equals("creada")) 
           {
            return new ResponseEntity<>("User order register",HttpStatus.ACCEPTED);
           }

           if(this.orderService.getOrderActiveLoguin(id).getstatusOrder().equals("preparada")) {
            return new ResponseEntity<>("User order prepared",HttpStatus.ACCEPTED);
           }

           else
           {
               return new ResponseEntity<>("Not found status",HttpStatus.ACCEPTED);
           }
        }
        else
        {
            return new ResponseEntity<>("Not found",HttpStatus.ACCEPTED);
        }


    }

}