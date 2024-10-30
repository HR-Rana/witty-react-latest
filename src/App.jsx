
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './assets/common/navbar'
import Routing from './assets/routing/Routing'
import Footer from './assets/common/Footer'

function App() {

  return (
    <BrowserRouter>
         <Navbar />
         <Routing />
         <Footer />
    </BrowserRouter>
  )
}

export default App
