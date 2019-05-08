import React, {useContext} from 'react';
import {NameContext} from './App'


const Button = () => {
 const name = useContext(NameContext)
  return (
    <div>
   
    <button>{name.name}</button>
      
    </div>
  );
}

export default Button;