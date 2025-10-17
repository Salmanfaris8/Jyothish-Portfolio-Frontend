import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Admin from './Pages/Admin/Admin'
import Works from './Pages/Works/Works'
import Contact from './Pages/Contact/Contact'
import WorkDetails from './Pages/Work Details/Workdetails'
import AdminContacts from './Pages/Admin Contacts/AdminContacts'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/works' element={<Works/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/:id/workdetails' element={<WorkDetails/>}/>
        <Route path='/admin-contacts' element={<AdminContacts/>}/>
      </Routes>
    </>
  )
}

export default App
