package com.crs.service;
import java.util.List;

import com.crs.model.Feedbacks;


public interface FeedbackService {
	List<Feedbacks> fetchAllFeedbacks();
	void saveFeedback (Feedbacks feedback);
	

}
