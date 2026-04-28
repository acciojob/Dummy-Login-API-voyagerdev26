
import React,{useState} from "react";
import LoginForm from "./LoginForm";
 

const App = () => {

  let [emailCheck,setEmailCheck]=useState(false);
  let [passCheck,setPassCheck]=useState(false);

  let data= [
    {
        id: 1,
        name: "ABC",
        email: "abc@gmail.com",
        password: "12"
    },
    {
        id: 2,
        name: "DEF",
        email: "def@gmail.com",
        password: "1234"
    },
    {
        id: 3,
        name: "GHI",
        email: "ghi@gmail.com",
        password: "123456"
    }
 ]
  return (
    <div>
        <LoginForm data={data} setPassCheck={setPassCheck} setEmailCheck={setEmailCheck}/>
        {emailCheck && <p id="user-error">User not found</p>}
        {passCheck && <p id="password-error">Password Incorrect</p>}
    </div>
  )
}

export default App
