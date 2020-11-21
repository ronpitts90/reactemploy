import React from "react";
// style row and sort 

function Row(props) {
  return (
    <div className="row">
      <div className="mr-3">
        Profile: <img src={props.image} alt="firstname"/>
      </div>
      <div>
        First Name: {props.firstName}
      </div>
      <div>
        Last Name: {props.lastName}
      </div>
    </div>
    
  );
}

export default Row;
