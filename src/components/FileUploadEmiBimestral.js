import React, { Fragment, useState } from 'react'
import axios from 'axios'
import JSZip from 'jszip'

const FileUploadEmiBimestral = () => {
  const [file, setFile] = useState('')

  const onChange = e => {
    setFile(e.target.files[0])
  }

  const onSubmit = e => {
    e.preventDefault()

    const send = async data => {
      try {
        await axios.post('/api/emi/bimestral', { data: data })
        alert('El archivo se ha enviado')
        setFile('')
      } catch (err) {
        alert('Existe un problema al enviar el archivo')
      }
    }

    const loadZipFiles = async file => {
      const zip = new JSZip()
      const zipFile = await zip.loadAsync(file)
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

      const ANO = parseInt(data[2].content.slice(95, 99))
      const MES = data[2].content.slice(93, 95).trim()
      const REGPATRON = data[2].content.slice(21, 32).trim()
      alert(`ARCHIVO: EMISIÓN\nAÑO: ${ANO}\nMES: ${MES}\nREGPATRON: ${REGPATRON}`)

      send(data)
    }

    if (file.name.includes('.zip')) {
      loadZipFiles(file)
    } else {
      alert('Inserte un archivo .zip')
    }
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
        />

        <input
          type='submit'
          value='Subir'
          className='btn btn-primary btn-block mt-4'
          style={{ width: 200, marginLeft: '44.5%' }}
        />
      </form>
    </Fragment>
  )
}

export default FileUploadEmiBimestral