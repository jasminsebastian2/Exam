import React from 'react'
import {  Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import Login from './Components/Login'
import { Provider } from 'react-redux';
import store from './core/store';
const App = () => {
  return (
    <div className='App'>
       <Provider store={store}>
      <Routes>
        <Route path="/" element={<Login />} exact />
        <Route path="home" element={<Home />} exact />
      </Routes>
      </Provider>
    </div>
  )
}

export default App