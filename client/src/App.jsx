import './App.css'
import Header from './Components/Header'
import Books from './Components/Books'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Header/>
      <div className='artworkHolder'>
        <span>My Library</span>
      </div>
      <Books/>
      <Footer/>
    </>
  )
}

export default App
