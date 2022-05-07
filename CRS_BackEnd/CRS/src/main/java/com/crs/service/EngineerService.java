package com.crs.service;

import java.util.List;

import com.crs.model.Engineers;

public interface EngineerService {

	List <Engineers> fetchAllEngineers();
	void saveEngineer(Engineers engineer);
	Engineers findEngineerById(String email);
	void deleteEngineer(Engineers engineer);
	Boolean validateEngineer(String engineerEmail, String engineerPassword);
}
