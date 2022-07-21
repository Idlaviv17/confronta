import React from 'react'
import TopBar from '../../components/TopBar'

const EmisionPagoMensual = () => {
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
        <h1>Reporte Pago Mensual</h1>
      </div>
    </div>
  )
}

export default EmisionPagoMensual