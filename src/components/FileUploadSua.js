import React, { useState } from 'react'
import axios from 'axios'
import { AccessParser } from 'accessdb-parser'
import arrayBufferToBuffer from 'arraybuffer-to-buffer'
import { HiOutlineUpload } from 'react-icons/hi'
import { FcCheckmark } from 'react-icons/fc'

const FileUploadSua = () => {
  const [txt, setTxt] = useState('') // Sua txt file info
  const [mdb, setMdb] = useState('') // Sua mdb file info

  // On change of txt handler
  const onChangeTxt = e => {
    setTxt(e.target.files[0])
  }

  // On change of mdb handler
  const onChangeMdb = e => {
    setMdb(e.target.files[0])
  }

  const onSubmit = e => {
    e.preventDefault()

    // Makes sure to upload both files at the same time
    if (txt === '' || mdb === '') {
      alert(
        'Debe de subir los dos archivos de SUA (.txt y .mdb) para poder subir la información'
      )
      return
    }

    // Sends data to the server (asynchronously)
    const send = async (txtData, mdbData) => {
      try {
        await axios.post('/api/sua', { txtData, mdbData })
        alert('El archivo se ha enviado')
        setTxt('')
      } catch (err) {
        alert('Existe un problema al enviar el archivo')
      }
    }

    const txtReader = new FileReader() // Declares a FileReader object to access info (buffer)
    txtReader.readAsText(txt) // Reads the buffer as text (UTF-8)
    txtReader.onload = e => { // Calls the onload callback to proccess the data along with the mdb file (asynchronously)
      const txtData = txtReader.result
      if (txtData) { // Checks if it is not falsy (null or undefined)
        const mdbReader = new FileReader() // Declares another FileReader for the mdb file
        mdbReader.readAsArrayBuffer(mdb)
        mdbReader.onload = () => { // Calls onload callback to process further data (asynchronously)
          const buffer = arrayBufferToBuffer(mdbReader.result) // Comverts array to buffer
          const db = new AccessParser(Buffer.from(buffer, 'utf-8')) // The Parser reads the buffer (UTF-8 encoded)
          const table = db.parseTable('Movtos')
          const mdbData = table.lines.filter( // Only takes necessary data
            elem =>
              elem[13] === '15' ||
              elem[13] === '17' ||
              elem[13] === '18' ||
              elem[13] === '19' ||
              elem[13] === '20'
          )

          // Displays a message with a summary of the info contained in the files to the user
          const ANO = parseInt(txtData.slice(26, 30))
          const MES = txtData.slice(30, 32).trim()
          const REGPATRON = txtData.slice(2, 13).trim()
          alert(
            `ARCHIVO: SUA\nAÑO: ${ANO}\nMES: ${MES}\nREGPATRON: ${REGPATRON}`
          )

          // Sends the data and resets state
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
            {txt !== '' && <FcCheckmark />} {/* If loaded display checkmark */}
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
            {mdb !== '' && <FcCheckmark />} {/* If loaded display checkmark */}
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
