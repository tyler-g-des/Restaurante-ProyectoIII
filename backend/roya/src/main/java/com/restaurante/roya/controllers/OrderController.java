package com.restaurante.roya.controllers;

import java.util.ArrayList;
import java.util.Optional;

import com.restaurante.roya.models.OrdersDetails;
import com.restaurante.roya.services.OrderDetailService;

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

@RestController
@RequestMapping("/orderDetails")
@Configuration
public class OrderController{

    @Autowired
    OrderDetailService orderDetailService;
    
    @GetMapping()
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public ArrayList<OrdersDetails> getOrderDetails()
    {
        return orderDetailService.getOrderDetail();
    }

    @PostMapping()
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public OrdersDetails getOrderDetails(@RequestBody OrdersDetails order)
    {
        return this.orderDetailService.saveOrderDetail(order);
    }

    @GetMapping(path = "/{id}")
    @ResponseStatus(HttpStatus.OK)
    @CrossOrigin (origins = "*")
    public Optional<OrdersDetails> getOrderDetailsId(@PathVariable("id") Long id)
    {
        return this.orderDetailService.getOrderDetailId(id);
    }
     
}