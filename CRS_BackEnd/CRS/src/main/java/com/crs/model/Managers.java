package com.crs.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="manager")
@Setter
@Getter
public class Managers {

	@Id
	private String managerEmail;
	
	private String managerPassword;
	private String managerName;
	private String managerPincode;
	public String getManagerEmail() {
		return managerEmail;
	}
	public void setManagerEmail(String managerEmail) {
		this.managerEmail = managerEmail;
	}
	public String getManagerPassword() {
		return managerPassword;
	}
	public void setManagerPassword(String managerPassword) {
		this.managerPassword = managerPassword;
	}
	public String getManagerName() {
		return managerName;
	}
	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}
	public String getManagerPincode() {
		return managerPincode;
	}
	public void setManagerPincode(String managerPincode) {
		this.managerPincode = managerPincode;
	}
	
	
}
