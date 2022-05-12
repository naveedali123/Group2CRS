package com.crs.controller;

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

import com.crs.model.Complaints;
import com.crs.repository.ComplaintRepository;
import com.crs.service.ComplaintServiceImpl;

@CrossOrigin("*")
@RestController
@RequestMapping(path="/complaints")
public class ComplaintsController {
	

	@Autowired
	ComplaintServiceImpl complaintServiceImpl;
	
	@Autowired
	ComplaintRepository complaintRepository;

	@GetMapping("/getAllComplaints")
	public List<Complaints> getAllComplaints(){
		List<Complaints> complaints = (List<Complaints>) complaintRepository.findAll();
		return complaints;
	}
	
	@GetMapping("/getAllComplaintsByEmail/{customerEmail}")
	public List<Complaints> getAllComplaintsByEmail(@PathVariable("customerEmail") String customerEmail){
		System.out.println("inside complaints controller -- "+customerEmail);
		
		List<Complaints> complaints = (List<Complaints>) complaintServiceImpl.findComplaintByEmail(customerEmail);
		return (List<Complaints>) complaints;
	}
	
	
	@PostMapping(path = "/addComplaint")
	public @ResponseBody void addComplaint(@RequestBody Complaints complaint) {
		complaintServiceImpl.saveComplaint(complaint);
		
	}
	
	@DeleteMapping("/deleteComplaintById/{ticketId}")
	public @ResponseBody void deleteComplaintById(@PathVariable("ticketId") int ticketId) {
		Complaints complaint =complaintServiceImpl.findComplaintById(ticketId);
		complaintServiceImpl.deleteComplaint(complaint);
		
	}
	
	@GetMapping("/getByengineerEmail/{engineerEmail}")
    public List<Complaints> getByengineerEmail(@PathVariable("engineerEmail") String engineerEmail){
        System.out.println("inside complaints controller -- "+engineerEmail);
        List<Complaints> complaints = (List<Complaints>)  complaintRepository.findByEngineerEmail(engineerEmail);
        return (List<Complaints>) complaints;
    }

}
