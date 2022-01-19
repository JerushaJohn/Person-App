import React, { useState } from "react";

function Display(props) {
  // const [displays,setdisplays] = useState([{name:"sachin",age:22}]);
  const { displays } = props;
  return (
    <div className="display">

<h1> Person details</h1>            

        <h2>
        Name:{displays.name}  </h2>
        <h2>
        Age:{displays.age}
        </h2>

      
    </div>
  );
}

export default Display;
