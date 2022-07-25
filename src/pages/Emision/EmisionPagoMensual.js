import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TopBar from '../../components/TopBar'
import TableMensualEmision from '../../components/TableMensualEmision'

const EmisionPagoMensual = () => {
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
        alert('Existe un problema al leer el resumen')
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
      <div className='p-[100px]'>
        {loading ? (
          <h1 className='text-center'>Cargando...</h1>
        ) : (
          <TableMensualEmision info={info} />
        )}
      </div>
    </div>
  )
}

export default EmisionPagoMensual
