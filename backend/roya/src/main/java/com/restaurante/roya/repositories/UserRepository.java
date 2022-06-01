package com.restaurante.roya.repositories;

import java.util.ArrayList;

import com.restaurante.roya.models.Users;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<Users,Long>{

    public abstract ArrayList<Users> findByName(String name);

}