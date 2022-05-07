package com.crs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.crs.model.Feedbacks;
import com.crs.repository.FeedbackRepository;


@Service
public class FeedbackServiceImpl implements FeedbackService {

	@Autowired
	FeedbackRepository feedbackRepository;
	
	@Override
	public List<Feedbacks> fetchAllFeedbacks() {
		return feedbackRepository.findAll();
	}

	@Override
	public void saveFeedback(Feedbacks feedback) {
		feedbackRepository.save(feedback);
		
	}

	public Feedbacks findFeedbackById(int feedbackId) {
		Feedbacks feedback = feedbackRepository.findById(feedbackId).orElse(null);
		return feedback;
	}

	public void deleteFeedback(Feedbacks feedback) {
		feedbackRepository.delete(feedback);
		
	}

}
