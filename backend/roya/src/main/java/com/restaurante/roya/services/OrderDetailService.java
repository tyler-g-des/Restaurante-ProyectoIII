package com.restaurante.roya.services;

import java.util.ArrayList;
import java.util.Optional;

import com.restaurante.roya.models.OrdersDetails;
import com.restaurante.roya.repositories.OrderDetailRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class OrderDetailService{

    @Autowired
    OrderDetailRepository orderDetailRepository;

    public ArrayList<OrdersDetails> getOrderDetail()
    {
        return (ArrayList<OrdersDetails>) orderDetailRepository.findAll();
    }

    public OrdersDetails saveOrderDetail(OrdersDetails orders)
    {
        return orderDetailRepository.save(orders);
    }

    public Optional<OrdersDetails> getOrderDetailId(Long id) {
        return orderDetailRepository.findById(id);
    }

}