import './App.css'
import { Analyze } from './Components/Analyze'
import { Banner } from './Components/Banner'
import { Brand } from './Components/Brand'
import { Company } from './Components/Company'
import { Footer } from './Components/Footer'
import { Navbar } from './Components/Navbar'
import { Products } from './Components/Products'
import { Projects } from './Components/Projects'
import { Services } from './Components/Services'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Analyze/>
      <Services/>
      <Projects/>
      <Products/>
      <Company/>
      <Brand/>
      <Footer/>
    </>
  )
}

export default App
