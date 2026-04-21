import { useEffect, useState } from "react";
import { allTodo, update } from "../api";

const EditCard = (props) => {
  const [todos, setTodos] = useState([]);
  const [editTitleValue, setEditTitleValue] = useState(props.title);
  const [editTaskValue, setEditTaskValue] = useState(props.task);
  // const [toggle, setToggle] = useState(props.toggle);

  const fetchTodo = async () => {
    const savedData = await allTodo();
    setTodos(savedData);
  };

  const data = {
    title: editTitleValue,
    task: editTaskValue,
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl p-5 space-y-4 border">
      {/* Title Input */}
      <input
        onChange={(e) => setEditTitleValue(e.target.value)}
        type="text"
        placeholder="Enter title"
        value={editTitleValue}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Task Input */}
      <textarea
        onChange={(e) => setEditTaskValue(e.target.value)}
        type="text"
        placeholder="Enter task"
        value={editTaskValue}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Button */}
      <button
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
        onClick={() => {
          update(props.todoId, data);
          props.toggle()
        }}
      >
        Update
      </button>
    </div>
  );
};

export default EditCard;
// export default myFunction;
