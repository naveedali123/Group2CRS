package com.crs.controller;

import java.util.LinkedHashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.crs.model.Engineers;
import com.crs.repository.EngineerRepository;
import com.crs.service.EngineerDutyServiceImpl;
import com.crs.service.EngineerService;


@CrossOrigin("*")
@RestController
@RequestMapping(path="/engineers")
public class EngineerController {
	
	@Autowired
	EngineerService engineerService;
	
	@Autowired
	EngineerDutyServiceImpl engineerDutyServiceImpl;
	
	@Autowired
	EngineerRepository engineerRepository;
	
	@GetMapping("/getAllEngineers")
	public List<Engineers> getAllEngineers(){
		List<Engineers> engineers = (List<Engineers>) engineerService.fetchAllEngineers();
		return engineers;
	}
		
	@PostMapping("/login")
	public Engineers validateEngineer(@RequestBody Object loginDetails) throws NoSuchFieldException {
		
		String engineerEmail = (String) ((LinkedHashMap) loginDetails).get("engineerEmail");
		String engineerPassword = (String) ((LinkedHashMap) loginDetails).get("engineerPassword");
			
		Boolean engineerLoginStatus = engineerService.validateEngineer(engineerEmail,engineerPassword );
		if(engineerLoginStatus) {	
			Engineers engineer= engineerRepository.findById(engineerEmail).get();
			return engineer;
		}
		return null;
		
} 
	
	@PostMapping(path = "/addEngineer")
	public @ResponseBody void addEngineer(@RequestBody Engineers engineer) {
		engineerService.saveEngineer(engineer);
		
	}
	
	@DeleteMapping(path = "/deleteEngineer/{engineerEmail}")
	public @ResponseBody void deleteEngineer(@PathVariable("engineerEmail") String email) {
		Engineers engineer =engineerService.findEngineerById(email);
		engineerService.deleteEngineer(engineer);
		
	}

}
