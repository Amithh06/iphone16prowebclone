
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highligths from "./components/Highligths"
import Model from "./components/Model"
import Features from "./components/Features"
import HowitWorks from "./components/HowitWorks"
import Footer from "./components/Footer"


const App = ()=> {
  return (
 <main className="bg-black">
<Navbar/>
<Hero/>
<Highligths/>
<Model/>
<Features/>
<HowitWorks/>
<Footer/>
 </main>
  )
}

export default App
