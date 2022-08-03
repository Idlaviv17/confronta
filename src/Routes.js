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
        <Route exact path='/' element={<HomePage />} /> {/* Main page */}
        <Route exact path='/nrp' element={<RegPatPage />} /> {/* NRP listing */}
        <Route exact path='/sua' element={<SuaPage />} /> {/* SUA upload */}
        <Route exact path='/sua/resumen' element={<SuaResumen />} /> {/* SUA summary */}
        <Route exact path='/sua/mensual' element={<SuaPagoMensual />} /> {/* SUA monthly report */}
        <Route exact path='/sua/bimestral' element={<SuaPagoBimestral />} /> {/* SUA bimonthly report */}
        <Route exact path='/emision' element={<EmisionPage />} /> {/* Emission upload */}
        <Route exact path='/emision/resumen' element={<EmisionResumen />} /> {/* Emission summary */}
        <Route exact path='/emision/mensual' element={<EmisionPagoMensual />} /> {/* Emission monthly report */}
        <Route exact path='/emision/bimestral' element={<EmisionPagoBimestral />} /> {/* Emission bimonthly report */}
      </Routes>
  )
}

export default RoutesSwitch
