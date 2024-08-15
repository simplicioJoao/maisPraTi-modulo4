import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ProtectedRout from './components/ProtectedRout'
import Home from './components/Home'
import Login from './components/Login'

function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Home/>}/> */}
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Home' element={
            <ProtectedRout isLoggedIn={false}>
              <Home/>
            </ProtectedRout>
          }/>
        </Routes>
      </Router>
    </>
  )
}

export default App
