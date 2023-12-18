import React from 'react'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const code = new URLSearchParams(window.location.search).get('code')

const App = () => {
  return (
    <div>
     {
      code? <Dashboard code={code}/> :  <Login/>
     }
    </div>
  )
}

export default App
