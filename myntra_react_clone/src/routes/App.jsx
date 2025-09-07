// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';   // already there
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // <-- add this
import '../App.css'



// CUSTOM COMPONENTS
import Header from '../components/Header'
import Footer from '../components/Footer'

// EXTERNAL COMPONENTS
import {Outlet} from 'react-router-dom'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
      
    </>
  )
}

export default App
