import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Boss from './components/Boss'
import Manager from './components/Manager'
import Emp from './components/Emp'
import LoginForm from './components/LoginForm'

function App() {
  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<LoginForm />} />
          <Route path='/boss' element={<Boss />} />
          <Route path='/manager' element={<Manager />} />
          <Route path='/emp' element={<Emp />} />


        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App