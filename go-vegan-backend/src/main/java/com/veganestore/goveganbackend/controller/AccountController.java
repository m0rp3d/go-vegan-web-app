package com.veganestore.goveganbackend.controller;

import com.veganestore.goveganbackend.dao.AccountRepository;
import com.veganestore.goveganbackend.entity.Account;
import com.veganestore.goveganbackend.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private AccountService accountService;


    // post method to register account
    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:4200")
    public Account registerAccount(@RequestBody Account account) throws Exception{
        // assign email property of the account parameter to tempEmail
        String tempEmail = account.getEmail();

        // if the account parameter's email is not null or empty
        if(tempEmail != null && !"".equals(tempEmail)) {
            Account accountObj = accountService.getAccountByEmail(tempEmail);

            // check if email already exists in database
            // if email exists in database throw exception
            if(accountObj != null) {
                throw new Exception("User with " + tempEmail + " already exist!");
            }
        }

        // otherwise save account to database
        Account accountObj = null;
        accountObj = accountService.saveAccount(account);

        return accountObj;
    }

    /*
    // get account by id
    // method used for testing
    @GetMapping("/accounts/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Optional<Account> getAccountById(@PathVariable("id") Long id) {

        return accountRepository.findById(id);
    }

     */

    // get account method using email, and password property
    @GetMapping("/check/{email}/{password}")
    @CrossOrigin(origins = "http://localhost:4200")
    public Account getAccountData(@PathVariable String email, @PathVariable String password) throws Exception{

        Account accountReturn = null;

        // assign account object to accountReturn if the email and password property are both non null
        if(email != null && password != null) {
            accountReturn = accountService.getAccountByEmailAndPassword(email, password);

        }

        // throw exception if account doesn't exist
        if(accountReturn == null) {
            throw new Exception("User doesn't exist");
        }

        // else return the account
        return accountReturn;
    }

    // update account put method
    @PutMapping("/account-update/{id}")
    @CrossOrigin(origins = "http://localhost:4200")
    public ResponseEntity<Account> updateAccount(@PathVariable long id, @RequestBody Account account) {

        // checks if an account exists with the id parameter
        Account tempAccount = accountRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Account with id doesn't exist: " + id));

        // update properties of account
        tempAccount.setFirstName(account.getFirstName());
        tempAccount.setLastName(account.getLastName());
        tempAccount.setEmail(account.getEmail());
        tempAccount.setUserName(account.getUserName());

        tempAccount.setPassword(account.getPassword());
        tempAccount.setAddress(account.getAddress());
        tempAccount.setCity(account.getCity());
        tempAccount.setState(account.getState());

        tempAccount.setCountry(account.getCountry());
        tempAccount.setZipcode(account.getZipcode());
        tempAccount.setCreditCardNumber(account.getCreditCardNumber());

        tempAccount.setCreditCardCode(account.getCreditCardCode());

        tempAccount.setCreditCardName(account.getCreditCardName());

        tempAccount.setCreditCardExpirationMonth(account.getCreditCardExpirationMonth());
        tempAccount.setCreditCardExpirationYear(account.getCreditCardExpirationYear());

        // save the updated account
        Account updatedAccount = accountRepository.save(tempAccount);

        return ResponseEntity.ok(updatedAccount);


    }

    // post account method using both email and password
    /*
    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:4200")
    public Account signInAccount(@RequestBody Account account) throws Exception{
        String tempEmail = account.getEmail();
        String tempPassword = account.getPassword();

        Account accountReturn = null;

        if(tempEmail != null && tempPassword != null) {
           accountReturn = accountService.getAccountByEmailAndPassword(tempEmail, tempPassword);

        }

        if(accountReturn == null) {
            throw new Exception("User doesn't exist");
        }
        return accountReturn;
    }

     */


}

