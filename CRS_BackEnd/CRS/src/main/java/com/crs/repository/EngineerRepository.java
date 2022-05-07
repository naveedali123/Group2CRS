package com.crs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crs.model.Engineers;



public interface EngineerRepository extends JpaRepository<Engineers, String> {

}
