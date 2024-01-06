import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = () => {
 const [data, setData] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data.json');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
 }, []);

 return (
    <div>
      <h2>MERN Web Page</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            {item.name}, {item.age} years old
          </li>
        ))}
      </ul>
    </div>
 );
};

export default FetchData;