import './App.css'
import { Analyze } from './Components/Analyze'
import { Banner } from './Components/Banner'
import { Company } from './Components/Company'
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
    </>
  )
}

export default App
