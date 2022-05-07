package com.crs.controller;

import java.util.LinkedHashMap;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.crs.model.Admin;
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
	@PostMapping("/logout")
	public String userLogout(HttpSession session, Model modelMap, HttpServletRequest request,
			HttpServletResponse resp) {

		session.invalidate();

		resp.setHeader("refresh", "1;url=" + request.getContextPath());
		return "/main";

	}
	
	@PostMapping(path = "/addAdmin")
	public @ResponseBody void addAdmin(@RequestBody Admin admin) {
		adminService.saveAdmin(admin);
		
	}

}
