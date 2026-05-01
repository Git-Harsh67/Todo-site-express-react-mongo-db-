import { useState } from "react";
import "../App.css";
import Login from "./LoginForm";
import SignUp from "./SignupForm";

function Sign_LoginPage() {
  const [showLogin, setShowLogin] = useState(true);
  const [showsignUp, setShowSignUp] = useState(false);

  const changeTosignup = () => {setShowLogin(false), setShowSignUp(true)};
  const changeToLogin = () => {setShowLogin(true), setShowSignUp(false)};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex w-[900px] shadow-xl rounded-2xl overflow-hidden bg-white">
        {/* LEFT SIDE */}
        <div className="w-1/2 bg-blue-500 text-white flex flex-col justify-center items-center p-8">
          <img
            src="../src/imgs/clipboard.png"
            alt="todo"
            className="w-30 mb-6"
          />
          <h1 className="text-3xl font-bold mb-2">Stay Organized</h1>
          <p className="text-center text-md opacity-90">
            Manage your tasks efficiently.
          </p>
        </div>

        {/* RIGHT SIDE */}

      {showsignUp === true && <SignUp toggle={changeToLogin}  />}
        {showLogin === true && <Login toggle={ changeTosignup } />}
      </div>
    </div>
  );
}

export default Sign_LoginPage;
