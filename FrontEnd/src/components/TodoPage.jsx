import { allTodo, create, delTodo } from "../api/index";
import "../App.css";
import EditCard from "./editCard"
import { useEffect, useState } from "react";

function TodoPage() {
  const [todos, setTodos] = useState([]);
  const [titleValue, setTitleValue] = useState("");
  const [taskValue, setTaskValue] = useState("");
  const [showEditById, setShowEditById] = useState(null);

  const data = {
    title: titleValue,
    task: taskValue,
  };

  const editCard = (id) => {
    setShowEditById(id);
  };

  const toggle = (id) => {
    if (id === showEditById) {
      setShowEditById(null);
    } else {
      setShowEditById(id);
    }
  };

  const fetchTodo = async () => {
    const savedData = await allTodo();
    setTodos(savedData);
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6">
      {/* Header */}
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">
        Todo App
      </h1>

      {/* Form Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 mb-10">
        <form>
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Title */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold text-gray-600 mb-1">
                Title
              </label>
              <input
                onChange={(e) => setTitleValue(e.target.value)}
                value={titleValue}
                placeholder="Enter title..."
                className="border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none px-3 py-2 rounded-lg transition"
              />
            </div>

            {/* Task */}
            <div className="flex flex-col w-full">
              <label className="text-sm font-semibold text-gray-600 mb-1">
                Task
              </label>
              <input
                onChange={(e) => setTaskValue(e.target.value)}
                value={taskValue}
                placeholder="Enter task..."
                className="border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 outline-none px-3 py-2 rounded-lg transition"
              />
            </div>

            {/* Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                create(data);
              }}
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>

      {/* Table */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gray-900 text-white text-xs uppercase tracking-wider">
              <th className="px-6 py-3 text-left">Title</th>
              <th className="px-6 py-3 text-left">Task</th>
              <th className="px-6 py-3 text-left">Edit</th>
              <th className="px-6 py-3 text-left">Delete</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo) => (
              <tr
                key={todo._id}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 font-medium text-gray-700">
                  {todo.title}
                </td>

                <td className="px-6 py-4 text-gray-600">{todo.task}</td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      editCard(todo._id);
                      toggle(todo._id);
                    }}
                    className="text-blue-600 hover:text-blue-800 font-semibold"
                  >
                    Edit
                  </button>

                  {showEditById === todo._id && (
                    <EditCard
                      title={todo.title}
                      task={todo.task}
                      todoId={todo._id}
                      toggle={() => setShowEditById(null)}
                    />
                  )}
                </td>

                <td className="px-6 py-4">
                  <button
                    onClick={() => {
                      delTodo(todo._id);
                      setTodos(
                        todos.filter((e) => e._id !== todo._id)
                      );
                    }}
                    className="text-red-600 hover:text-red-800 font-semibold"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TodoPage