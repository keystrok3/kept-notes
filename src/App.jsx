import { Outlet, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import NewNote from "./pages/NewNote"
import EditNote from "./pages/EditNote"


function App() {

  return (
   <>
    <Outlet />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/newnote" element={ <NewNote />} />
      <Route path="/editnote/:id" element={ <EditNote />} />
    </Routes>
   </>
  )
}

export default App
