import React, {useState, useEffect} from 'react';
import Counter from './Counter'
import Form from './Form'
import ActiveButton from './ActiveButton'

const App = () => {
  const [activated, setActivated]= useState(false)
  const [count, setCount] = useState(0)
  const [city, setCity] = useState('')
  const [country, setCountry] = useState('')
  // const [address, setAddress] = useState({
  //   city: '',
  //   country: '',
  // })
  const [visible, setVisible] = useState(false)
  const [color, setColor] = useState('red')


  const buttonText = activated ? "Active" : "Inactive"
  const onClick = () => setActivated(!activated)
  const increaseCount = ({count, setCount}) => setCount(count + 1)
  const decreaseCount = ({count, setCount}) => setCount(count - 1)
  const resetCount = ({count, setCount}) => setCount(0)
  const handleCityChange = event => setCity(event.target.value)
  const handleCountryChange = event =>  setCountry(event.target.value)
  const handleColorChange = () => {
     const nextColor = (color === "red") ? "gold" : "red"
     return setColor(nextColor)
  }

  
// const handleCityChange = (event) =>{
//   setAddress({
//     ...address, city: event.target.value
//   })
//   }
  
// const handleCountryChange = (event) => {
//   setAddress({
//     ...address, country: event.target.value
//   })
//   }


  return (
    <div>
      <h1>Welcome to the app</h1>
      <ActiveButton
      activated={activated}
      buttonText={buttonText}
      onClick={onClick}
      />
      
      <div>
      <button onClick={() => setVisible(!visible)}>
      
      Show / Hide the Counter Component
      
      </button>
      {visible && <Counter 
      count={count}
      setCount={setCount}
      increaseCount={increaseCount}
      decreaseCount={decreaseCount}
      resetCount={resetCount}
      color={color}
      setColor={setColor}
      handleColorChange={handleColorChange}
      />}
     </div>
     <br/>
      <br/>
      <hr/> 
      <Form
      city={city}
      country={country}
      handleCityChange={handleCityChange}
      handleCountryChange={handleCountryChange}
      />
      
    </div>
  );
}

export default App;
