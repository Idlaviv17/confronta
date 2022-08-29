import React from 'react'

// The component needs React.forwardRef() in order for the pdf converter to work
const TableResumenSua = React.forwardRef(({ info }, ref) => {
  return (
    <div ref={ref}>
      <div className='overflow-x-auto mt-4'>
          <table className='table table-compact w-full'>
            <caption className='text-xl m-2 font-medium'>REPORTE RESUMEN DE PAGO</caption>
            <tbody>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Fecha :</span> {info.FECHA} 
                  <span className='font-medium hover:font-bold'> Mes :</span> {info.MES} 
                  <span className='font-medium hover:font-bold'> Bimestre :</span> {info.BIMESTRE} 
                  <span className='font-medium hover:font-bold'> Año :</span> {info.ANO}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Área Geográfica :</span> {info.AREAGEO}
                  <span className='font-medium hover:font-bold'> Convenio :</span> {info.CONVREMBOLSO}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Registro Patronal :</span> {info.REGPATRON}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Folio :</span> {info.FOLIOSUA}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Nombre o Razón Social :</span> {info.RAZONSOCIAL}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Prima RT :</span> {info.PRIMART}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>RFC :</span> {info.RFCPATRON}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Del :</span> {info.DELIMSS}
                </td>
              </tr>
              <tr>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>Domicilio :</span> {info.CALLENOCOL} 
                  <span className='font-medium hover:font-bold'> Población :</span> {info.POBMUNDEL}
                </td>
                <td className='p-0'>
                  <span className='font-medium hover:font-bold'>SubDel :</span> {info.SUBDELIMSS}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='overflow-x-auto mt-4'>
          <table className='table table-compact w-full'>
            <thead>
              <tr className='p-0'>
                <th>Descripción</th>
                <th></th>
                <th>Importe</th>
              </tr>
            </thead>
            <tbody>
              <tr className='p-0'>
                <th  className='p-0'>Para Abono en Cuenta IMSS</th>
              </tr>
              <tr className='hover'>
                <td  className='p-0'>Cuota Fija</td>
                <td></td>
                <td className='p-0 text-right'>{info.CT_EYM}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Excedente 3 SMGD</td>
                <td></td>
                <td className='p-0 text-right'>{info.CT_EXCEDE}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Prestaciones en Dinero</td>
                <td></td>
                <td className='p-0 text-right'>{info.CT_PD}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Gastos Médicos Pensionados</td>
                <td></td>
                <td className='p-0 text-right'>{info.CT_GMP}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Riesgos De Trabajos</td>
                <td></td>
                <td className='p-0 text-right'>{info.CT_RT}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Invalidez y Vida</td>
                <td></td>
                <td className='p-0 text-right'>{info.CT_IYV}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Guarderías y prestaciones sociales</td>
                <td></td>
                <td className='p-0 text-right'>{info.CT_GPS}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0 text-right'>SUB TOTAL</td>
                <td></td>
                <td className='p-0 text-right'>{info.SUBTOTAL_SEG}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Actualización</td>
                <td></td>
                <td className='p-0 text-right'>{info.ACT_4SEG}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Recargos</td>
                <td></td>
                <td className='p-0 text-right'>{info.REC_4SEG}</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th className='p-0 text-right'>TOTAL</th>
                <td className='p-0 text-right'>${info.TOTAL_IMSS}</td>
              </tr>

              <tr>
                <th  className='p-0'>Para Abono en Cuenta Individual</th>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Retiro</td>
                <td></td>
                <td className='p-0 text-right'>{info.CT_RET}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Cesantía y Vejez</td>
                <td></td>
                <td className='p-0 text-right'>{info.CT_CYV}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0 text-right'>SUB TOTAL</td>
                <td></td>
                <td className='p-0 text-right'>{info.SUBTOTAL_RETCYV}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Actualización</td>
                <td></td>
                <td className='p-0 text-right'>{info.ACT_RETCYV}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Recargos</td>
                <td></td>
                <td className='p-0 text-right'>{info.REC_RETCYV}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Aportaciones Voluntarias</td>
                <td></td>
                <td className='p-0 text-right'>{info.T_APO_VOL}</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th className='p-0 text-right'>TOTAL</th>
                <td className='p-0 text-right'>${info.TOTAL_INDIVIDUAL}</td>
              </tr>

              <tr>
                <th  className='p-0'>Para Abono en Cuenta INFONAVIT</th>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Aportación Patronal Sin Crédito</td>
                <td></td>
                <td className='p-0 text-right'>{info.T_APO_PAT_CI}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Aportación Patronal con Crédito</td>
                <td></td>
                <td className='p-0 text-right'>{info.T_APO_PAT_AMOR}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Amortización</td>
                <td></td>
                <td className='p-0 text-right'>{info.T_AMOR_INFO}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0 text-right'>SUB TOTAL</td>
                <td></td>
                <td className='p-0 text-right'>{info.SUBTOTAL_INFONAVIT}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Actualización de Aportaciones y Amortizaciones</td>
                <td></td>
                <td className='p-0 text-right'>{info.ACT_APO_INFO}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Recargos de Aportaciones y Amortizaciones</td>
                <td></td>
                <td className='p-0 text-right'>{info.REC_APO_INFO}</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th className='p-0 text-right'>TOTAL</th>
                <td className='p-0 text-right'>${info.TOTAL_INFONAVIT}</td>
              </tr>

              <tr>
                <th className='p-0 text-right'>Totales</th>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Total de Acreditados</td>
                <td></td>
                <td className='p-0 text-right'>{info.NUM_ACREDITADOS}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Total de Días Cotizados</td>
                <td></td>
                <td className='p-0 text-right'>{info.DIASCOTIZADOS}</td>
              </tr>
              <tr className='hover'>
                <td className='p-0'>Número de trabajadores cotizantes</td>
                <td></td>
                <td className='p-0 text-right'>{info.TRABCOTIZANTES}</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th className='p-0 text-right'>TOTAL A PAGAR</th>
                <td className='p-0 text-right'>${info.TOTAL_PAGAR}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
})

export default TableResumenSua
