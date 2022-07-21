import React, { useState } from 'react'
import axios from 'axios'
import JSZip from 'jszip'
import * as XLSX from 'xlsx/xlsx.mjs'
import FileUploadEmiBimestral from './FileUploadEmiBimestral'
import { HiOutlineUpload } from 'react-icons/hi'
import { FcCheckmark } from 'react-icons/fc'

const FileUploadEmiMensual = () => {
  const [file, setFile] = useState('')
  const [bimestral, setBimestral] = useState(false)

  const onChange = e => {
    setFile(e.target.files[0])
  }

  const onSubmit = e => {
    e.preventDefault()

    const loadZipFiles = async file => {
      const zip = new JSZip()
      const zipFile = await zip.loadAsync(file)
      const data = [
        {
          title: 'CDEMAS',
          content: await zipFile
            .file('CDCOBRA/Tempo/CDEMAS99.txt')
            .async('string'),
        },
        {
          title: 'CDEMMO',
          content: await zipFile
            .file('CDCOBRA/Tempo/CDEMMO99.txt')
            .async('string'),
        },
        {
          title: 'CDEMPA',
          content: await zipFile
            .file('CDCOBRA/Tempo/CDEMPA99.txt')
            .async('string'),
        },
      ]

      const ANO = parseInt(data[2].content.slice(97, 101))
      const MES = data[2].content.slice(95, 97).trim()
      const REGPATRON = data[2].content.slice(23, 34).trim()
      alert(
        `ARCHIVO: EMISIÓN\nAÑO: ${ANO}\nMES: ${MES}\nREGPATRON: ${REGPATRON}`
      )

      if (MES % 2 === 0) setBimestral(true)

      try {
        await axios.post('/api/emi/mensual', { data: data })
        alert('El archivo se ha enviado')
        setFile('')
      } catch (err) {
        alert('Existe un problema al enviar el archivo')
      }
    }

    const loadXLSX = async file => {
      const reader = new FileReader()
      reader.readAsBinaryString(file)
      reader.onload = async e => {
        const data = reader.result
        const workbook = XLSX.read(data, {
          type: 'binary',
        })

        let worksheets = {}
        for (const sheetName of workbook.SheetNames) {
          worksheets[sheetName] = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName]
          )
        }

        if (worksheets) {
          const emiSheets = Object.keys(worksheets)
          const CDEBPA = worksheets[emiSheets[0]]

          const ANO = parseInt(CDEBPA[2].__EMPTY_1.slice(2, 6))
          const MES = CDEBPA[2].__EMPTY_1.slice(0, 1).trim()
          const REGPATRON = CDEBPA[3].__EMPTY_1.trim()
          alert(
            `ARCHIVO: EMISIÓN\nAÑO: ${ANO}\nMES: ${MES}\nREGPATRON: ${REGPATRON}`
          )

          if (Object.keys(worksheets).length === 3) {
            try {
              await axios.post('/api/emi/bimestral', worksheets)
              alert('El archivo se ha enviado')
              setFile('')
            } catch (err) {
              alert('Existe un problema al enviar el archivo')
            }
          }
          try {
            await axios.post('/api/emi/mensual', worksheets)
            alert('El archivo se ha enviado')
            setFile('')
          } catch (err) {
            alert('Existe un problema al enviar el archivo')
          }
        }
      }
    }

    if (file.name.includes('.zip')) {
      loadZipFiles(file)
    } else {
      loadXLSX(file)
    }

    setFile('')
  }

  return (
    <div className='py-12'>
      <h1 className='text-center text-2xl mb-4'>Emisión</h1>
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
            Seleccionar Emisión
            <input
              type='file'
              className='sr-only'
              id='customFile'
              onChange={onChange}
            />
            {file !== '' && <FcCheckmark />}
          </label>

          <input
            type='submit'
            value='Subir archivos'
            className='mt-3 btn btn-active btn-primary text-white'
          />
        </form>

        {bimestral && (
            <FileUploadEmiBimestral />
        )}
      </div>
    </div>
  )
}

export default FileUploadEmiMensual
