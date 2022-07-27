import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TopBar from '../../components/TopBar'
import TableBimestralEmision from '../../components/TableBimestralEmision'

const EmisionPagoBimestral = () => {
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const ANO = 2020
      const MES = '12'
      const REGPATRON = 'E6029854107'
      try {
        const res = await axios.get('/api/emi/bimestral/pago', {
          params: { ANO, MES, REGPATRON },
        })
        setInfo(res.data)
        setLoading(false)
      } catch (err) {
        alert('Existe un problema al leer el pago bimestral')
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
          <TableBimestralEmision info={info} />
        )}
      </div>
    </div>
  )
}

export default EmisionPagoBimestral
