import "./App.css";

function App() {
  return (
    <>
      <p className="text-center text-4xl font-mono font-bold m-5">
        This is Todo App
      </p>
      <nav>
        <form>
          <div className="flex justify-center gap-15 ">
            <div className="flex gap-x-7 my-6">
              <h3 className="font-mono font-bold text-2xl ">Title</h3>

              <input
                class="border-2 border-gray-700 focus:border-pink-600 px-3 py-1"
                placeholder="Type here ..."
              />
            </div>
            <div className="flex gap-x-7 my-6">
              <h3 className="font-mono font-bold  text-2xl">Task</h3>
              <input
                class="border-2 border-gray-700 focus:border-pink-600 px-3 py-1 "
                placeholder="Type here ..."
              />
            </div>
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
                    Song
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-xs tracking-widest uppercase text-white">
                    Artist
                  </th>
                  <th className="px-4 py-3 text-left font-medium text-xs tracking-widest uppercase text-white">
                    Year
                  </th>
                </tr>
              </thead>
              <tbody>
                
                  <tr
                    
                    className={`border-t border-gray-100 `}
                  >
                    <td className="px-4 py-3.5 text-black font-medium">
                     sdfgjhsd
                    </td>
                    <td className="px-4 py-3.5 text-gray-500">sdfsaf</td>
                  </tr>
                  
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
