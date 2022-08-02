import React, { useEffect, useState, useRef } from 'react'
import ReactToPrint from 'react-to-print'
import axios from 'axios'
import TopBar from '../../components/TopBar'
import TablePagoBimestralSua from '../../components/TablePagoBimestralSua'

const SuaPagoBimestral = () => {
  const tableRef = useRef()

  const [info, setInfo] = useState({})
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const ANO = 2020
      const MES = '12'
      const REGPATRON = 'E6029854107'
      try {
        const res = await axios.get('/api/sua/bimestral', {
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
    {
      name: 'Pago Bimestral',
      to: '/sua/bimestral',
    },
  ]

  const handleFilterChange = e => {
    setFilter(e.target.value)
  }

  return (
    <div>
      <TopBar btns={topBarBtns} />
      <ReactToPrint
        trigger={() => <button className='print-btn'>Imprimir PDF</button>}
        content={() => tableRef.current}
      />
      <div className='filter'>
        <input
          type='text'
          placeholder='Filtrar...'
          class='input input-bordered w-full max-w-xs'
          onChange={handleFilterChange}
        />
      </div>
      <div className='content'>
        {loading ? (
          <h1 className='text-center'>Cargando...</h1>
        ) : (
          <TablePagoBimestralSua info={info} filter={filter} ref={tableRef} />
        )}
      </div>
    </div>
  )
}

export default SuaPagoBimestral
