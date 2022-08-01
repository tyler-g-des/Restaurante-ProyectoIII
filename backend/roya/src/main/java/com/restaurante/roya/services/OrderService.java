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

    public Order saveOrder(Order orders)
    {

        return orderRepository.save(orders);
    }

    public Optional<Order> getOrderId(Long id) {
        return orderRepository.findById(id);
    }

    public Order getOrderActive(Order order)
    {
        ArrayList<Order> orders = (ArrayList<Order>) orderRepository.findAll();
        
        for (Order orderSelect : orders) 
        {
          if(orderSelect.getUser() != null && orderSelect.getTable() != null){
              
            if(orderSelect.getUser().getId() == order.getUser().getId())
            {
              if(orderSelect.getTable().getId() == order.getTable().getId())
              {
                if(orderSelect.getstatusOrder().equals(order.getstatusOrder()))
                {
                  return orderSelect;
                }
              }
            }    
          }  
        }
        return null;
    }

    public Order getOrderActiveLoguin(Long id)
    {
        ArrayList<Order> orders = (ArrayList<Order>) orderRepository.findAll();
        
        for (Order orderSelect : orders) 
        {
          if(orderSelect.getUser() != null){
              
            if(orderSelect.getUser().getId() == id)
            {
                if(orderSelect.getstatusOrder().equals("creada"))
                {
                  return orderSelect;
                } 
            }    
          }  
        }
        return null;
    }

}