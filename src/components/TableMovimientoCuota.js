const TableMovimientoCuota = ({ mov }) => {
  return (
    <tr>
      <td></td>
      <td>{mov.TIPOMOV}</td>
      <td></td>
      <td></td>
      <td></td>
      <td>{mov.FECHAMOVD}</td>
      <td></td>
      <td>{mov.SDIN}</td>
      <td>{mov.DIASINCIDENCIA}</td>
      <td>{mov.FOLIOINC}</td>
      <td></td>
      <td></td>
    </tr>
  )
}

export default TableMovimientoCuota
