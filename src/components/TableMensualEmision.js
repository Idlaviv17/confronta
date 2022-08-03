import React from 'react'
import TableCuotaEmiMensual from './TableCuotaEmiMensual'

// The component needs React.forwardRef() in order for the pdf converter to work
const TableMensualEmision = React.forwardRef(({ info, filter }, ref) => {
  const header = info.header
  const body = info.body
  const footer = info.footer
  return (
    <div ref={ref}>
      <div className='overflow-x-auto mt-4'>
        <table className='table table-compact w-full'>
          <caption className='text-xl m-2 font-medium'>CONSULTA DE LIQUIDACIONES EMITIDAS IMSS</caption>
          <tbody>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Fecha de impresión:</span> {header.FECHA} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'> Mes y año del proceso :</span> {`${header.MES}/${header.ANO}`}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Registro Patronal :</span> {header.REGPATRON} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'> Delegación :</span> {header.EMIP_DEL}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Nombre o Razón Social :</span> {header.EMIP_NOM_PATRON} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>SubDelegación :</span> {header.EMIP_SUB}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Domicilio:</span> {header.EMIP_DOM}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Trabajadores cotizantes :</span> {header.EMIP_NUM_TRAB_COT}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Actividad :</span> {header.EMIP_ACT}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Prima RT :</span> {header.EMIP_PRIMA_RT}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          <table className='table table-fixed table-compact w-full'>
            <thead>
              <tr>
                <th className='stop-stretching'>No. Seguro Social</th>
                <th>Nombre</th>
                <th></th>
                <th></th>
                <th></th>
                <th>ExcPat</th>
                <th>PD Pat</th>
                <th>GMP Pat</th>
                <th></th>
                <th>IV Pat</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Movimiento</th>
                <th>Fecha</th>
                <th>Días</th>
                <th>SDI</th>
                <th>C.F.</th>
                <th>Exc.Obr</th>
                <th>PD Obr</th>
                <th>GMP Obr</th>
                <th>R.T.</th>
                <th>IV Obr</th>
                <th>G.P.S</th>
                <th>Suma</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          {
            filter === '' 
            ? body.map((cuota) => <TableCuotaEmiMensual key={cuota.EMIA_NUMAFIL} cuota={cuota} />) // If the filter is empty, displays everything
            : body
              .filter(cuota => // If the filter is not empty, filters the info by social security number or by name
                cuota.EMIA_NOM_TRAB.toLowerCase().includes(filter.toLowerCase()) 
                || cuota.EMIA_NUMAFIL.toLowerCase().includes(filter.toLowerCase()) )
              .map((cuota) => <TableCuotaEmiMensual key={cuota.EMIA_NUMAFIL} cuota={cuota} />)
          }
        </div>
        <div className='overflow-x-auto mt-5'>
          <table className='table table-compact w-full'>
            <thead>
              <tr>
                <td>TOTALES</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>No. Días Cotizados :</span> {footer.EMIP_DIAS} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'> No.Cotizantes :</span> {footer.EMIP_NUM_TRAB_COT}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Cuota Fija :</span> ${footer.SUMA_EMIM_IMP_EYM_FIJA} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Gastos Médicos Pat :</span> ${footer.SUMA_EMIM_IMP_EYM_ESPE}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Excedente Pat :</span> ${footer.SUMA_EMIM_IMP_EYM_EXCE}
                </td>
                <td>
                <span className='font-medium hover:font-bold'>Gastos Médicos Obr :</span> ${footer.SUMA_EMIM_IMP_EYM_ESPE_O}
                </td>
              </tr>
              <tr>
                <td>
                <span className='font-medium hover:font-bold'>Excedente Obr :</span> ${footer.SUMA_EMIM_IMP_EYM_EXCE_O}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Invalidez y Vida Pat :</span> ${footer.SUMA_EMIM_IMP_IV}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Prest. en Dinero Pat :</span> ${footer.SUMA_EMIM_IMP_EYM_PRES} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Invalidez y Vida Obr :</span> ${footer.SUMA_EMIM_IMP_IV_O}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Prest. en Dinero Obr :</span> ${footer.SUMA_EMIM_IMP_EYM_PRES_O} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>G.P.S :</span> ${footer.SUMA_EMIM_IMP_GUAR}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Riesgo de Trabajo :</span> ${footer.SUMA_EMIM_IMP_RT} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Suma :</span> ${footer.SUMA_FINAL}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
 )
})

export default TableMensualEmision