// import React, {useEffect, useState} from "react";

// const YearSelector = ({userMake, userYear, setUserYear}) => {
//     const [resYears, setResYears] = useState([]);
//     useEffect(()=>{
//         if (userMake) {
//           fetch(`http://localhost:3001/years?make=${userMake}`)
//           .then( r => r.json() )
//           .then(data => setResYears(data["years"]))
//         }
//       },[userMake])
//         function handleSelectYear(value) {
//         // console.log(`Selected Year: ${value}`)
//         setUserYear(prev => prev = value)
//         }
//   return (
//     <>
//       <label>Select Year:</label>
//       <select onChange={(e) => handleSelectYear(e.target.value)}>
//         {resYears.map((year, idx) => {
//           return (
//             <option key={`yearoption-${idx}`} value={year}>
//               {year}
//             </option>
//           );
//         })}
//       </select>
//     </>
//   );
// };

// export default YearSelector;
import React, { useEffect, useState } from "react";

const YearSelector = ({ userMake, userYear, setUserYear }) => {
  const [resYears, setResYears] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userMake) {
      fetch(`http://localhost:3001/years?make=${userMake}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setResYears(data["years"]))
        .catch((error) => {
          console.error("Error fetching years:", error);
          setError("Error fetching years. Please try again later.");
        });
    }
  }, [userMake]);

  function handleSelectYear(value) {
    setUserYear((prev) => (prev = value));
  }

  return (
    <>
      {error ? (
        <div style={{ color: "red" }}>{error}</div>
      ) : (
        <>
          <label>Select Year:</label>
          <select onChange={(e) => handleSelectYear(e.target.value)}>
            {resYears.map((year, idx) => {
              return (
                <option key={`yearoption-${idx}`} value={year}>
                  {year}
                </option>
              );
            })}
          </select>
        </>
      )}
    </>
  );
};

export default YearSelector;
