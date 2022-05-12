package com.crs.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Service;

import com.crs.model.Complaints;
import com.crs.repository.ComplaintRepository;


@Service
public class ComplaintServiceImpl  {

	@Autowired
	ComplaintRepository complaintRepository;
	
	@Autowired
	JdbcTemplate jdbcTemplate;
	
	public List<Complaints> fetchAllComplaints() {
		return (List<Complaints>) complaintRepository.findAll();
	}

	public void saveComplaint(Complaints complaint) {
		complaintRepository.save(complaint);
		
	}

	public Complaints findComplaintById(int ticketId) {
		Complaints complaint = complaintRepository.findById(ticketId).orElse(null);
		return complaint;
	}


	public void deleteComplaint(Complaints complaint) {
		complaintRepository.delete(complaint);
		
	}

	public List<Complaints> findComplaintByEmail(String customerEmail) {
		return complaintRepository.findComplaintByCustomerEmail(customerEmail);
	}
	
	public void addEngineerToComplaint(int ticketId,String email) {
        jdbcTemplate.update("update tbl_complaints set engineer_email=? where ticket_id=?", new Object[] { email,ticketId });
    }
	

}
