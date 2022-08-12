import React, { useEffect, useState } from 'react'
import axios from '../api/axios'
import TopBar from '../components/TopBar'
import TableResumenEmision from '../components/TableResumenEmision'

const EmisionResumen = () => {
  const [info, setInfo] = useState({}) // Information retrieved from the API
  const [loading, setLoading] = useState(true) // Conditional to display a message while loading

  useEffect(() => {
    // Fetches specific data from the API and updates state
    const fetchData = async () => {
      const ANO = 2022
      const MES = '04'
      const REGPATRON = 'E6030587100'
      try {
        const res = await axios.get('/api/emi/resumen', {
          params: { ANO, MES, REGPATRON },
        })
        setInfo(res.data)
        setLoading(false)
      } catch (err) {
        alert('Existe un problema al leer el resumen de la emisión')
      }
    }

    fetchData()
  }, [])

  // Button information to pass to the TopBar component
  const topBarBtns = [
    {
      name: 'Leer Emisión',
      to: '/emision',
    },
    {
      name: 'Resumen',
      to: '/emision/resumen',
    },
    {
      name: 'Emisión Mensual',
      to: '/emision/mensual',
    },
    {
      name: 'Emisión Bimestral',
      to: '/emision/bimestral',
    },
  ]

  return (
    <div>
      {/* TopBar */}
      <TopBar btns={topBarBtns} />

      {/* Main content (report) */}
      <div className='content'>
        {loading ? (
          <h1 className='text-center'>Cargando...</h1> // Displays message if information is not yet available
        ) : (
          <TableResumenEmision info={info} />
        )}
      </div>
    </div>
  )
}

export default EmisionResumen
