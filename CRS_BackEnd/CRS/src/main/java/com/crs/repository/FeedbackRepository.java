package com.crs.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crs.model.Feedbacks;



public interface FeedbackRepository extends JpaRepository<Feedbacks, Integer> {

}
