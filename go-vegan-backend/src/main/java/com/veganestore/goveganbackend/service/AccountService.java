package com.veganestore.goveganbackend.service;

import com.veganestore.goveganbackend.dao.AccountRepository;
import com.veganestore.goveganbackend.entity.Account;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepo;

    // method to save account
    public Account saveAccount(Account account) {
        return accountRepo.save(account);
    }

    // method to get account by email
    public Account getAccountByEmail(String email) {
        return accountRepo.findByEmail(email);
    }

    // method to get account by email and password
    public Account getAccountByEmailAndPassword(String email, String password) {
        return accountRepo.findByEmailAndPassword(email, password);
    }
}
