import React from 'react'
import TableCuotaEmiBimestral from "./TableCuotaEmiBimestral"

// The component needs React.forwardRef() in order for the pdf converter to work

const TableBimestralEmision = React.forwardRef(({ info, filter }, ref) => {
  const header = info.header
  const body = info.body
  const footer = info.footer
  return (
    <div ref={ref}>
      <div className='overflow-x-auto mt-4'>
        <table className='table table-compact w-full'>
          <caption className='text-xl m-2 font-medium'>CONSULTAS DE LIQUIDACIONES EMITIDAS DE R.C.V.</caption>
          <tbody>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Fecha:</span> {header.FECHA} 
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Registro Patronal :</span> {header.REGPATRON} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'> Bim y Año del proceso :</span> {`${header.EBIP_BIM_EMISI}/${header.EBIP_ANU_EMISI}`}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Nombre o Razón Social :</span> {header.EBIP_NOM_PATRON} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Delegación :</span> {header.EBIP_DEL}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Domicilio:</span> {header.EBIP_DOM}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>SubDelegación :</span> {header.EBIP_SUB}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Actividad :</span> {header.EBIP_ACT}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Trabajadores Cotizantes :</span> {header.EBIP_NUM_TRAB_COT}
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
                <th></th>
                <th></th>
                <th>T/PEN</th>
                <th>Crédito</th>
                <th>Tipo Amor</th>
                <th>%/VSM</th>
                <th>Fecha de Inicio</th>
              </tr>
              <tr>
                <th>Movimiento</th>
                <th>Fecha</th>
                <th>T/T</th>
                <th>J/R</th>
                <th>Días</th>
                <th>Salario</th>
                <th>Retiro</th>
                <th>CV Pat</th>
                <th>CV Obr</th>
                <th>Suma</th>
                <th>INFONAVIT</th>
                <th>Amortización</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          {
            filter === '' 
            ? body.map((cuota) => <TableCuotaEmiBimestral key={cuota.EBIA_NUMAFIL} cuota={cuota} />) // If the filter is empty, displays everything
            : body
              .filter(cuota => // If the filter is not empty, filters the info by social security number or by name
                cuota.EBIA_NOM_TRAB.toLowerCase().includes(filter.toLowerCase()) 
                || cuota.EBIA_NUMAFIL.toLowerCase().includes(filter.toLowerCase()) )
              .map((cuota) => <TableCuotaEmiBimestral key={cuota.EBIA_NUMAFIL} cuota={cuota} />)
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
                  <span className='font-medium hover:font-bold'>No. de Trabajadores Cotizantes :</span> {footer.NUM_TRAB_COT} 
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>No. de Trabajadores Acreditados :</span> {footer.EBIP_TOT_CRED} 
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>No. de Días Cotizados :</span> {footer.SUMA_EBIM_DIAS_COBRO}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Retiro :</span> ${footer.SUMA_EBIM_IMP_RETIRO}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>INFONAVIT :</span> ${footer.SUMA_EBIM_IMP_INF}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Cesantía y Vejez Patronal :</span> ${footer.SUMA_EBIM_IMP_CYV} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Amortización :</span> ${footer.SUMA_EBIM_IMP_AMOR}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Cesantía y Vejez Obrero :</span> ${footer.SUMA_EBIM_IMP_CYV_O} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Subtotal INFONAVIT :</span> ${footer.SUBTOTAL_INFONAVIT}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Subtotal Cesantía y Vejez :</span> ${footer.SUMA_SUMA} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Total Emisión :</span> ${footer.TOTAL}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
 )
})

export default TableBimestralEmision