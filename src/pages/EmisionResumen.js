import React, { useEffect, useState, useRef } from 'react'
import ReactToPrint from 'react-to-print'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import TopBar from '../components/TopBar'
import TableResumenEmision from '../components/TableResumenEmision'

const EmisionResumen = () => {
  const tableRef = useRef() // Reference to the report's table
  const axiosPrivate = useAxiosPrivate() // Uses axios with auth credentials

  const [info, setInfo] = useState({}) // Information retrieved from the API
  const [loading, setLoading] = useState(true) // Conditional to display a message while loading

  useEffect(() => {
    // Fetches specific data from the API and updates state
    const fetchData = async () => {
      const ANO = 2022
      const MES = '04'
      const REGPATRON = 'E6030587100'
      try {
        const res = await axiosPrivate.get('/api/emi/resumen', {
          params: { ANO, MES, REGPATRON },
        })
        setInfo(res.data)
        setLoading(false)
      } catch (err) {
        alert('Existe un problema al leer el resumen de la emisión')
        console.error(err)
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

      {/* Print PDF button (needs ref) */}
      <ReactToPrint
        trigger={() => <button className='print-btn'>Imprimir PDF</button>}
        pageStyle="@page { size: auto; margin: 20mm;  } @media print { body { -webkit-print-color-adjust: exact; padding: 20px !important; } }"
        content={() => tableRef.current}
      />

      {/* Main content (report) */}
      <div className='content'>
        {loading ? (
          <h1 className='text-center'>Cargando...</h1> // Displays message if information is not yet available
        ) : (
          <TableResumenEmision info={info} ref={tableRef} />
        )}
      </div>
    </div>
  )
}

export default EmisionResumen
