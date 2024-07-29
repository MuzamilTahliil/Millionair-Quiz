import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import QuizPage from './pages/QuizPage'
import NotFound from './components/NotFound'

function App() {
  return(
    <div>
     {/* Routes */}
     
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/quiz' element={<QuizPage />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/About/' element={<About />} />
      <Route path='*' element={<NotFound />} />
     </Routes>
    </div>
  )
}
export default App
