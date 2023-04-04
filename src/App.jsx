import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, NavLink } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'


function App() {


  return (
    <div className="container min-h-screen bg-red-100 ">
      <nav className='flex justify-between bg-slate-400 text-xl p-4 ease-linear duration-300'>
        <div>
          <h1 className='hover:scale-110 ease-in duration-200'><a href="/">React requests</a></h1>
        </div>
        <div className='flex gap-8'>
          <NavLink to="/" className="ease-in duration-200 hover:text-white"> Home </NavLink>
          <NavLink to="/fetch-method" className="ease-in duration-200 hover:text-white"> Fetch Method </NavLink>
          <NavLink to="/axios-method" className="ease-in duration-200 hover:text-white"> Axios Method </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}



export default App
