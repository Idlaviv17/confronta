import React from 'react'
import TableCuotaMensual from './TableCuotaMensual'

// The component needs React.forwardRef() in order for the pdf converter to work
const TablePagoMensualSua = React.forwardRef(({ info, filter }, ref) => {
  const header = info.header
  const body = info.body
  const footer = info.footer
  return (
    <div ref={ref}>
      <div className='overflow-x-auto mt-4'>
        <table className='table table-compact w-full'>
          <caption className='text-xl m-2 font-medium'>CÉDULA DE AUTODETERMINACIÓN DE CUOTAS</caption>
          <tbody>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Fecha :</span> {header.FECHA} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'> Población :</span> {header.POBMUNDEL}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Registro Patronal :</span> {header.REGPATRON} 
                  <span className='font-medium hover:font-bold'> RFC :</span> {header.RFCPATRON}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Area Geográfica :</span> {header.AREAGEO}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Nombre o Razón Social :</span> {header.RAZONSOCIAL}
                </td>
                <td>
                <span className='font-medium hover:font-bold'>Del :</span> {header.DELIMSS}
                </td>
              </tr>
              <tr>
                <td>
                <span className='font-medium hover:font-bold'>Domicilio :</span> {header.CALLENOCOL}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>SubDel :</span> {header.SUBDELIMSS}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Código Postal :</span> {header.CODPOS} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Prima RT :</span> {header.PRIMART}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Actividad :</span> {header.ACTECO} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Mes y Año del Proceso :</span> {`${header.MES} / ${header.ANO}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          <table className='table table-fixed table-compact w-full'>
            <thead>
              <tr>
                <th className='stop-stretching'>No Afiliación</th>
                <th>Nombre</th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th>CURP</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <th>Último SDI</th>
                <th>Dias Cot.</th>
                <th>Incap.</th>
                <th>Aus.</th>
                <th>C.F.</th>
                <th>Exc.</th>
                <th>P.D.</th>
                <th>G.M.P</th>
                <th>R.T</th>
                <th>I.V</th>
                <th>G.P.S</th>
                <th>Suma</th>
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
              </tr>
            </thead>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          { 
            filter === '' 
            ? body.map((cuota) => <TableCuotaMensual key={cuota.NUMAFIL} cuota={cuota} />) // If the filter is empty, displays everything
            : body
              .filter(cuota => // If the filter is not empty, filters the info by social security number or by name
                cuota.NOMBRE.toLowerCase().includes(filter.toLowerCase()) 
                || cuota.NUMAFIL.toLowerCase().includes(filter.toLowerCase()) )
              .map((cuota) => <TableCuotaMensual key={cuota.NUMAFIL} cuota={cuota} />)
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
                  <span className='font-medium hover:font-bold'>Número de trabajadores :</span> {footer.TOTAL_COTIZANTES} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'> Prestaciones en Dinero :</span> ${footer.CT_PD}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Número de días cotizados :</span> {footer.RTOTAL0} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Gastos Médicos Pensionados :</span> ${footer.CT_GMP}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Número de Incapacidades :</span> {footer.INCAPACIDADES}
                </td>
                <td>
                <span className='font-medium hover:font-bold'>Riesgos de Trabajos :</span> ${footer.CT_RT}
                </td>
              </tr>
              <tr>
                <td>
                <span className='font-medium hover:font-bold'>Número de Ausentismos :</span> {footer.AUSENTISMOS}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Invalidez y Vida :</span> ${footer.CT_IYV}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Cuota Fija :</span> ${footer.CT_EYM} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Guarderías y Prestaciones Sociales :</span> ${footer.CT_GPS}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Excedente 3 SMGDF :</span> ${footer.CT_EXCEDE} 
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Total Periodo :</span> ${footer.SUBTOTAL_SEG}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
  </div>
 )
})

export default TablePagoMensualSua