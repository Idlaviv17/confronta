import TableMovimientoCuotaMensual from './TableMovimientoCuotaMensual'

const TableCuotaMensual = ({ cuota }) => {
  return (
    <table className='table table-fixed table-compact w-full'>
      <thead>
        <tr className='hover'>
          <td className='stop-stretching'>{cuota.NUMAFIL}</td>
          <td className='p-0'>{cuota.NOMBRE}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className='p-0'>{cuota.CURP}</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr className='hover'>
          <td className='p-0'>${cuota.ULTIMOSDI}</td>
          <td className='p-0'>{cuota.COTIZADOS}</td>
          <td className='p-0'>{cuota.INCAPACIDADES}</td>
          <td className='p-0'>{cuota.AUSENTISMOS}</td>
          <td className='p-0'>${cuota.C_EYM}</td>
          <td className='p-0'>${cuota.C_EXCEDE}</td>
          <td className='p-0'>${cuota.C_PD}</td>
          <td className='p-0'>${cuota.C_GMP}</td>
          <td className='p-0'>${cuota.C_RT}</td>
          <td className='p-0'>${cuota.C_IYV}</td>
          <td className='p-0'>${cuota.C_GPS}</td>
          <td className='p-0'>${cuota.SUMA}</td>
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
