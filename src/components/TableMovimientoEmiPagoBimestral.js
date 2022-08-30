const TableMovimientoEmiPagoBimestral = ({ mov }) => {
  return (
    <tr className='hover'>
      <td className='p-0'>{mov.EBIM_TIPOMOV}</td>
      <td className='p-0'>{mov.EBIM_FECHA_MOV}</td>
      <td className='p-0'>{mov.EBIA_TIPO_TRAB}</td>
      <td className='p-0'>{mov.EBIA_JOR_SEM_RED}</td>
      <td className='p-0'>{mov.EBIM_DIAS_COBRO}</td>
      <td className='p-0'>{mov.EBIM_SAL_BASE}</td>
      <td className='p-0'>{mov.EBIM_IMP_RETIRO}</td>
      <td className='p-0'>{mov.EBIM_IMP_CYV}</td>
      <td className='p-0'>{mov.EBIM_IMP_CYV_O}</td>
      <td className='p-0'>{mov.SUMA}</td>
      <td className='p-0'>{mov.EBIM_IMP_INF}</td>
      <td className='p-0'>{mov.EBIM_IMP_AMOR}</td>
    </tr>
  )
}

export default TableMovimientoEmiPagoBimestral