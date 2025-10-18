import './App.css'
import Header from './Components/Header'
import Books from './Components/Books'

function App() {

  return (
    <>
      <Header/>
      <div className='artworkHolder'>
        <span>My Library</span>
      </div>
      <Books/>
    </>
  )
}

export default App
