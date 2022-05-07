package com.crs.service;

import java.util.List;

import com.crs.model.Customers;

public interface CustomerService {

	List <Customers> fetchAllCustomers();
	void saveCustomer(Customers customer);
	Customers findCustomerById(String email);
	void deleteCustomer(Customers customer);
	Boolean validateCustomer(String customerEmail, String customerPassword);
}
