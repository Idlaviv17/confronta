const TableMovimientoEmiPagoMensual = ({ mov }) => {
  return (
    <tr className='hover'>
      <td className='p-0'>{mov.EMIM_TIPOMOV}</td>
      <td className='p-0'>{mov.EMIM_FECHA_MOV}</td>
      <td className='p-0'>{mov.EMIM_DIAS_COBRO}</td>
      <td className='p-0'>{mov.EMIM_SAL_BASE}</td>
      <td className='p-0'>{mov.EMIM_IMP_EYM_FIJA}</td>
      <td className='p-0'>{mov.EMIM_IMP_EYM_EXCE}</td>
      <td className='p-0'>{mov.EMIM_IMP_EYM_EXCE_O}</td>
      <td className='p-0'>{mov.EMIM_IMP_EYM_PRES}</td>
      <td className='p-0'>{mov.EMIM_IMP_EYM_PRES_O}</td>
      <td className='p-0'>{mov.EMIM_IMP_EYM_ESPE}</td>
      <td className='p-0'>{mov.EMIM_IMP_EYM_ESPE_O}</td>
      <td className='p-0'>{mov.EMIM_IMP_RT}</td>
      <td className='p-0'>{mov.EMIM_IMP_IV}</td>
      <td className='p-0'>{mov.EMIM_IMP_IV_O}</td>
      <td className='p-0'>{mov.EMIM_IMP_GUAR}</td>
      <td className='p-0'>{mov.SUMA}</td>
    </tr>
  )
}

export default TableMovimientoEmiPagoMensual
