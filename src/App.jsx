import { useState } from 'react'

import './App.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom'




function App() {
  const [user, setUser]=useState("")
  const [pwd,setPwd]=useState("")

  const navigate= useNavigate()

  function handleUser(e){
    setUser(e.target.value)

  }

  function handlePwd(e){
    setPwd(e.target.value)

  }

  function check(){

     if (!user || !pwd) {
    alert("Please fill in both email address/phone number and password.");
    return; // Stop further execution
  }

    var loginDetails= axios.get(`http://localhost:5000/login?username=${user}&password=${pwd}`)
    loginDetails.then(function(data){
      console.log(data.data)
      if(data.data===true){
       navigate('/success')
      }else{
       navigate('/fail')
      }
    })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
      alt="Background"
      className="w-full h-full object-cover"
    />
    {/* Dark overlay */}
    <div className="absolute inset-0 "></div>
  </div>

  {/* Login Box */}
  <div className="relative z-10 bg-black bg-opacity-80 text-white w-full max-w-md p-10 rounded-md shadow-lg">
    <h1 className="text-3xl font-bold mb-6">Sign In</h1>

    <input
      type="text"
      name="username"
      placeholder="Email or phone number"
      onChange={handleUser}
      required
      className="bg-[#333] text-white w-full p-3 mb-4 rounded outline-none placeholder-gray-400"
    />

    <input type="password" name="password" placeholder="Password" onChange={handlePwd}
     className="bg-[#333] text-white w-full p-3 mb-6 rounded outline-none placeholder-gray-400"/>

    <button
      onClick={check}
      className="bg-red-600 hover:bg-red-700 text-white font-bold w-full py-3 rounded"
    >
      Sign In
    </button>

    

    </div>
  </div>


  )
}



export default App
