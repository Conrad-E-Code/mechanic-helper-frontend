import React, {useEffect, useState} from 'react'

const MakeSelector = ({userMake, setUserMake}) => {

    const [makes, setMakes] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
          try {
            const response = await fetch("http://localhost:3001/makes");
    
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
      useEffect(() => {
        console.log(userMake)
      }, [userMake])

      async function handleSelectMake (value) {
        
        setUserMake(prev => prev = value)
      }
  return (
    <>
            <label>Select Make:</label>
        <select onChange={e => handleSelectMake(e.target.value)}>
          {makes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </select>
    </>
  )
}

export default MakeSelector