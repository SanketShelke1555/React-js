import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./components/Home"
import Card from "./components/Card"
import Count from "./components/Count"






function App() {
  return (
    <>
      <BrowserRouter>

        <NavBar/>

        <Routes>

          <Route path="/" element={<Home/>} />
          <Route path="/card" element={<Card/>} />
          <Route path="/count" element={<Count/>} />


        </Routes>


      </BrowserRouter>
    </>
  )
}

export default App