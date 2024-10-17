import React from 'react'
import "./App.css"

import {BrowserRouter, Link, Route, Routes} from "react-router-dom"
import Header from './header/Header'
import Home from './Home'
import Chart from './Chart'
import Usage from './Usage'
import Use from './use'
import Details from './Details'
function App() {
  return (
    <div>

  <BrowserRouter>

  <Header/>

<Routes>
<Route path='user'  element={<Use/>}/>
<Route path='/' element={<Home/>}/>
<Route path={"chart"} element={<Chart/>}/>
<Route path={"usage"} element={<Usage/>}/>
<Route path='details/:userid/*'  element={<Details/>}/>



</Routes>

    
  </BrowserRouter>
    </div>
  )
}

export default App