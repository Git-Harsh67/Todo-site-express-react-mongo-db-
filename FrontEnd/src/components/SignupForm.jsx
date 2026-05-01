import { useState } from "react";
import "../App.css";
import { signUp } from "../api/auth";

function SignUp(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userDetails = {
    name,
    email,
    password,
  };

  return (
    <div className="w-1/2 p-8 flex flex-col justify-center">
      {/* SIGNUP FORM */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Sign Up</h2>

        <div className="flex flex-col gap-4">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            placeholder="Name"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            placeholder="Email"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            placeholder="Password"
            className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={async (e) => {
              e.preventDefault();
              try {
                const data = await signUp(userDetails);
                console.log("signUp completed: "+ data)
                setName("");
                setEmail("");
                setPassword("");

                props.toggle()
              } catch (error) {
                console.log("signUp error: "+ error)
              }

            }}
            className="bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
