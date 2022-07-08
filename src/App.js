import FileUploadSua from './components/FileUploadSua'
import FileUploadEmiMensual from './components/FileUploadEmiMensual'

const App = () => {
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div>
      <div className='d-flex justify-content-center flex-column'>
        <h1 className='text-center'>Sua</h1>
        <FileUploadSua />
      </div>

      <div
        className='d-flex justify-content-center flex-column'
        style={{ marginTop: 25 }}
      >
        <h1 className='text-center'>Emisión</h1>
        <FileUploadEmiMensual />
      </div>

      <form
        className='d-flex justify-content-center flex-column'
        onSubmit={refreshPage}
      >
        <input
          type='submit'
          value='Subir otros datos 🚀'
          className='btn btn-primary btn-block mt-4'
          style={{ width: 200, marginLeft: '44.5%' }}
        />
      </form>
    </div>
  )
}

export default App

