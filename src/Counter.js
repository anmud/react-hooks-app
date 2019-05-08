import React, {useEffect} from 'react';


const Counter = (props) => {
 

useEffect(() => {
  console.log(`I am inside the useEffect function. I will only run upon mounting. The current count is ${props.count}`)

  return () => {
    console.log('I am removing anything that was setup above. But now I will only run when component is being unmounted.')
  }
}, [props.count])

  return (
    <div>
     
      <h1 style={{color: props.color}}>{props.count}</h1>
      <button onClick={()=>props.increaseCount({count: props.count, setCount: props.setCount}) }>Increase</button>
      <button onClick={() =>props.decreaseCount({count: props.count, setCount: props.setCount})}>Decrease</button>
      <button onClick={() =>props.resetCount({count: props.count, setCount: props.setCount})}>Reset</button>
      <br/>
      <button onClick={() => props.handleColorChange({color: props.color, setColor: props.setColor})}>Change color</button>
      
    </div>
  );
}

export default Counter;
