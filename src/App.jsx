import { useState } from "react"

const App = () => {
  console.log(localStorage.getItem("logs"));
  const [logs, setLogs] = useState(JSON.parse(localStorage.getItem("logs")) || []);

  const handleLog = () => {
    const now = new Date().toLocaleString();
    const newLogs = [...logs, now]
    localStorage.setItem("logs", JSON.stringify(newLogs));
    setLogs(newLogs)
  }

  const clearLog = () => {
    localStorage.removeItem("logs");
    setLogs([]);
  }

  console.log(logs)

  return (
    <>
      <div className="flex flex-col h-screen">
        <div className="flex flex-col flex-1/3 bg-gray-300 items-center justify-center">
          <button 
            className="h-3/5 w-4/5 bg-yellow-200"
            onClick={handleLog}
          >
            Tap to Log
          </button>
          <button onClick={() => clearLog()}>
            Tap to Clear
          </button>
        </div>
        <div className="flex overflow-auto flex-col flex-2/3">
          {
            logs.map((log, i) => (
              <div key = {i}>{log}</div>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default App
