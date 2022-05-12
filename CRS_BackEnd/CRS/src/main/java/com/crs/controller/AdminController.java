package com.crs.controller;

import java.util.LinkedHashMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.crs.repository.AdminRepository;
import com.crs.service.AdminService;


/*Naveed Ali*/

@CrossOrigin("*")
@RestController
@RequestMapping(path="/admin")
public class AdminController {

	@Autowired
	AdminService adminService;
	
	@Autowired
	AdminRepository adminrepository;
	
	
	@PostMapping("/login")
	public Boolean validateAdmin(@RequestBody Object loginDetails) throws NoSuchFieldException {
		
			String adminEmail = (String) ((LinkedHashMap) loginDetails).get("adminEmail");
			String adminPassword = (String) ((LinkedHashMap) loginDetails).get("adminPassword");
			
			Boolean adminLoginStatus = adminService.validateAdmin(adminEmail,adminPassword );
		
			return adminLoginStatus;
			
	} 
}
