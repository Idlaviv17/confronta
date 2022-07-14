import React, { useEffect, useState} from 'react'
import TopBar from '../../components/TopBar'
import axios from 'axios'
import TableResumenSua from '../../components/TableResumenSua'

const SuaResumen = () => {
  const [info, setInfo] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const ANO = 2020
      const MES = '12'
      const REGPATRON = 'E6029854107'
      try {
        const res = await axios.get('/api/sua/resumen', {
          params: { ANO, MES, REGPATRON },
        })
        setInfo(res.data)
      } catch (err) {
        alert('Existe un problema al leer el patrón')
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
  ]

  return (
    <div>
      <TopBar btns={topBarBtns} />
      <div className='m-[100px]'>
          <TableResumenSua info={info} />
      </div>
    </div>
  )
}

export default SuaResumen
