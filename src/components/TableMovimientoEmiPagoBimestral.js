const TableMovimientoEmiPagoBimestral = ({ mov }) => {
  return (
    <tr className='hover'>
      <td>{mov.EBIM_TIPOMOV}</td>
      <td>{mov.EBIM_FECHA_MOV}</td>
      <td>{mov.EBIA_TIPO_TRAB}</td>
      <td>{mov.EBIA_JOR_SEM_RED}</td>
      <td>{mov.EBIM_DIAS_COBRO}</td>
      <td>{mov.EBIM_SAL_BASE}</td>
      <td>{mov.EBIM_IMP_RETIRO}</td>
      <td>{mov.EBIM_IMP_CYV}</td>
      <td>{mov.EBIM_IMP_CYV_O}</td>
      <td>{mov.SUMA}</td>
      <td>{mov.EBIM_IMP_INF}</td>
      <td>{mov.EBIM_IMP_AMOR}</td>
    </tr>
  )
}

export default TableMovimientoEmiPagoBimestral