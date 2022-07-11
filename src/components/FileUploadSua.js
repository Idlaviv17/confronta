import React, { useState } from 'react'
import axios from 'axios'
import { AccessParser } from 'accessdb-parser'
import arrayBufferToBuffer from 'arraybuffer-to-buffer'
import { HiOutlineUpload } from 'react-icons/hi'
import { FcCheckmark } from 'react-icons/fc'

const FileUploadSua = () => {
  const [txt, setTxt] = useState('')
  const [mdb, setMdb] = useState('')

  const onChangeTxt = e => {
    setTxt(e.target.files[0])
  }

  const onChangeMdb = e => {
    setMdb(e.target.files[0])
  }

  const onSubmit = e => {
    e.preventDefault()

    if (txt === '' || mdb === '') {
      alert(
        'Debe de subir los dos archivos de SUA (.txt y .mdb) para poder subir la información'
      )
      return
    }

    const send = async (txtData, mdbData) => {
      try {
        await axios.post('/api/sua', { txtData, mdbData })
        alert('El archivo se ha enviado')
        setTxt('')
      } catch (err) {
        alert('Existe un problema al enviar el archivo')
      }
    }

    const txtReader = new FileReader()
    txtReader.readAsText(txt)
    txtReader.onload = e => {
      const txtData = txtReader.result
      if (txtData) {
        const mdbReader = new FileReader()
        mdbReader.readAsArrayBuffer(mdb)
        mdbReader.onload = () => {
          const buffer = arrayBufferToBuffer(mdbReader.result)
          const db = new AccessParser(Buffer.from(buffer, 'utf-8'))
          const table = db.parseTable('Movtos')
          const mdbData = table.lines.filter(
            elem =>
              elem[13] === '15' ||
              elem[13] === '17' ||
              elem[13] === '18' ||
              elem[13] === '19' ||
              elem[13] === '20'
          )
          const ANO = parseInt(txtData.slice(26, 30))
          const MES = txtData.slice(30, 32).trim()
          const REGPATRON = txtData.slice(2, 13).trim()
          alert(
            `ARCHIVO: SUA\nAÑO: ${ANO}\nMES: ${MES}\nREGPATRON: ${REGPATRON}`
          )

          send(txtData, mdbData)
          setTxt('')
          setMdb('')
        }
      }
    }
  }

  return (
    <div className='py-12'>
      <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <form
          className='flex flex-col items-center py-12 px-6 rounded-md border-2 border-dashed'
          onSubmit={onSubmit}
        >
          <HiOutlineUpload className='h-12 w-12' />
          <label
            className='mt-3 bg-white px-4 h-9 inline-flex items-center rounded border 
          border-gray-300 shadow-sm text-sm font-medium text-gray-700 focus-within:ring-2 
          focus-within:ring-offset-2 focus-within:primary cursor-pointer'
          >
            Seleccionar .SUA
            <input
              type='file'
              className='sr-only'
              id='customFile'
              onChange={onChangeTxt}
            />
            {txt !== '' && <FcCheckmark />}
          </label>

          <label
            className='mt-3 bg-white px-4 h-9 inline-flex items-center rounded border 
          border-gray-300 shadow-sm text-sm font-medium text-gray-700 focus-within:ring-2 
          focus-within:ring-offset-2 focus-within:primary cursor-pointer'
          >
            Seleccionar .MDB
            <input
              type='file'
              className='sr-only'
              id='customFile'
              onChange={onChangeMdb}
            />
            {mdb !== '' && <FcCheckmark />}
          </label>

          <input
            type='submit'
            value='Subir archivos'
            className='mt-3 btn btn-active btn-primary text-white'
          />
        </form>
      </div>
    </div>
  )
}

export default FileUploadSua
