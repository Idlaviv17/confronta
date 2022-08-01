import React, { useState, useEffect, useRef } from 'react'
import ReactToPrint from 'react-to-print'
import axios from 'axios'
import TopBar from '../../components/TopBar'
import TableMensualEmision from '../../components/TableMensualEmision'

const EmisionPagoMensual = () => {
  const tableRef = useRef()

  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
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

  return (
    <div>
      <TopBar btns={topBarBtns} />
      <ReactToPrint
        trigger={() => <button className='print-btn'>Imprimir PDF</button>}
        content={() => tableRef.current}
      />
      <div className='content'>
        {loading ? (
          <h1 className='text-center'>Cargando...</h1>
        ) : (
          <TableMensualEmision info={info} ref={tableRef} />
        )}
      </div>
    </div>
  )
}

export default EmisionPagoMensual
