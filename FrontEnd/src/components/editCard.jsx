const EditCard = () =>{

return (
    <div className="max-w-sm w-full bg-white shadow-lg rounded-2xl p-5 space-y-4 border">

      {/* Title Input */}
      <input
        type="text"
        placeholder="Enter title"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Task Input */}
      <textarea
        type="text"
        placeholder="Enter task"
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />

      {/* Button */}
      <button
        className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition duration-200"
      >
        Update
      </button>

    </div>
  );
}

export default EditCard;
// export default myFunction;