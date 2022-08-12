import React from 'react'
import FileUploadEmiMensual from '../components/FileUploadEmiMensual'
import TopBar from '../components/TopBar'

const EmisionPage = () => {

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
      <TopBar btns={topBarBtns} />
      <div className='p-[100px]'>
        <FileUploadEmiMensual />
      </div>
    </div>
  )
}

export default EmisionPage
