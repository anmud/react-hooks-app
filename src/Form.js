import React, {useState, useEffect} from 'react';


const Form = (props) => {
  


  return (
    <div>
     
      {/* <form>
        <div>
          <input type="text"
          placeholder="City"
          value={address.city}
          name="city" 
          onChange={handleCityChange}
          />
        </div>

        <div>
          <input type="text"
          placeholder="Country"
          value={address.country}
          name="country" 
          onChange={handleCountryChange}
          />
        </div>
      </form>
      <div>
        You live in {`${address.city}, ${address.country}`}
      </div>
      <br/> */}
     
       <form>
        <div>
          <input type="text"
          placeholder="City"
          value={props.city}
          name="city" 
          onChange={props.handleCityChange}
          />
        </div>

        <div>
          <input type="text"
          placeholder="Country"
          value={props.country}
          name="country" 
          onChange={props.handleCountryChange}
          />
        </div>
      </form>
      <div>
        You live in {`${props.city}, ${props.country}`}
      </div>
      <br/>
    </div>
  );
}

export default Form;
