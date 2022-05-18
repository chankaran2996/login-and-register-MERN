import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [passwoard,setPassword]=useState('')
  const registerUser = async (event)=>{
    event.preventDefault()
    const responce = await fetch('http://localhost:5000/api/register',{
      method:'POST',
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify({
        name,
        email,
        passwoard
      })
    })
    const data = await responce.json();
    console.log(data)
  }
  return (
    <div className="App">
      {/* <i className="fa-solid fa-browser" /> */}
      <div class="fa-3x">
      <i class="fa-duotone fa-camera"></i>
      <i class="fa-duotone fa-fire-alt"></i>
      </div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input 
        value={name}
        onChange = {(e)=>setName(e.target.value)}
        type="text" 
        placeholder="Name"
        />
        <br/>
        <input
        value={email}
        onChange = {(e)=>setEmail(e.target.value)} 
        type="email" 
        placeholder="Email"/>
        <br/>
        <input
        value={passwoard}
        onChange = {(e)=>setPassword(e.target.value)} 
        type="password" 
        placeholder="password"/>
        <br/>
        <input type="submit" value="Register"/>
        <br/>
      </form>
    </div>
  );
}

export default App;
