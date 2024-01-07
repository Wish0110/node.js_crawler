import React, { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]); // State to store fetched books

  useEffect(() => {
    fetch('http://localhost:6000/crawled_data') // Point to the backend URL with port 6000
      .then(response => response.json())
      .then(data => setBooks(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ul id="books-list">
      {books.map(book => (
        <li key={book.id}>{book.title} - {book.price}</li>
      ))}
    </ul>
  );
}

export default App; // Export as a default component
