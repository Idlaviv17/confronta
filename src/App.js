import React from 'react'
import Layout from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import RequireAuth from './components/RequireAuth'
import Login from './pages/Login'
import PersistLogin from './components/PersistLogin'
import HomePage from './pages/HomePage'
import RegPatPage from './pages/RegPatPage'
import SuaPage from './pages/SuaPage'
import SuaResumen from './pages/SuaResumen'
import SuaPagoMensual from './pages/SuaPagoMensual'
import SuaPagoBimestral from './pages/SuaPagoBimestral'
import EmisionPage from './pages/EmisionPage'
import EmisionResumen from './pages/EmisionResumen'
import EmisionPagoMensual from './pages/EmisionPagoMensual'
import EmisionPagoBimestral from './pages/EmisionPagoBimestral'
import Missing from './pages/Missing'

const App = () => {
  return (
    <Routes>
      {/* Login */}
      <Route path='/login' element={<Login />} />

      {/* Routes to protect */}
      <Route element={<PersistLogin />}>
        {/* Main page */}
        <Route element={<RequireAuth />}>
          <Route
            exact
            path='/'
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
        </Route>
        {/* NRP listing */}
        <Route element={<RequireAuth />}>
          <Route
            exact
            path='/nrp'
            element={
              <Layout>
                <RegPatPage />
              </Layout>
            }
          />
        </Route>
        {/* SUA upload */}
        <Route element={<RequireAuth />}>
          <Route
            exact
            path='/sua'
            element={
              <Layout>
                <SuaPage />
              </Layout>
            }
          />
        </Route>
        {/* SUA summary */}
        <Route element={<RequireAuth />}>
          <Route
            exact
            path='/sua/resumen'
            element={
              <Layout>
                <SuaResumen />
              </Layout>
            }
          />
        </Route>
        {/* SUA monthly report */}
        <Route element={<RequireAuth />}>
          <Route
            exact
            path='/sua/mensual'
            element={
              <Layout>
                <SuaPagoMensual />
              </Layout>
            }
          />
        </Route>
        {/* SUA bimonthly report */}
        <Route element={<RequireAuth />}>
          <Route
            exact
            path='/sua/bimestral'
            element={
              <Layout>
                <SuaPagoBimestral />
              </Layout>
            }
          />
        </Route>
        {/* Emission upload */}
        <Route element={<RequireAuth />}>
          <Route
            exact
            path='/emision'
            element={
              <Layout>
                <EmisionPage />
              </Layout>
            }
          />
        </Route>
        {/* Emission summary */}
        <Route element={<RequireAuth />}>
          <Route
            exact
            path='/emision/resumen'
            element={
              <Layout>
                <EmisionResumen />
              </Layout>
            }
          />
        </Route>
        {/* Monthly emission report */}
        <Route element={<RequireAuth />}>
          <Route
            exact
            path='/emision/mensual'
            element={
              <Layout>
                <EmisionPagoMensual />
              </Layout>
            }
          />
        </Route>
        {/* Bimonthly emission report */}
        <Route element={<RequireAuth />}>
          <Route
            exact
            path='/emision/bimestral'
            element={
              <Layout>
                <EmisionPagoBimestral />
              </Layout>
            }
          />
        </Route>
      </Route>

      {/* In case a page that doesn't exist is trying to get reached*/}
      <Route path='*' element={<Missing />} />
    </Routes>
  )
}

export default App
