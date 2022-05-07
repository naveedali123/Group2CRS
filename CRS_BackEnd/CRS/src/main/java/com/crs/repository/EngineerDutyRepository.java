package com.crs.repository;

import java.util.List;


import org.springframework.data.repository.CrudRepository;

import com.crs.model.EngineerDuty;



public interface EngineerDutyRepository  extends CrudRepository<EngineerDuty, Integer> {

	List<EngineerDuty> findEngineerDutyByEngineerEmail(String engineerEmail);

	EngineerDuty findEngineerDutyByTicketId(int ticketId);

}
