import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Login, Homepage } from './Pages'
import { useSelector } from 'react-redux';
import { getLoggedInState } from './store/selectors';
import { createBrowserRouter, Navigate, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom';


function App() {
  const isLoggedIn = useSelector(getLoggedInState);

  const router = createBrowserRouter(createRoutesFromElements
    (
      <>
        <Route path='/' element={isLoggedIn ? <Homepage/> : <Login />} />
        <Route path='/home' element={!isLoggedIn ? <Login/> : <Homepage />} />
      </>
    )
  )

  return (<RouterProvider router={router} />);
}

export default App