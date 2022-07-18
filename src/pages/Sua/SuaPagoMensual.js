import TopBar from '../../components/TopBar'
import TablePagoMensualSua from '../../components/TablePagoMensualSua'

const SuaPagoMensual = () => {
  const topBarBtns = [
    {
      name: 'Leer Disco',
      to: '/sua',
    },
    {
      name: 'Resumen',
      to: '/sua/resumen',
    },
    {
      name: 'Pago Mensual',
      to: '/sua/mensual',
    },
  ]

  return (
    <div>
      <TopBar btns={topBarBtns} />
      <div className='m-[100px]'>
        <TablePagoMensualSua />
      </div>
    </div>
  )
}

export default SuaPagoMensual
