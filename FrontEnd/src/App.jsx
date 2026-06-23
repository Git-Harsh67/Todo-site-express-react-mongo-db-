
import { useState } from "react";
import "./App.css";
import Sign_LoginPage from "./components/sign_LoginPage.jsx";
import TodoPage from "./components/TodoPage.jsx";


function App() {

  const[todoPage , setTodoPage]= useState(false)
  const[authPage , setAuthPage]= useState(true)

  const switchToTodo = () =>{
    setTodoPage(true)
    setAuthPage(false)
  }
    const switchToLogin = () =>{
    setTodoPage(false)
    setAuthPage(true)
  }

  return (
<>
{authPage === true && <Sign_LoginPage ToAuthPage = {switchToTodo} /> } 


{todoPage === true && <TodoPage toLogin = {switchToLogin} /> }

</>
  );
}

export default App;
