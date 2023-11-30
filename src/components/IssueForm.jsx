import React, { useState, useEffect } from "react";
import MakeSelector from "./MakeSelector";
import YearSelector from "./YearSelector";
import YearmodelSelector from "./YearmodelSelector";

const IssueForm = () => {
  const [userMake, setUserMake] = useState();
  const [userYear, setUserYear] = useState();





  return (
    <div>
      <form>
        <MakeSelector userMake={userMake} setUserMake={setUserMake}/>
        {userMake? <div>Selected: {userMake}</div> : null}
        {userMake? <YearSelector userYear={userYear} setUserYear={setUserYear} userMake={userMake} />: null}
        {userYear? <div> Selected: {userYear}</div> : null}
        {userYear? <YearmodelSelector userYear={userYear} userMake={userMake} />: null}
        
      </form>
    </div>
  );
};

export default IssueForm;
