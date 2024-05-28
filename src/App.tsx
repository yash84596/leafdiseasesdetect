import './App.css'
import ContactForm from './components/contactform'
import Solution from './components/landing-page/about/solution'
import Hero from './components/landing-page/hero'
import Navbar from './components/navbar'

function App() {
  return (
    <div >
        <Navbar />
        <Hero />
        <Solution />
        <ContactForm />
    </div>
  )
}

export default App
