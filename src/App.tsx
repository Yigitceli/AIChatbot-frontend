import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Login, Homepage } from './Pages'
import { useSelector } from 'react-redux';
import { getLoggedInState } from './store/selectors';
import { createBrowserRouter, Navigate, createRoutesFromElements, Route, Routes, RouterProvider } from 'react-router-dom';
import Chat from './Components/Chat';


function App() {
  const isLoggedIn = useSelector(getLoggedInState);

  const router = createBrowserRouter(createRoutesFromElements
    (
      <>
        <Route path='/' element={isLoggedIn ? <Navigate to={'/chat'} /> : <Login />} />
        <Route path='/chat' element={!isLoggedIn ? <Navigate to={'/'} /> : <Homepage />}/>
        <Route path='/chat/:id' element={<Chat/>}/>
      </>
    )
  )

  return (<RouterProvider router={router} />);
}

export default App