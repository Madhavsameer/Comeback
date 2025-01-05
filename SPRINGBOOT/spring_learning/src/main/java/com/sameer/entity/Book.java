package com.sameer.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
//mysql model
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String author;
}