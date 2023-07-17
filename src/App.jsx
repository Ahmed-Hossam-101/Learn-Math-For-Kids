import React from 'react'
import './style/App.css'
import './style/Media.css'
import Home from './components/home/Home';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Plu from './components/+';
import _ from './components/-';
function App() {

  return (
   <BrowserRouter>
<Routes> 
  <Route expect path='/Learn-Math-For-Kids' element={<Home />} />
  <Route path='/Plu' element={<Plu />} />
  <Route path='/M' element={<_ />} />
</Routes>
     </BrowserRouter>
  )
}

export default App
