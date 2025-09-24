import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login"
import Register from "./Register"
import Success from "./Success"
import Fail from "./Fail"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
        <Route path="/fail" element={<Fail />} />
      </Routes>
    </Router>
  )
}

export default App
