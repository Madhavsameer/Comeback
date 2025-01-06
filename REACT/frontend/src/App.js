import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '' });
  const [selectedBook, setSelectedBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ content: '', reviewer: '' });

  useEffect(() => {
    axios
      .get('http://localhost:8080/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  useEffect(() => {
    if (selectedBook) {
      axios
        .get(`http://localhost:8080/reviews/${selectedBook.id}`)
        .then((response) => setReviews(response.data))
        .catch((error) => console.error('Error fetching reviews:', error));
    }
  }, [selectedBook]);

  const addBook = () => {
    axios
      .post('http://localhost:8080/books', newBook)
      .then((response) => {
        setBooks([...books, response.data]);
        setNewBook({ title: '', author: '' });
      })
      .catch((error) => console.error('Error adding book:', error));
  };

  const addReview = () => {
    if (!selectedBook) return;

    const reviewData = { ...newReview, bookId: selectedBook.id };
    axios
      .post('http://localhost:8080/reviews', reviewData)
      .then((response) => {
        setReviews([...reviews, response.data]);
        setNewReview({ content: '', reviewer: '' });
      })
      .catch((error) => console.error('Error adding review:', error));
  };

  return (
    <div className="app">
      <h1>Bookstore</h1>

      <div className="book-form">
        <h2>Add New Book</h2>
        <input
          type="text"
          placeholder="Title"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Author"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <button onClick={addBook}>Add Book</button>
      </div>

      <div className="book-list">
        <h2>Book List</h2>
        {books.length > 0 ? (
          <ul>
            {books.map((book) => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}{' '}
                <button onClick={() => setSelectedBook(book)}>View Reviews</button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No books available.</p>
        )}
      </div>

      {selectedBook && (
        <div className="review-section">
          <h2>Reviews for "{selectedBook.title}"</h2>
          {reviews.length > 0 ? (
            <ul>
              {reviews.map((review) => (
                <li key={review.id}>
                  <strong>{review.reviewer}</strong>: {review.content}
                </li>
              ))}
            </ul>
          ) : (
            <p>No reviews available.</p>
          )}

          <div className="review-form">
            <h3>Add a Review</h3>
            <input
              type="text"
              placeholder="Content"
              value={newReview.content}
              onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
            />
            <input
              type="text"
              placeholder="Reviewer"
              value={newReview.reviewer}
              onChange={(e) => setNewReview({ ...newReview, reviewer: e.target.value })}
            />
            <button onClick={addReview}>Add Review</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
