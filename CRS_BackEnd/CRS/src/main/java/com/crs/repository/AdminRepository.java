package com.crs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crs.model.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {

}
