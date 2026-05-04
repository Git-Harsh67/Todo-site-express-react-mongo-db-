
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

  return (
<>
{authPage === true && <Sign_LoginPage switchToTodo = {switchToTodo} /> } 

{todoPage === true && <TodoPage /> }

</>
  );
}

export default App;
