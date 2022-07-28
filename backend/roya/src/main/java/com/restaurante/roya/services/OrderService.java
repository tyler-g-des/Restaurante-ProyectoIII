package com.restaurante.roya.services;

import java.util.ArrayList;
import java.util.Optional;

import com.restaurante.roya.models.Order;
import com.restaurante.roya.repositories.OrderRepository;
import com.restaurante.roya.repositories.TabletRepository;
import com.restaurante.roya.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrderService{

    @Autowired
    OrderRepository orderRepository;
    TabletRepository tabletRepository;
    UserRepository userRepository;


    public ArrayList<Order> getOrder()
    {
        return (ArrayList<Order>) orderRepository.findAll();
    }

    public Order saveOrder(Order orders, Long idTablet, Long idUser)
    {

        return orderRepository.save(orders);
    }

    public Optional<Order> getOrderId(Long id) {
        return orderRepository.findById(id);
    }

}