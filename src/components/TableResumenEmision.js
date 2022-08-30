import React from 'react'

// The component needs React.forwardRef() in order for the pdf converter to work
const TableResumenEmision = React.forwardRef(({ info }, ref) => {
  return (
    <div ref={ref}>
      <div className='overflow-x-auto mt-4'>
          <table className='table table-compact w-full'>
            <caption className='text-xl m-2 font-medium'>RESUMEN DE LA EMISIÓN IMSS - INFONAVIT</caption>
            <tbody>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Fecha :</span> {info.FECHA} 
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Prima RT :</span> {info.EMIP_PRIMA_RT}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Nombre o Razón Social :</span> {info.EMIP_NOM_PATRON}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Delegación :</span> {info.EMIP_DEL}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Registro Patronal :</span> {info.REGPATRON}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>SubDelegación :</span> {info.EMIP_SUB}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Domicilio :</span> {info.EMIP_DOM}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Mes :</span> {info.MES} 
                  <span className='font-medium hover:font-bold'> Bimestre :</span> {info.BIM} 
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Población :</span> {info.EMIP_LOC}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Año :</span> {info.ANO}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          <table className='table table-compact w-full'>
            <thead>
              <tr>
                <th>Descripción</th>
                <th></th>
                <th>Importe</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Para Abono en Cuenta IMSS</th>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Cuota Fija</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_EYM_FIJA}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Excedente 3 SMGD Patrón</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_EYM_EXCE}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Excedente 3 SMGD Obr</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_EYM_EXCE_O}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Prestaciones en Dinero Patrón</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_EYM_PRED}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Prestaciones en Dinero Obr</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_EYM_PRED_O}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Gastos Médicos Pensionados Patrón</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_EYM_PREE}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Gastos Médicos Pensionados Obr</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_EYM_PREE_O}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Riesgos De Trabajos</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_RIES_TRA}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Invalidez y Vida Patrón</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_INV_VIDA}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Invalidez y Vida Obr</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_INV_VIDA_O}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Guarderías y prestaciones sociales</td>
                <td></td>
                <td className='p-0 text-right'>${info.EMIP_IMP_GUAR}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>SUB TOTAL</td>
                <td></td>
                <td className='p-0 text-right'>${info.SUBTOTAL_IMSS}</td>
              </tr>

              <tr>
                <th>Para Abono en Cuenta Individual</th>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Retiro</td>
                <td></td>
                <td className='p-0 text-right'>${info.EBIP_IMP_RETIRO}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Cesantía y Vejez Patrón</td>
                <td></td>
                <td className='p-0 text-right'>${info.EBIP_IMP_CYV}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Cesantía y Vejez Obr</td>
                <td></td>
                <td className='p-0 text-right'>${info.EBIP_IMP_CYV_O}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>SUB TOTAL</td>
                <td></td>
                <td className='p-0 text-right'>${info.EBIP_SUMA}</td>
              </tr>

              <tr>
                <th>Para Abono en Cuenta INFONAVIT</th>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Aportación Patronal</td>
                <td></td>
                <td className='p-0 text-right'>${info.EBIP_IMPOR_INFO}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Amortización</td>
                <td></td>
                <td className='p-0 text-right'>${info.EBIP_IMPOR_AMOR}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>SUB TOTAL</td>
                <td></td>
                <td className='p-0 text-right'>${info.EBIP_SUMA_INFO}</td>
              </tr>

              <tr>
                <th>Totales</th>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Total de Acreditados en INFONAVIT</td>
                <td></td>
                <td className='p-0 text-right'>{info.EBIP_TOT_CRED}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Número de Trabajadores Cotizantes en el Bimestre</td>
                <td></td>
                <td className='p-0 text-right'>{info.EBIP_NUM_TRAB_COT}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Número de Trabajadores Cotizantes en el Mes</td>
                <td></td>
                <td className='p-0 text-right'>{info.EMIP_NUM_TRAB_COT}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'></td>
                <th>TOTAL A PAGAR</th>
                <td className='p-0 text-right'>${info.TOTAL}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
})

export default TableResumenEmision