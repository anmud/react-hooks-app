import React from 'react';

const ActiveButton = (props) => {
 
  return (
    <div>
     
      <button onClick={props.onClick}>{props.buttonText}</button>
      <br/>
      <br/>
      <hr/>
      <br/>
      
    </div>
  );
}

export default ActiveButton;
