import React,{useState,useRef} from "react";

// const LoginForm=({data,setPassCheck,setEmailCheck})=>{
const LoginForm=({data,setEmailCheck})=>{
  let emailRef= useRef("");
  let passRef= useRef("");

  let [passErr,setPassErr]= useState(false);

  function handleSubmit(e){
    e.preventDefault();
    let flag=false;
    data.forEach(obj=>{
      if(obj.email===emailRef.current.value.trim() && obj.password===passRef.current.value.trim()){
        setTimeout(()=>{console.log(obj)},3000);
        flag=true;
      }
      else if(obj.email===emailRef.current.value.trim() && obj.password!==passRef.current.value.trim()){
        setTimeout(()=>{console.log("Password incorrect")},3000);
        // setPassCheck(true);
        setPassErr(true);
        setEmailCheck(true);
        flag=true;
      }
    })

    if(!flag){
      setEmailCheck(true);
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >Email:</label>
        <input type="email" ref={emailRef} id="input-email"></input>
        <br/>
        <label >Password:</label>
        <input type="password" ref={passRef} id="input-password"></input>
        <br/>
        {passErr && <p>Password incorrect</p>}
        <button id="submit-form-btn">Submit</button>
      </form>
    </div>
  )
}
export default LoginForm;