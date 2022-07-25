const TableMovimientoEmiPagoMensual = ({ mov }) => {
  return (
    <tr className='hover'>
      <th>{mov.EMIM_TIPOMOV}</th>
      <th>{mov.EMIM_FECHA_MOV}</th>
      <th>{mov.EMIM_DIAS_COBRO}</th>
      <th>{mov.EMIM_SAL_BASE}</th>
      <th>{mov.EMIM_IMP_EYM_FIJA}</th>
      <th>{mov.EMIM_IMP_EYM_EXCE_O}</th>
      <th>{mov.EMIM_IMP_EYM_PRES_O}</th>
      <th>{mov.EMIM_IMP_EYM_ESPE_O}</th>
      <th>{mov.EMIM_IMP_RT}</th>
      <th>{mov.EMIM_IMP_IV_O}</th>
      <th>{mov.EMIM_IMP_GUAR}</th>
      <th>{mov.SUMA}</th>
    </tr>
  )
}

export default TableMovimientoEmiPagoMensual
