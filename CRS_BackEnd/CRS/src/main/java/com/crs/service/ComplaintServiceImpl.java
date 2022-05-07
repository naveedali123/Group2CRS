package com.crs.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crs.model.Complaints;
import com.crs.repository.ComplaintRepository;


@Service
public class ComplaintServiceImpl  {

	@Autowired
	ComplaintRepository complaintRepository;
	//@Override
	public List<Complaints> fetchAllComplaints() {
		return (List<Complaints>) complaintRepository.findAll();
	}

//	@Override
	public void saveComplaint(Complaints complaint) {
		complaintRepository.save(complaint);
		
	}

//	@Override
	public Complaints findComplaintById(int ticketId) {
		Complaints complaint = complaintRepository.findById(ticketId).orElse(null);
		return complaint;
	}

//	@Override
	public void deleteComplaint(Complaints complaint) {
		complaintRepository.delete(complaint);
		
	}

//	@Override
	public List<Complaints> findComplaintByEmail(String customerEmail) {
		return complaintRepository.findComplaintByCustomerEmail(customerEmail);
	}


}
