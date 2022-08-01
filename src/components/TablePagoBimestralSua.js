import React from 'react'
import TableCuotaBimestral from "./TableCuotaBimestral"

const TablePagoBimestralSua = React.forwardRef(({ info }, ref) => {
  const header = info.header
  const body = info.body
  const footer = info.footer
  return (
    <div ref={ref}>
      <div className='overflow-x-auto mt-4'>
        <table className='table table-compact w-full'>
          <caption className='text-xl m-2 font-medium'>CÉDULA DE AUTODETERMINACIÓN DE CUOTAS, APORTACIONES Y AMORTIZACIONES</caption>
          <tbody>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Fecha :</span> {header.FECHA}  
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Area Geográfica :</span> {header.AREAGEO}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Registro Patronal :</span> {header.REGPATRON} 
                  <span className='font-medium hover:font-bold'> RFC :</span> {header.RFCPATRON}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Aportación Patronal :</span> {header.PORINFONAVIT}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Nombre o Razón Social :</span> {header.RAZONSOCIAL}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Prima RT :</span> {header.PRIMART}
                </td>
              </tr>
              <tr>
                <td>
                <span className='font-medium hover:font-bold'>Domicilio :</span> {header.CALLENOCOL}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Del :</span> {header.DELIMSS}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Código Postal :</span> {header.CODPOS} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>SubDel :</span> {header.SUBDELIMSS}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Actividad :</span> {header.ACTECO} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Mes y Año del Proceso :</span> {`${header.MES}/${header.ANO}`}
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
                <th></th>
                <th>CURP</th>
                <th></th>
                <th>Aporta</th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Último SDI</th>
                <th>Dias Cot.</th>
                <th>Incap.</th>
                <th>Aus.</th>
                <th>Retiro</th>
                <th>CyV Patrón</th>
                <th>CyV Trab</th>
                <th>Núm Crédito</th>
                <th>Tipo Crédito</th>
                <th>Valor Crédito</th>
                <th>Patronal</th>
                <th>Amort</th>
                <th>Suma Info</th>
              </tr>
              <tr>
                <th></th>
                <th>Movimiento</th>
                <th></th>
                <th></th>
                <th></th>
                <th>Fecha</th>
                <th></th>
                <th>SDIN</th>
                <th>Días</th>
                <th>Folio</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          {body.map((cuota) => <TableCuotaBimestral key={cuota.NUMAFIL} cuota={cuota} />)}
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
                  <span className='font-medium hover:font-bold'>Número de trabajadores :</span> {footer.TRABCOTIZANTES} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'> Retiro :</span> {footer.CT_RET}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'> Aportación Patronal sin Crédito :</span> {footer.T_APO_PAT_CI}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Número de acreditados :</span> {footer.NUM_ACREDITADOS}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Cesantía y Vejez :</span> {footer.CT_CYV}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Aportación Patronal con Crédito :</span> {footer.T_APO_PAT_AMOR}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Días cotizados :</span> {footer.DIASCOTIZADOS}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Total RCV :</span> {footer.SUBTOTAL_RETCYV}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Amortización :</span> {footer.T_AMOR_INFO}
                </td>
              </tr>
              <tr>
                <td>
                <span className='font-medium hover:font-bold'>Días incapacidad :</span> {footer.SUMA_INCAPACIDAD}
                </td>
                <td>
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Total a Pagar INFONAVIT :</span> {footer.TOTAL_INFO}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Ausentismos en Movimientos :</span> {footer.SUMA_AUSENTISMO}
                </td>
                <td>
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Total :</span> {footer.SUMA_BIM} 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
 )
})

export default TablePagoBimestralSua