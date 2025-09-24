import { useState } from 'react'
import axios from "axios"
import { useNavigate, Link } from 'react-router-dom'

function Register() {
  const [user, setUser] = useState("")
  const [pwd, setPwd] = useState("")
  const navigate = useNavigate()

  function registerUser() {
    if (!user || !pwd) {
      alert("Please fill all fields")
      return
    }

    axios.post("https://netflix-backend-7kj9.onrender.com/register", {
      username: user,
      password: pwd
    }).then((res) => {
      if (res.data === true) {
        alert("Registered successfully!")
        navigate("/")
      } else {
        alert("Registration failed.")
      }
    })
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://wallpapers.com/images/hd/netflix-background-gs7hjuwvv2g0e9fj.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>
       <div className="relative z-10 bg-black bg-opacity-80 text-white w-full max-w-md p-10 rounded-md shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Register</h2>

        <input
          type="text"
          placeholder="Email or phone"
          onChange={(e) => setUser(e.target.value)}
          className="w-full p-2 mb-4 bg-[#333] text-white rounded"
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPwd(e.target.value)}
          className="w-full p-2 mb-4 bg-[#333] text-white rounded"
        />

        <button
          onClick={registerUser}
          className="bg-red-600 hover:bg-red-700 w-full py-2 rounded font-semibold"
        >
          Register
        </button>

        <p className="mt-4 text-sm">
          Already have an account?{" "}
          <Link to="/" className="text-blue-500 underline">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Register
