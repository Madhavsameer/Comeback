package com.sameer.entity;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

//mongo model
@Document(collection = "reviews")
@Data
public class Review {
    @Id
    private String id;
    private String bookId;
    private String content;
    private String reviewer;
}