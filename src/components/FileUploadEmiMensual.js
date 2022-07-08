import React, { Fragment, useState } from 'react'
import axios from 'axios'
import JSZip from 'jszip'
import * as XLSX from 'xlsx/xlsx.mjs'
import FileUploadEmiBimestral from './FileUploadEmiBimestral'

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
    <Fragment>
      <form
        className='d-flex justify-content-center flex-column'
        onSubmit={onSubmit}
      >
        <input
          type='file'
          className='custom-file-input'
          style={{ width: 200, marginLeft: '44.5%' }}
          id='customFile'
          onChange={onChange}
          enctype='multipart/form-data'
        />

        <input
          type='submit'
          value='Subir'
          className='btn btn-primary btn-block mt-4'
          style={{ width: 200, marginLeft: '44.5%' }}
        />
      </form>

      {bimestral && (
        <div
          className='d-flex justify-content-center flex-column'
          style={{ marginTop: 25 }}
        >
          <h1 className='text-center'>Emisión Bimestral</h1>
          <FileUploadEmiBimestral />
        </div>
      )}
    </Fragment>
  )
}

export default FileUploadEmiMensual