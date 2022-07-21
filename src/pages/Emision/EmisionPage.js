import React from 'react'
import FileUploadEmiMensual from '../../components/FileUploadEmiMensual'
import TopBar from '../../components/TopBar'

const EmisionPage = () => {
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
        <FileUploadEmiMensual />
      </div>
    </div>
  )
}

export default EmisionPage
