import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Morning from './components/Morning'
import Afternoon from './components/Afternoon'
import Night from './components/Night'
import Navigation from './components/Navigation'

function App() {

  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route path='/' Component={Morning}/>
          <Route path='/Afternoon' Component={Afternoon}/>
          <Route path='/Night' Component={Night}/>
        </Routes>
      </Router>
    </>
  )
}

export default App