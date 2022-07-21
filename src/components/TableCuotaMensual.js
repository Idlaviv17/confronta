import TableMovimientoCuotaMensual from './TableMovimientoCuotaMensual'

const TableCuotaMensual = ({ cuota }) => {
  return (
    <table className='table table-fixed table-compact w-full'>
      <thead>
        <tr className='hover'>
          <td className='stop-stretching'>{cuota.NUMAFIL}</td>
          <td>{cuota.NOMBRE}</td>
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
        </tr>
      </thead>
      <tbody>
        <tr className='hover'>
          <td>{cuota.ULTIMOSDI}</td>
          <td>{cuota.COTIZADOS}</td>
          <td>{cuota.INCAPACIDADES}</td>
          <td>{cuota.AUSENTISMOS}</td>
          <td>{cuota.C_EYM}</td>
          <td>{cuota.C_EXCEDE}</td>
          <td>{cuota.C_PD}</td>
          <td>{cuota.C_GMP}</td>
          <td>{cuota.C_RT}</td>
          <td>{cuota.C_IYV}</td>
          <td>{cuota.C_GPS}</td>
          <td>{cuota.SUMA}</td>
        </tr>
        {cuota.MOVS.map((mov, idx) => (
          <TableMovimientoCuotaMensual
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

export default TableCuotaMensual
