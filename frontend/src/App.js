import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios

function App() {
  const [books, setBooks] = useState([]); // State to store fetched books
  const [isLoading, setIsLoading] = useState(true); // State to track loading state
  const [error, setError] = useState(null); // State to store any errors

  useEffect(() => {
    setIsLoading(true); // Set loading state to true
    setError(); // Clear any previous errors

    const fetchBooks = async () => {
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors
    
      try {
        const response = await axios.get('http://localhost:3001/crawled_data');
    
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
    
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
        setError(error);
      } finally {
        setIsLoading(false); // Set loading state to false
      }
    };
    
  }, []);

  return (
    <div>
      {isLoading && <p>Loading books...</p>}
      {error && <p>Error: {error.message}</p>}
      {books.length > 0 && (
        <ul id="books-list">
          {books.map(book => (
            <li key={book.id}>{book.title} - {book.price}</li>
          ))}
        </ul>
      )}
      {!isLoading && !error && books.length === 0 && <p>No books found.</p>}
    </div>
  );
}

export default App;
