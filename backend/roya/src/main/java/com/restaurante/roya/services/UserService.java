package com.restaurante.roya.services;

import java.util.ArrayList;
import java.util.Optional;

import com.restaurante.roya.models.Users;
import com.restaurante.roya.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class UserService{

    @Autowired
    UserRepository userRepository;


    public ArrayList<Users> getUsers()
    {
        return (ArrayList<Users>) userRepository.findAll();
    }


    public Users saveUser(Users user)
    {
        return userRepository.save(user);
    }

    public Optional<Users> getUserId(Long id) {
        return userRepository.findById(id);
    }

    public ArrayList<Users> loguin(Users user){

        ArrayList<Users> usuarios = (ArrayList<Users>) userRepository.findAll();
        
        for (Users users : usuarios) {
            if(users.getName().equals(user.getName())){

                if(users.getPassword().equals(user.getPassword()))
                {
                    return userRepository.findByName(user.getName());
                }
                return null;
            }
        }

        return null;

    }
/*
    @Override
    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
        Users user = userRepository.findByUsernameOrEmail(usernameOrEmail, usernameOrEmail)
                .orElseThrow(() ->
                        new UsernameNotFoundException("User not found with username or email:" + usernameOrEmail));
         return new org.springframework.security.core.userdetails.User(user.getEmail(),
                 user.getPassword(),mapRolesToAuthorities(user.getRoles()));
     }

     private Collection< ? extends GrantedAuthority> mapRolesToAuthorities(Set<Roles> roles){
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }
*/
    

}