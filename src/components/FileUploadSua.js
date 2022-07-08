import React, { Fragment, useState } from 'react'
import axios from 'axios'
import { AccessParser } from 'accessdb-parser'
import arrayBufferToBuffer from 'arraybuffer-to-buffer'

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
        }
      }
    }

    setTxt('')
    setMdb('')
  }

  return (
    <Fragment>
      <form
        className='d-flex justify-content-center flex-column'
        onSubmit={onSubmit}
      >
        <label style={{ width: 200, marginLeft: '44.5%' }}>.SUA</label>
        <input
          type='file'
          className='custom-file-input'
          style={{ width: 200, marginLeft: '44.5%' }}
          id='customFile'
          onChange={onChangeTxt}
        />

        <label style={{ width: 200, marginLeft: '44.5%' }}>.mdb</label>
        <input
          type='file'
          className='custom-file-input'
          style={{ width: 200, marginLeft: '44.5%' }}
          id='customFile'
          onChange={onChangeMdb}
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

export default FileUploadSua
