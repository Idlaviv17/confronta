import TableMovimientoEmiPagoBimestral from "./TableMovimientoEmiPagoBimestral"

const TableCuotaEmiBimestral = ({ cuota }) => {
  return (
    <table className='table table-fixed table-compact w-full'>
      <thead>
        <tr className='hover'>
          <td className='stop-stretching'>{cuota.EBIA_NUMAFIL}</td>
          <td>{cuota.EBIA_NOM_TRAB}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{cuota.EBIA_TIPO_PEN}</td>
          <td>{cuota.EBIA_CRED_INFO}</td>
          <td>{cuota.EBIA_TIP_AMOR_INFO}</td>
          <td>{cuota.EBIA_POR_VSM}</td>
          <td>{cuota.EBIA_FEC_INF}</td>
        </tr>
      </thead>
      <tbody>
        {cuota.MOVS.map((mov, idx) => (
          <TableMovimientoEmiPagoBimestral
            key={`
                ${mov.EBIM_TIPOMOV}
                ${mov.EBIM_FECHA_MOV}
                ${mov.EBIM_DIAS_COBRO}
                ${mov.EBIM_SAL_BASE}
                ${mov.SUMA}
                ${idx}`}
            mov={mov}
          />
        ))}
      </tbody>
    </table>
  )
}

export default TableCuotaEmiBimestral