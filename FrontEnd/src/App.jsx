import { allTodo, create } from "./api/index";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [taskValue, setTaskValue] = useState("");
  const data = {
    title: titleValue,
    task: taskValue,
  };
  console.log(data);

  const fetchTodo = async () => {
    const savedData = await allTodo();
    setTodos(savedData);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <>
      <p className="text-center text-4xl font-mono font-bold m-5">
        This is Todo App
      </p>
      <nav>
        <form>
          <div className="flex justify-center gap-15 my-6">
            <div className="flex gap-x-7 ">
              <h3 className="font-mono font-bold text-2xl ">Title</h3>

              <input
                onChange={(e) => setTitleValue(e.target.value)}
                className="tilte border-2 border-gray-700 focus:border-pink-600 px-3 py-1"
                placeholder="Type here ..."
                value={titleValue}
              />
            </div>
            <div className="flex gap-x-7 ">
              <h3 className="font-mono font-bold  text-2xl">Task</h3>
              <input
                onChange={(e) => setTaskValue(e.target.value)}
                className="task border-2 border-gray-700 focus:border-pink-600 px-3 py-1 "
                placeholder="Type here ..."
                value={taskValue}
              />
            </div>
            <button
              onSubmit={create()}
              className="bg-gray-500 hover:bg-gray-600 text-white font-semibold px-2 rounded-lg shadow-md transition duration-200"
            >
              Add
            </button>
          </div>
        </form>
      </nav>

      <main>
        <div className="py-6">
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-black">
                  <th className="px-4 py-3 text-left font-medium text-xs tracking-widest uppercase text-white">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-xs tracking-widest uppercase text-white">
                    Task
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-xs tracking-widest uppercase text-white">
                    Update
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-xs tracking-widest uppercase text-white">
                    Delete
                  </th>
                </tr>
              </thead>

              <tbody>
                {todos.map((todo) => (
                  <tr
                    key={todo._id} // or todo.id
                    className="border-t border-gray-100"
                  >
                    <td className="px-4 py-3.5 text-gray-600 font-medium">
                      {todo.title}
                    </td>

                    <td className="px-4 py-3.5 text-black font-medium">
                      {todo.task}
                    </td>

                    <td className="px-4 py-3.5 text-blue-600 font-bold">
                      <button>Edit</button>
                    </td>

                    <td className="px-4 py-3.5 text-red-600 font-bold">
                      <button>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
