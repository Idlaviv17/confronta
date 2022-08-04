import TableMovimientoEmiPagoMensual from './TableMovimientoEmiPagoMensual'

const TableCuotaEmiMensual = ({ cuota }) => {
  return (
    <table className='table table-fixed table-compact w-full'>
      <thead>
        <tr className='hover'>
          <td className='stop-stretching'>{cuota.EMIA_NUMAFIL}</td>
          <td>{cuota.EMIA_NOM_TRAB}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        {cuota.MOVS.map((mov, idx) => (
          <TableMovimientoEmiPagoMensual
            key={`
                ${mov.EMIM_TIPOMOV}
                ${mov.EMIM_FECHA_MOV}
                ${mov.EMIM_DIAS_COBRO}
                ${mov.EMIM_SAL_BASE}
                ${mov.SUMA}
                ${idx}`}
            mov={mov}
          />
        ))}
      </tbody>
    </table>
  )
}

export default TableCuotaEmiMensual
