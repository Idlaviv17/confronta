import React from 'react'
import TableCuotaMensual from './TableCuotaMensual'

// The component needs React.forwardRef() in order for the pdf converter to work
const TablePagoMensualSua = React.forwardRef(({ info, filter }, ref) => {
  const header = info.header
  const body = info.body
  const footer = info.footer
  return (
    <div ref={ref}>
      <div className='overflow-x-auto mt-2'>
        <table className='table table-compact w-full'>
          <caption className='text-xl m-2 font-medium'>CÉDULA DE AUTODETERMINACIÓN DE CUOTAS</caption>
          <tbody className='p-0 pr-0'>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold '>Fecha :</span> {header.FECHA} 
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'> Población :</span> {header.POBMUNDEL}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Registro Patronal :</span> {header.REGPATRON} 
                  <span className='font-medium hover:font-bold'> RFC :</span> {header.RFCPATRON}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Area Geográfica :</span> {header.AREAGEO}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Nombre o Razón Social :</span> {header.RAZONSOCIAL}
                </td>
                <td className='p-0'>
                <span className='font-medium hover:font-bold'>Del :</span> {header.DELIMSS}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                <span className='font-medium hover:font-bold'>Domicilio :</span> {header.CALLENOCOL}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>SubDel :</span> {header.SUBDELIMSS}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Código Postal :</span> {header.CODPOS} 
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Prima RT :</span> {header.PRIMART}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Actividad :</span> {header.ACTECO} 
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Mes y Año del Proceso :</span> {`${header.MES} / ${header.ANO}`}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          <table className='table table-fixed table-compact w-full'>
            <thead>
              <tr >
                <th className='stop-stretching p-0'>No Afiliación</th>
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
              </tr>
              <tr>
                <th  className='p-0'>Último SDI</th>
                <th className='p-0'>Dias Cot.</th>
                <th className='p-0'>Incap.</th>
                <th className='p-0'>Aus.</th>
                <th className='p-0'>C.F.</th>
                <th className='p-0'>Exc.</th>
                <th className='p-0'>P.D.</th>
                <th className='p-0'>G.M.P</th>
                <th className='p-0'>R.T</th>
                <th className='p-0'>I.V</th>
                <th className='p-0'>G.P.S</th>
                <th className='p-0'>Suma</th>
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
                <td  className='p-0'>
                  <span className='font-medium hover:font-bold'>Número de trabajadores :</span> {footer.TOTAL_COTIZANTES} 
                </td>
                <td  className='p-0'>
                  <span className='font-medium hover:font-bold'> Prestaciones en Dinero :</span> ${footer.CT_PD}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Número de días cotizados :</span> {footer.RTOTAL0} 
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Gastos Médicos Pensionados :</span> ${footer.CT_GMP}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Número de Incapacidades :</span> {footer.INCAPACIDADES}
                </td>
                <td className='p-0'>
                <span className='font-medium hover:font-bold'>Riesgos de Trabajos :</span> ${footer.CT_RT}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                <span className='font-medium hover:font-bold'>Número de Ausentismos :</span> {footer.AUSENTISMOS}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Invalidez y Vida :</span> ${footer.CT_IYV}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Cuota Fija :</span> ${footer.CT_EYM} 
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Guarderías y Prestaciones Sociales :</span> ${footer.CT_GPS}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Excedente 3 SMGDF :</span> ${footer.CT_EXCEDE} 
                </td>
                <td className='p-0'>
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