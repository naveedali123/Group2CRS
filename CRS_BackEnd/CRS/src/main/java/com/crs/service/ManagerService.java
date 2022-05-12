package com.crs.service;

import com.crs.model.Managers;


public interface ManagerService {

	void saveManager(Managers manager);
	Managers findManagerById(String email);
	void deleteManager(Managers manager);
	Boolean validateManager(String managerEmail, String managerPassword);
}
