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
          <td>{cuota.EMIM_IMP_EYM_EXCE}</td>
          <td>{cuota.EMIM_IMP_EYM_PRES}</td>
          <td>{cuota.EMIM_IMP_EYM_ESPE}</td>
          <td></td>
          <td>{cuota.EMIM_IMP_IV}</td>
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
