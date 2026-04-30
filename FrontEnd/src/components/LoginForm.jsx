import { useState } from "react";
import "../App.css";
import { login } from "../api/auth";

function Login() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const userDetails = {
    email ,
    password 
  }

  return (
    <div className="w-1/2 p-8 flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Login</h2>

      {/* LOGIN FORM */}
      <div className="flex flex-col gap-4">
        <input
         onChange={(e)=>setEmail(e.target.value)}
         value={email}
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
         onChange={(e)=>setPassword(e.target.value)}
         value={password}
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

      <button onClick={(e)=>{
        e.preventDefault()
        login(userDetails)
        setEmail("")
        setPassword("")
      }} className="bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition">
          Login
        </button>
      </div>

      {/* SWITCH TEXT */}
      <p className="text-sm mt-6 text-gray-600 text-center">
        Don’t have an account?
      </p>

      <button className="mt-2 border border-blue-500 text-blue-500 py-2 rounded-lg hover:bg-blue-50 transition">
        Sign Up
      </button>
    </div>
  );
}

export default Login;
