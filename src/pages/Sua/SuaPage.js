import React from 'react'
import FileUploadSua from '../../components/FileUploadSua'
import TopBar from '../../components/TopBar'

const SuaPage = () => {

  const topBarBtns = [
    {
      name: 'Leer Disco',
      to: '/sua'
    },
    {
      name: 'Resumen',
      to: '/sua/resumen'
    }
  ]

  return (
    <div>
      <TopBar btns={topBarBtns}/>
      <div className='p-[100px]'>
        <FileUploadSua />
      </div>
    </div>
  )
}

export default SuaPage