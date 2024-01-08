import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('http://localhost:3001/crawled_data');
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading && <p>Loading data...</p>}
      {error && <p>Error: {error.message}</p>}
      {data.length > 0 && (
        <ul>
          {data.map((item) => (
            <li key={item.title}>
              <h2>{item.title}</h2>
              <p>Price: {item.price}</p>
              <p>Availability: {item.availability}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
