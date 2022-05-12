package com.crs.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.crs.model.Complaints;

public interface ComplaintRepository extends CrudRepository<Complaints, Integer> {

	List<Complaints> findComplaintByCustomerEmail(String customerEmail);

	List<Complaints> findComplaintByPincode(String managerPincode); 

	
	List<Complaints> findByEngineerEmail(String engineerEmail);

}
