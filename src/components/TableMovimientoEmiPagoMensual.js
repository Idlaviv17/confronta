const TableMovimientoEmiPagoMensual = ({ mov }) => {
  return (
    <tr className='hover'>
      <td>{mov.EMIM_TIPOMOV}</td>
      <td>{mov.EMIM_FECHA_MOV}</td>
      <td>{mov.EMIM_DIAS_COBRO}</td>
      <td>{mov.EMIM_SAL_BASE}</td>
      <td>{mov.EMIM_IMP_EYM_FIJA}</td>
      <td>{mov.EMIM_IMP_EYM_EXCE_O}</td>
      <td>{mov.EMIM_IMP_EYM_PRES_O}</td>
      <td>{mov.EMIM_IMP_EYM_ESPE_O}</td>
      <td>{mov.EMIM_IMP_RT}</td>
      <td>{mov.EMIM_IMP_IV_O}</td>
      <td>{mov.EMIM_IMP_GUAR}</td>
      <td>{mov.SUMA}</td>
    </tr>
  )
}

export default TableMovimientoEmiPagoMensual
