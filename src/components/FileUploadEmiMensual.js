import React, { useState } from 'react'
import axios from 'axios'
import JSZip from 'jszip'
import * as XLSX from 'xlsx/xlsx.mjs'
import FileUploadEmiBimestral from './FileUploadEmiBimestral'
import { HiOutlineUpload } from 'react-icons/hi'
import { FcCheckmark } from 'react-icons/fc'

const FileUploadEmiMensual = () => {
  const [file, setFile] = useState('') // Monthly data file
  const [bimestral, setBimestral] = useState(false) // Conditional to display a second upload option (bimonthly)

  const onChange = e => { // On change file handler
    setFile(e.target.files[0])
  }

  const onSubmit = e => {
    e.preventDefault()

    const loadZipFiles = async file => {
      const zip = new JSZip()
      const zipFile = await zip.loadAsync(file) // Loads the file into the zip buffer
      
      // Retrieves data depending on the files' names
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

      // Shows a message to the user about the data the files contain
      const ANO = parseInt(data[2].content.slice(97, 101))
      const MES = data[2].content.slice(95, 97).trim()
      const REGPATRON = data[2].content.slice(23, 34).trim()
      alert(
        `ARCHIVO: EMISIÓN\nAÑO: ${ANO}\nMES: ${MES}\nREGPATRON: ${REGPATRON}`
      )

      // If the file has a bimonthly date, it enables its upload conditional
      if (MES % 2 === 0) setBimestral(true)

      // Sends the data to the server
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
      reader.readAsBinaryString(file) // The xls file is read as a binary string, since it comes encoded
      reader.onload = async e => {
        const data = reader.result
        const workbook = XLSX.read(data, { // Read the workbook decoding it
          type: 'binary',
        })

        // Converts all the worksheets to json
        let worksheets = {}
        for (const sheetName of workbook.SheetNames) {
          worksheets[sheetName] = XLSX.utils.sheet_to_json(
            workbook.Sheets[sheetName]
          )
        }

        if (worksheets) { // Only executes when the worksheets are ready
          const emiSheets = Object.keys(worksheets)
          const CDEBPA = worksheets[emiSheets[0]]

          // Shows a message to the user about the data the files contain
          const ANO = parseInt(CDEBPA[2].__EMPTY_1.slice(2, 6))
          const MES = CDEBPA[2].__EMPTY_1.slice(0, 1).trim()
          const REGPATRON = CDEBPA[3].__EMPTY_1.trim()
          alert(
            `ARCHIVO: EMISIÓN\nAÑO: ${ANO}\nMES: ${MES}\nREGPATRON: ${REGPATRON}`
          )

          // Sends data to the bimonthly API route
          if (Object.keys(worksheets).length === 3) {
            try {
              await axios.post('/api/emi/bimestral', worksheets)
              alert('El archivo se ha enviado')
              setFile('')
            } catch (err) {
              alert('Existe un problema al enviar el archivo')
            }
          }

          // Sends data to the monthly API route
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
      loadZipFiles(file) // Executes if it's a zip file
    } else {
      loadXLSX(file) // Executes if it's a xsl file
    }

    setFile('')
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
            Seleccionar Emisión
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

        {bimestral && (
            <FileUploadEmiBimestral /> // If true displays the bimonthly upload option
        )}
      </div>
    </div>
  )
}

export default FileUploadEmiMensual
