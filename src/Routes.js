import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegPatPage from './pages/RegPatPage'
import SuaPage from './pages/Sua/SuaPage'
import SuaResumen from './pages/Sua/SuaResumen'
import EmisionPage from './pages/EmisionPage'

const RoutesSwitch = () => {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/nrp' element={<RegPatPage />} />
        <Route exact path='/sua' element={<SuaPage />} />
        <Route exact path='/sua/resumen' element={<SuaResumen />} />
        <Route exact path='/emision' element={<EmisionPage />} />
      </Routes>
  )
}

export default RoutesSwitch
