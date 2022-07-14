const TableResumenSua = ({ info }) => {
  return (
    <div>
      <div className='overflow-x-auto mt-4'>
          <table className='table table-compact w-full'>
            <caption className='text-xl m-2 font-medium'>REPORTE RESUMEN DE PAGO</caption>
            <tbody>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Fecha :</span> {info.FECHA} 
                  <span className='font-medium hover:font-bold'> Mes :</span> {info.MES} 
                  <span className='font-medium hover:font-bold'> Bimestre :</span> {info.BIMESTRE} 
                  <span className='font-medium hover:font-bold'> Año :</span> {info.ANO}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Área Geográfica :</span> {info.AREAGEO}
                  <span className='font-medium hover:font-bold'> Convenio :</span> {info.CONVREMBOLSO}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Registro Patronal :</span> {info.REGPATRON}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Folio :</span> {info.FOLIOSUA}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Nombre o Razón Social :</span> {info.RAZONSOCIAL}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Prima RT :</span> {info.PRIMART}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>RFC :</span> {info.RFCPATRON}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Del :</span> {info.DELIMSS}
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Domicilio :</span> {info.CALLENOCOL} 
                  <span className='font-medium hover:font-bold'> Población :</span> {info.POBMUNDEL}
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>SubDel :</span> {info.SUBDELIMSS}
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
                <td>Cuota Fija</td>
                <td></td>
                <td>{info.CT_EYM}</td>
              </tr>
              <tr className='hover'>
                <td>Excedente 3 SMGD</td>
                <td></td>
                <td>{info.CT_EXCEDE}</td>
              </tr>
              <tr className='hover'>
                <td>Prestaciones en Dinero</td>
                <td></td>
                <td>{info.CT_PD}</td>
              </tr>
              <tr className='hover'>
                <td>Gastos Médicos Pensionados</td>
                <td></td>
                <td>{info.CT_GMP}</td>
              </tr>
              <tr className='hover'>
                <td>Riesgos De Trabajos</td>
                <td></td>
                <td>{info.CT_RT}</td>
              </tr>
              <tr className='hover'>
                <td>Invalidez y Vida</td>
                <td></td>
                <td>{info.CT_IYV}</td>
              </tr>
              <tr className='hover'>
                <td>Guarderías y prestaciones sociales</td>
                <td></td>
                <td>{info.CT_GPS}</td>
              </tr>
              <tr className='hover'>
                <td>SUB TOTAL</td>
                <td></td>
                <td>{info.SUBTOTAL_SEG}</td>
              </tr>
              <tr className='hover'>
                <td>Actualización</td>
                <td></td>
                <td>{info.ACT4SEG}</td>
              </tr>
              <tr className='hover'>
                <td>Recargos</td>
                <td></td>
                <td>{info.REC_4SEG}</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th>TOTAL</th>
                <td>${info.TOTAL_IMSS}</td>
              </tr>

              <tr>
                <th>Para Abono en Cuenta Individual</th>
              </tr>
              <tr className='hover'>
                <td>Retiro</td>
                <td></td>
                <td>{info.CT_RET}</td>
              </tr>
              <tr className='hover'>
                <td>Cesantía y Vejez</td>
                <td></td>
                <td>{info.CT_CYV}</td>
              </tr>
              <tr className='hover'>
                <td>SUB TOTAL</td>
                <td></td>
                <td>{info.SUBTOTAL_RETCYV}</td>
              </tr>
              <tr className='hover'>
                <td>Actualización</td>
                <td></td>
                <td>{info.ACT_RETCYV}</td>
              </tr>
              <tr className='hover'>
                <td>Recargos</td>
                <td></td>
                <td>{info.REC_RETCYV}</td>
              </tr>
              <tr className='hover'>
                <td>Aportaciones Voluntarias</td>
                <td></td>
                <td>{info.T_APO_VOL}</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th>TOTAL</th>
                <td>${info.TOTAL_INDIVIDUAL}</td>
              </tr>

              <tr>
                <th>Para Abono en Cuenta INFONAVIT</th>
              </tr>
              <tr className='hover'>
                <td>Aportación Patronal Sin Crédito</td>
                <td></td>
                <td>{info.T_APO_PAT_CI}</td>
              </tr>
              <tr className='hover'>
                <td>Aportación Patronal con Crédito</td>
                <td></td>
                <td>{info.T_APO_PAT_AMOR}</td>
              </tr>
              <tr className='hover'>
                <td>Amortización</td>
                <td></td>
                <td>{info.T_AMOR_INFO}</td>
              </tr>
              <tr className='hover'>
                <td>SUB TOTAL</td>
                <td></td>
                <td>{info.SUBTOTAL_INFONAVIT}</td>
              </tr>
              <tr className='hover'>
                <td>Actualización de Aportaciones y Amortizaciones</td>
                <td></td>
                <td>{info.ACT_APO_INFO}</td>
              </tr>
              <tr className='hover'>
                <td>Recargos de Aportaciones y Amortizaciones</td>
                <td></td>
                <td>{info.REC_APO_INFO}</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th>TOTAL</th>
                <td>${info.TOTAL_INFONAVIT}</td>
              </tr>

              <tr>
                <th>Totales</th>
              </tr>
              <tr className='hover'>
                <td>Total de Acreditados</td>
                <td></td>
                <td>{info.NUM_ACREDITADOS}</td>
              </tr>
              <tr className='hover'>
                <td>Total de Días Cotizados</td>
                <td></td>
                <td>{info.DIASCOTIZADOS}</td>
              </tr>
              <tr className='hover'>
                <td>Número de trabajadores cotizantes</td>
                <td></td>
                <td>{info.TRABCOTIZANTES}</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th>TOTAL A PAGAR</th>
                <td>${info.TOTAL_PAGAR}</td>
              </tr>
            </tbody>
          </table>
        </div>
    </div>
  )
}

export default TableResumenSua
