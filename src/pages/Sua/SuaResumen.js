import React, { useEffect, useState } from 'react'
import TopBar from '../../components/TopBar'
import axios from 'axios'

const SuaResumen = () => {
  const [info, setInfo] = useState({})

  /*useEffect(() => {
    ;(async () => {
      const ANO = 2020
      const MES = '12'
      const REGPATRON = 'E6029854107'
      try {
        const res = await axios.get('/api/sua/patron', {
          params: { ANO, MES, REGPATRON },
        })
        setInfo(processInfo)
      } catch (err) {
        alert('Existe un problema al leer el patrón')
      }
    })()

    return () => {}
  }, [])*/

  const processInfo = (info) => {
    return {
      fecha: '',
      mes: '',
      bimestre: '',
      ano: ''
    }
  }

  const topBarBtns = [
    {
      name: 'Leer Disco',
      to: '/sua',
    },
    {
      name: 'Resumen',
      to: '/sua/resumen',
    },
  ]

  return (
    <div>
      <TopBar btns={topBarBtns} />
      <div className='m-[100px]'>
        <div className='overflow-x-auto mt-4'>
          <table className='table table-compact w-full'>
            <caption className='text-xl m-2 font-medium'>REPORTE RESUMEN DE PAGO</caption>
            <tbody>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Fecha :</span> 12/07/2020 
                  <span className='font-medium hover:font-bold'> Mes :</span> 12 
                  <span className='font-medium hover:font-bold'> Bimestre :</span> 6 
                  <span className='font-medium hover:font-bold'> Año :</span> 2020
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Área Geográfica :</span> B
                  <span className='font-medium hover:font-bold'> Convenio :</span> N
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Registro Patronal :</span> E6029854107
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Folio :</span> 205482
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Nombre o Razón Social :</span> GRUPO OJAI S DE RL DE CV
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Prima RT :</span> 7.679430 
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>RFC :</span> GOC900927924
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>Del :</span> SONORA
                </td>
              </tr>
              <tr>
                <td>
                  <span className='font-medium hover:font-bold'>Domicilio :</span> JALISCO 511 NORTE U ALTOS COL ZONA NORTE 
                  <span className='font-medium hover:font-bold'> Población :</span> CAJEME
                </td>
                <td>
                  <span className='font-medium hover:font-bold'>SubDel :</span> CD. OBREGON
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
                <td>427,686.79</td>
              </tr>
              <tr className='hover'>
                <td>Excedente 3 SMGD</td>
                <td></td>
                <td>18,278.41</td>
              </tr>
              <tr className='hover'>
                <td>Prestaciones en Dinero</td>
                <td></td>
                <td>62,640.68</td>
              </tr>
              <tr className='hover'>
                <td>Gastos Médicos Pensionados</td>
                <td></td>
                <td>93,960.77</td>
              </tr>
              <tr className='hover'>
                <td>Riesgos De Trabajos</td>
                <td></td>
                <td>500,229.97</td>
              </tr>
              <tr className='hover'>
                <td>Invalidez y Vida</td>
                <td></td>
                <td>154,705.11</td>
              </tr>
              <tr className='hover'>
                <td>Guarderías y prestaciones sociales</td>
                <td></td>
                <td>65,138.97</td>
              </tr>
              <tr className='hover'>
                <td>SUB TOTAL</td>
                <td></td>
                <td>1,322,640.70</td>
              </tr>
              <tr className='hover'>
                <td>Actualización</td>
                <td></td>
                <td>0.00</td>
              </tr>
              <tr className='hover'>
                <td>Recargos</td>
                <td></td>
                <td>0.00</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th>TOTAL</th>
                <td>$18,278.41</td>
              </tr>

              <tr>
                <th>Para Abono en Cuenta Individual</th>
              </tr>
              <tr className='hover'>
                <td>Retiro</td>
                <td></td>
                <td>258,413.79</td>
              </tr>
              <tr className='hover'>
                <td>Cesantía y Vejez</td>
                <td></td>
                <td>548,296.20</td>
              </tr>
              <tr className='hover'>
                <td>SUB TOTAL</td>
                <td></td>
                <td>806,709.99</td>
              </tr>
              <tr className='hover'>
                <td>Actualización</td>
                <td></td>
                <td>0.00</td>
              </tr>
              <tr className='hover'>
                <td>Recargos</td>
                <td></td>
                <td>0.00</td>
              </tr>
              <tr className='hover'>
                <td>Aportaciones Voluntarias</td>
                <td></td>
                <td>0.00</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th>TOTAL</th>
                <td>$806,709.99</td>
              </tr>

              <tr>
                <th>Para Abono en Cuenta INFONAVIT</th>
              </tr>
              <tr className='hover'>
                <td>Aportación Patronal Sin Crédito</td>
                <td></td>
                <td>511,261.99</td>
              </tr>
              <tr className='hover'>
                <td>Aportación Patronal con Crédito</td>
                <td></td>
                <td>134,772.99</td>
              </tr>
              <tr className='hover'>
                <td>Amortización</td>
                <td></td>
                <td>482,905.14</td>
              </tr>
              <tr className='hover'>
                <td>SUB TOTAL</td>
                <td></td>
                <td>1,128,940.12</td>
              </tr>
              <tr className='hover'>
                <td>Actualización de Aportaciones y Amortizaciones</td>
                <td></td>
                <td>0.00</td>
              </tr>
              <tr className='hover'>
                <td>Recargos de Aportaciones y Amortizaciones</td>
                <td></td>
                <td>0.00</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th>TOTAL</th>
                <td>$1,128,940.12</td>
              </tr>

              <tr>
                <th>Totales</th>
              </tr>
              <tr className='hover'>
                <td>Total de Acreditados</td>
                <td></td>
                <td>0</td>
              </tr>
              <tr className='hover'>
                <td>Total de Días Cotizados</td>
                <td></td>
                <td>47,614</td>
              </tr>
              <tr className='hover'>
                <td>Número de trabajadores cotizantes</td>
                <td></td>
                <td>874</td>
              </tr>
              <tr className='hover'>
                <td></td>
                <th>TOTAL A PAGAR</th>
                <td>$3,258,290.81</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SuaResumen
