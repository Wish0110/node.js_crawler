import React, { useState, useEffect } from 'react';

function App() {
  const [books, setBooks] = useState([]); // State to store fetched books

  useEffect(() => {
    fetch('/crawled_data')
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
