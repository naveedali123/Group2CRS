package com.crs.service;

import java.util.List;

import com.crs.model.Admin;



public interface  AdminService {
	List <Admin> fetchAllAdmin();
	void saveAdmin(Admin admin);
	Boolean validateAdmin(String adminEmail, String adminPassword);
}
