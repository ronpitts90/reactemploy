import React from "react";

function Row(props) {
  return (
    <div className="row">
      <div class="mr-3">
        Profile: {props.image}
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
