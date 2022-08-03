import TableMovimientoCuotaBimestral from './TableMovimientoCuotaBimestral'

const TableCuotaBimestral = ({ cuota }) => {
  return (
    <table className='table table-fixed table-compact w-full'>
      <thead>
        <tr className='hover'>
          <td className='stop-stretching'>{cuota.NUMAFIL}</td>
          <td style={{ width: 200 }}>{cuota.NOMBRE}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>{cuota.CURP}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr className='hover'>
          <td>${cuota.ULTIMOSDI}</td>
          <td>{cuota.COTIZADOS_BIM}</td>
          <td>{cuota.INCAPACIDADES_BIM}</td>
          <td>{cuota.AUSENTISMOS_BIM}</td>
          <td>${cuota.C_RETIRO}</td>
          <td>${cuota.C_CYV_PAT}</td>
          <td>${cuota.C_CYV_TRAB}</td>
          <td>{cuota.CREDINFO}</td>
          <td>{cuota.TIP_DSC}</td>
          <td>{cuota.VAL_DSC}</td>
          <td>${cuota.APO_PAT_INFONAVIT}</td>
          <td>${cuota.AMOR_INFONAVIT}</td>
          <td>${cuota.SUMA_INFO}</td>
        </tr>
        {cuota.MOVS.map((mov, idx) => (
          <TableMovimientoCuotaBimestral
            key={`
                ${mov.TIPOMOV}
                ${mov.FECHAMOVD}
                ${mov.SDIN}
                ${mov.DIASINCIDENCIA}
                ${mov.FOLIOINC}
                ${idx}`}
            mov={mov}
          />
        ))}
      </tbody>
    </table>
  )
}

export default TableCuotaBimestral
