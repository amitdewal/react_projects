import { useState } from 'react'
import validator from 'validator';
import './App.css'

function App() {
  const [errorMessage, setErrorMessage] = useState("");
  const[color, setColor] = useState("red");

  function validatie(password){
    if(validator.isStrongPassword(password,{
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })){
      // console.log(password);
      setErrorMessage("is Strong password");
      setColor("green");
      return

    }else{
        console.log("is not Strong password");
        setErrorMessage("is not Strong password");
        setColor("red");
        return
        
    }
    
  }

  return (
    <div style={{marginLeft:'200px'}}>
       <pre>
        <h2>Checking Password Strength in ReactJS</h2>
       <span>Enter Password: </span>
       <input type="text" onChange={(e)=> validatie(e.target.value)} /> <br />

       { errorMessage === '' ? null :  <span style={{fontWeight:'bold', color:color}}
       >{errorMessage}</span>

       }
       
       </pre>
    </div>
  )
}

export default App
