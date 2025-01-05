package com.sameer.controller;

import com.sameer.entity.Review;
import com.sameer.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {

    @Autowired
    private ReviewRepository reviewRepository;

    @GetMapping("/{bookId}")
    public List<Review> getReviewsByBookId(@PathVariable String bookId) {
        return reviewRepository.findByBookId(bookId);
    }

    @PostMapping
    public Review addReview(@RequestBody Review review) {
        return reviewRepository.save(review);
    }
}