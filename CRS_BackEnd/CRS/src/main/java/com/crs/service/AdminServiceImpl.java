package com.crs.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crs.model.Admin;
import com.crs.repository.AdminRepository;


@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	AdminRepository adminRepository;
	
	
	@Override
	public Boolean validateAdmin(String adminEmail, String adminPassword) {
		System.out.println(adminEmail + " --- "+adminEmail);
		if (adminRepository.findById(adminEmail).isPresent()) {
			Admin admin= adminRepository.findById(adminEmail).get();
			String dbPassword = admin.getAdminPassword().toString();
			if (dbPassword.equals(adminPassword)) {
				return true;
			}
		}
		return false;
	}
}
