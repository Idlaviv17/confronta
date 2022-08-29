const TableMovimientoCuota = ({ mov }) => {
  return (
    <tr className='hover'>
      <td></td>
      <td className='p-0'>{mov.TIPOMOV}</td>
      <td></td>
      <td></td>
      <td></td>
      <td className='p-0'>{mov.FECHAMOVD}</td>
      <td></td>
      <td className='p-0'>${mov.SDIN}</td>
      <td className='p-0'>{mov.DIASINCIDENCIA}</td>
      <td className='p-0'>{mov.FOLIOINC}</td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default TableMovimientoCuota
