import './App.css'
import { Outlet } from 'react-router'
import Navbar from './components/layout/navbar/Navbar'
import Footer from './components/layout/footer/Footer'

function App() {
  return (
    <>
    <Navbar/>
    <main className='min-h-screen'>
      <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default App
