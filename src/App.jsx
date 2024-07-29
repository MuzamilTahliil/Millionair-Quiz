import React from 'react'
import Login from './page/Login'
import Home from './page/Home'
import About from './page/About'
import Contact from './page/Contact'
import { Route, Routes } from 'react-router-dom'
import QuizPage from './page/QuizPage'
import NotFound from './components/NotFound'

function App() {
  return(
    <div>
     {/* Routes */}
     
     <Routes>
      <Route path='/' element={< Home />} />
      <Route path='/quiz' element={<QuizPage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/About/' element={< About />} />
      <Route path='*' element={<NotFound />} />
     </Routes>
    </div>
  )
}
export default App
