import React, { useEffect, useState } from 'react';

const YearmodelSelector = ({ userYear, userMake }) => {
  const [resYearmodels, setResYearmodels] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchYearmodels = async () => {
      try {
        if (userYear && userMake) {
          const response = await fetch(`http://localhost:3001/vehicles?year=${userYear}&make=${userMake}`);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setResYearmodels( prev => prev = data);
        }
      } catch (error) {
        console.error('Error fetching year models:', error);
        setError('Error fetching year models. Please try again later.');
      }
    };

    fetchYearmodels();
  }, [userYear, userMake]);

  return (
    <div>
      {error ? (
        <div style={{ color: 'red' }}>{error}</div>
      ) : (
        <>
          <label>Select Year Model:</label>
          <select onChange={(e) => {handleSelectYrModel(e.target.value)}} >
            {resYearmodels? console.log(resYearmodels) : null}
            {resYearmodels? resYearmodels.map((yearmodel, idx) => (
              <option key={`yearmodeloption-${idx}`} value={yearmodel}>
                {yearmodel.model}
              </option>
            )): null}
          </select>
        </>
      )}
    </div>
  );
};

export default YearmodelSelector;
