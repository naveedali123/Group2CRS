package com.crs.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="tbl_engineer")
@Setter
@Getter
public class Engineers {

	@Id
	private String engineerEmail;
	
	private String engineerPassword;
	private String engineerName;
	public String getEngineerEmail() {
		return engineerEmail;
	}
	public void setEngineerEmail(String engineerEmail) {
		this.engineerEmail = engineerEmail;
	}
	public String getEngineerPassword() {
		return engineerPassword;
	}
	public void setEngineerPassword(String engineerPassword) {
		this.engineerPassword = engineerPassword;
	}
	public String getEngineerName() {
		return engineerName;
	}
	public void setEngineerName(String engineerName) {
		this.engineerName = engineerName;
	}

	
}
