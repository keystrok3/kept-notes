import { Outlet, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NewNote from "./pages/NewNote"


function App() {

  return (
   <>
    <Outlet />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/newnote" element={ <NewNote />} />
    </Routes>
   </>
  )
}

export default App
