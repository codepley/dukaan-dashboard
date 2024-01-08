import Dashboard from "./components/Dashboard"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"


function App() {
  return (
    <div className="relative bg-black-98 w-full h-[92.63rem] text-left text-[1.25rem] text-black-12 font-caption-regular">
      <Navbar />
      <Dashboard />
      <Sidebar />
    </div>
  )
}

export default App
