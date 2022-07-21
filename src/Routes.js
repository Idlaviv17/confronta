import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import RegPatPage from './pages/RegPatPage'
import SuaPage from './pages/Sua/SuaPage'
import SuaResumen from './pages/Sua/SuaResumen'
import SuaPagoMensual from './pages/Sua/SuaPagoMensual'
import SuaPagoBimestral from './pages/Sua/SuaPagoBimestral'
import EmisionPage from './pages/Emision/EmisionPage'
import EmisionResumen from './pages/Emision/EmisionResumen'
import EmisionPagoMensual from './pages/Emision/EmisionPagoMensual'
import EmisionPagoBimestral from './pages/Emision/EmisionPagoBimestral'

const RoutesSwitch = () => {
  return (
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/nrp' element={<RegPatPage />} />
        <Route exact path='/sua' element={<SuaPage />} />
        <Route exact path='/sua/resumen' element={<SuaResumen />} />
        <Route exact path='/sua/mensual' element={<SuaPagoMensual />} />
        <Route exact path='/sua/bimestral' element={<SuaPagoBimestral />} />
        <Route exact path='/emision' element={<EmisionPage />} />
        <Route exact path='/emision/resumen' element={<EmisionResumen />} />
        <Route exact path='/emision/mensual' element={<EmisionPagoMensual />} />
        <Route exact path='/emision/bimestral' element={<EmisionPagoBimestral />} />
      </Routes>
  )
}

export default RoutesSwitch
