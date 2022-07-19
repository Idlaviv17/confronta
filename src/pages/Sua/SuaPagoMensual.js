import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TopBar from '../../components/TopBar'
import TablePagoMensualSua from '../../components/TablePagoMensualSua'

const SuaPagoMensual = () => {
  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const ANO = 2020
      const MES = '12'
      const REGPATRON = 'E6029854107'
      try {
        const res = await axios.get('/api/sua/mensual', {
          params: { ANO, MES, REGPATRON },
        })
        setInfo(res.data)
        setLoading(false)
      } catch (err) {
        alert('Existe un problema al leer el pago mensual')
      }
    }

    fetchData()
  }, [])

  const topBarBtns = [
    {
      name: 'Leer Disco',
      to: '/sua',
    },
    {
      name: 'Resumen',
      to: '/sua/resumen',
    },
    {
      name: 'Pago Mensual',
      to: '/sua/mensual',
    },
  ]

  return (
    <div>
      <TopBar btns={topBarBtns} />
      <div className='m-[100px]'>
        {loading ? <h1 className='text-center'>Cargando...</h1> : <TablePagoMensualSua info={info} />}
      </div>
    </div>
  )
}

export default SuaPagoMensual
