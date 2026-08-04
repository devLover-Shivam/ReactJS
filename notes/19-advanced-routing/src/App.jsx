import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Product from './pages/Product'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Kids from './pages/Kids'
import Courses from './pages/Courses'
import {Route, Routes} from 'react-router-dom';
import NotFound from './pages/NotFound'
import CourseDetails from './pages/CourseDetails'

const App = () => {
  return (
    <div className='bg-black text-white h-screen w-full'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/courses/:id' element={<CourseDetails/>}/>{/* path='/courses/:id' iska matlab hua hum courses k baad kuch bhi likhenge url me to course details page khulega. */}
        <Route path='/product' element={<Product/>}>
          <Route path='men' element={<Men/>}/>
          <Route path='women' element={<Women/>}/>
          <Route path='kids' element={<Kids/>}/>
        </Route>
        
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
