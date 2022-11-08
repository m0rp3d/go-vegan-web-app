package com.veganestore.goveganbackend.dao;

import com.veganestore.goveganbackend.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.Optional;


@CrossOrigin("http://localhost:4200")
public interface AccountRepository extends JpaRepository<Account, Long> {

    // find account using id
    Optional<Account> findById(Long id);

    // find account using email and password property
    public Account findByEmailAndPassword(String email, String password);

    // find account using email property
    public Account findByEmail(String email);


}
