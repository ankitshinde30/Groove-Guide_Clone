
import './App.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Menu from "./components/GrooveMenu/Menu"
import GrooveTV from './components/GrooveTV/GrooveTV'
import MemberShip from './components/Membership/MemberShip'
import Rewards from './components/Rewards/Rewards'
import Feedback from './components/Feedback/Feedback'
import Stories from './components/Stories/Stories'
import Newsletter from './components/NewsLetter/NewsLetter'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      <Navbar/>
      <Hero/>
      <Menu/>
      <GrooveTV/>
      <MemberShip/>
      <Rewards/>
      <Feedback/>
      <Stories/>
      <Newsletter/>
      <Footer/>

    </>
  )
}

export default App
