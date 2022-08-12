import React, { useState } from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import JSZip from 'jszip'
import { HiOutlineUpload } from 'react-icons/hi'
import { FcCheckmark } from 'react-icons/fc'

const FileUploadEmiBimestral = () => {
  const axiosPrivate = useAxiosPrivate() // Uses axios with auth credentials

  const [file, setFile] = useState('') // Bimonthly data file

  const onChange = e => { // On change file handler
    setFile(e.target.files[0])
  }

  const onSubmit = e => {
    e.preventDefault()

    // Sends data to the server
    const send = async data => {
      try {
        await axiosPrivate.post('/api/emi/bimestral', { data: data })
        alert('El archivo se ha enviado')
        setFile('')
      } catch (err) {
        alert('Existe un problema al enviar el archivo')
        console.error(err)
      }
    }

    const loadZipFiles = async file => {
      const zip = new JSZip()
      const zipFile = await zip.loadAsync(file) // Loads the file into the zip buffer
      
      // Retrieves data depending on the files' names
      const data = [
        {
          title: 'CDEBAS',
          content: await zipFile
            .file('CDCOBRA/Tempo/CDEBAS99.txt')
            .async('string'),
        },
        {
          title: 'CDEBMO',
          content: await zipFile
            .file('CDCOBRA/Tempo/CDEBMO99.txt')
            .async('string'),
        },
        {
          title: 'CDEBPA',
          content: await zipFile
            .file('CDCOBRA/Tempo/CDEBPA99.txt')
            .async('string'),
        },
      ]

      // Shows a message to the user about the data the files contain
      const ANO = parseInt(data[2].content.slice(95, 99))
      const MES = data[2].content.slice(93, 95).trim()
      const REGPATRON = data[2].content.slice(21, 32).trim()
      alert(
        `ARCHIVO: EMISIÓN\nAÑO: ${ANO}\nMES: ${MES}\nREGPATRON: ${REGPATRON}`
      )

      send(data)
    }

    if (file.name.includes('.zip')) { // Checks if it's a zip file
      loadZipFiles(file)
    } else {
      alert('Inserte un archivo .zip')
    }
  }

  return (
    <div className='py-12'>
      <h1 className='text-center text-2xl mb-4'>Emisión Bimestral</h1>
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
            Seleccionar Emisión Bimestral
            <input
              type='file'
              className='sr-only'
              id='customFile'
              onChange={onChange}
            />
            {file !== '' && <FcCheckmark />} {/* If loaded display checkmark */}
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

export default FileUploadEmiBimestral
