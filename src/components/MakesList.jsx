// src/components/MakesList.jsx

import { useState, useEffect } from 'react';

const MakesList = () => {
  const [makes, setMakes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/makes');

        if (!response.ok) {
          throw new Error('Failed to fetch makes');
        }

        const data = await response.json();
        setMakes(data);
      } catch (error) {
        console.error('Error fetching makes:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Makes List</h2>
      <ul>
        {makes.map((make, index) => (
          <li key={index}>{make}</li>
        ))}
      </ul>
    </div>
  );
};

export default MakesList;
