import React, { useState } from 'react';

const App = () => {

  const [fullName, setFullName] = useState({
    fname : '',
    lname : '',
  }
  
  );

//to display name after hello
  const onSubmit = (event) => {
    event.preventDefault();
    alert('form submitted');
  };

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);

    const value = event.target.value;
    const name = event.target.name;

    setFullName((preValue) => {
      //console.log(preValue);
      if(name === 'fname'){
        return{
          fname: value,
          lname: preValue.lname,
        };
      }

      else if(name === 'lname'){
        return{
          fname: preValue.fname,
          lname: value,
        };
      }

    });

  };

return(
<>
<div className="main_div">
<form onSubmit={onSubmit}>
<div>
  <h1> 
    Hello {fullName.fname} {fullName.lname} 
  </h1>
  <input type='text' placeholder='enter your name' 
  name="fName"
  onChange={inputEvent} 
  value={fullName.fname}
  />
  <br />
  <input type='text' placeholder='enter your lastName' 
  name="lName"
  onChange={inputEvent} 
  //value={fullName.lname}
  />
  <button type="submit" >Click Me</button>
  </div>
  </form>
  
</div>

</>
);
};

export default App;