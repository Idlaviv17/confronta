import React, { useState, useEffect, useRef } from 'react'
import ReactToPrint from 'react-to-print'
import axios from 'axios'
import TopBar from '../../components/TopBar'
import TableMensualEmision from '../../components/TableMensualEmision'

const EmisionPagoMensual = () => {
  const tableRef = useRef() // Reference to the report's table

  const [info, setInfo] = useState({}) // Information retrieved from the API
  const [loading, setLoading] = useState(true) // Conditional to display a message while loading
  const [filter, setFilter] = useState('') // Value in which to filter the report's data

  useEffect(() => {
    // Fetches specific data from the API and updates state
    const fetchData = async () => {
      const ANO = 2020
      const MES = '12'
      const REGPATRON = 'E6029854107'
      try {
        const res = await axios.get('/api/emi/mensual/pago', {
          params: { ANO, MES, REGPATRON },
        })
        setInfo(res.data)
        setLoading(false)
      } catch (err) {
        alert('Existe un problema al leer el reporte mensual')
      }
    }

    fetchData()
  }, [])

  // Button information to pass to the TopBar component
  const topBarBtns = [
    {
      name: 'Leer Disco',
      to: '/emision',
    },
    {
      name: 'Resumen',
      to: '/emision/resumen',
    },
    {
      name: 'Pago Mensual',
      to: '/emision/mensual',
    },
    {
      name: 'Pago Bimestral',
      to: '/emision/bimestral',
    },
  ]

  // Changes in the filter value handler
  const handleFilterChange = e => {
    setFilter(e.target.value)
  }

  return (
    <div>
      {/* TopBar */}
      <TopBar btns={topBarBtns} />

      {/* Print PDF button (needs ref) */}
      <ReactToPrint
        trigger={() => <button className='print-btn'>Imprimir PDF</button>}
        content={() => tableRef.current}
      />

      {/* Filter Text Field */}
      <div className='filter'>
        <input
          type='text'
          placeholder='Filtrar...'
          class='input input-bordered w-full max-w-xs'
          onChange={handleFilterChange}
        />
      </div>

      {/* Main content (report) */}
      <div className='content'>
        {loading ? (
          <h1 className='text-center'>Cargando...</h1> // Displays message if information is not yet available
        ) : (
          <TableMensualEmision info={info} filter={filter} ref={tableRef} />
        )}
      </div>
    </div>
  )
}

export default EmisionPagoMensual
