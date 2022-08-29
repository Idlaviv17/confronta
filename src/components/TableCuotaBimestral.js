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
          <td className='p-0'>${cuota.ULTIMOSDI}</td>
          <td className='p-0'>{cuota.COTIZADOS_BIM}</td>
          <td className='p-0'>{cuota.INCAPACIDADES_BIM}</td>
          <td className='p-0'>{cuota.AUSENTISMOS_BIM}</td>
          <td className='p-0'>${cuota.C_RETIRO}</td>
          <td className='p-0'>${cuota.C_CYV_PAT}</td>
          <td className='p-0'>${cuota.C_CYV_TRAB}</td>
          <td className='p-0'>{cuota.CREDINFO}</td>
          <td className='p-0'>{cuota.TIP_DSC}</td>
          <td className='p-0'>{cuota.VAL_DSC}</td>
          <td className='p-0'>${cuota.APO_PAT_INFONAVIT}</td>
          <td className='p-0'>${cuota.AMOR_INFONAVIT}</td>
          <td className='p-0'>${cuota.SUMA_INFO}</td>
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
