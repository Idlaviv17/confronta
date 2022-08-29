import React from 'react'
import TableCuotaBimestral from "./TableCuotaBimestral"

// The component needs React.forwardRef() in order for the pdf converter to work
const TablePagoBimestralSua = React.forwardRef(({ info, filter }, ref) => {
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
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Fecha :</span> {header.FECHA}  
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Area Geográfica :</span> {header.AREAGEO}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Registro Patronal :</span> {header.REGPATRON} 
                  <span className='font-medium hover:font-bold'> RFC :</span> {header.RFCPATRON}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Aportación Patronal :</span> {header.PORINFONAVIT}%
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Nombre o Razón Social :</span> {header.RAZONSOCIAL}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Prima RT :</span> {header.PRIMART}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                <span className='font-medium hover:font-bold'>Domicilio :</span> {header.CALLENOCOL}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Del :</span> {header.DELIMSS}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Código Postal :</span> {header.CODPOS} 
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>SubDel :</span> {header.SUBDELIMSS}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Actividad :</span> {header.ACTECO} 
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Bimestre y Año del Proceso :</span> {`${header.BIM} / ${header.ANO}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          <table className='table table-fixed table-compact w-full'>
            <thead>
              <tr>
                <th className='stop-stretching'>NSS</th>
                <th className='p-0'>Nombre</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th className='p-0'>CURP</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th className='p-0'>Último SDI</th>
                <th className='p-0'>Dias Cot.</th>
                <th className='p-0'>Incap.</th>
                <th className='p-0'>Aus.</th>
                <th className='p-0'>Retiro</th>
                <th className='p-0'>CyV Pat.</th>
                <th className='p-0'>CyV Tra.</th>
                <th className='p-0'>Núm Créd</th>
                <th className='p-0'>Tipo Créd</th>
                <th className='p-0'>Val Créd</th>
                <th className='p-0'>Apor Pat.</th>
                <th className='p-0'>Amort</th>
                <th className='p-0'>Suma Info</th>
              </tr>
              <tr>
                <th></th>
                <th className='p-0'>Movimiento</th>
                <th></th>
                <th></th>
                <th></th>
                <th className='p-0'>Fecha</th>
                <th></th>
                <th className='p-0'>SDIN</th>
                <th className='p-0'>Días</th>
                <th className='p-0'>Folio</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          {
            filter === '' 
            ? body.map((cuota) => <TableCuotaBimestral key={cuota.NUMAFIL} cuota={cuota} />) // If the filter is empty, displays everything
            : body
              .filter(cuota => // If the filter is not empty, filters the info by social security number or by name
                cuota.NOMBRE.toLowerCase().includes(filter.toLowerCase()) 
                || cuota.NUMAFIL.toLowerCase().includes(filter.toLowerCase()) )
              .map((cuota) => <TableCuotaBimestral key={cuota.NUMAFIL} cuota={cuota} />)
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
              <tr  className='P-0'>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Número de trabajadores :</span> {footer.TRABCOTIZANTES} 
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'> Retiro :</span> ${footer.CT_RET}
                </td>
                <td className='P-0'>
                  <span className='font-medium hover:font-bold'> Aportación Patronal sin Crédito :</span> ${footer.T_APO_PAT_CI}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Número de acreditados :</span> {footer.NUM_ACREDITADOS}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Cesantía y Vejez :</span> ${footer.CT_CYV}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Aportación Patronal con Crédito :</span> ${footer.T_APO_PAT_AMOR}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Días cotizados :</span> {footer.DIASCOTIZADOS}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Total RCV :</span> ${footer.SUBTOTAL_RETCYV}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Amortización :</span> ${footer.T_AMOR_INFO}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                <span className='font-medium hover:font-bold'>Días incapacidad :</span> {footer.SUMA_INCAPACIDAD}
                </td>
                <td>
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Total a Pagar INFONAVIT :</span> ${footer.TOTAL_INFO}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Ausentismos :</span> {footer.SUMA_AUSENTISMO}
                </td>
                <td>
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Total :</span> ${footer.SUMA_BIM} 
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
 )
})

export default TablePagoBimestralSua