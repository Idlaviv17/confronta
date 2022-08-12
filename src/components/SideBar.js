import { FaRegSave } from 'react-icons/fa'
import { MdCorporateFare } from 'react-icons/md'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import { BiLogOut } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import useLogout from "../hooks/useLogout"

const SideBar = () => {
  const navigate = useNavigate() // Used to change the current route 
  const logout = useLogout() // Logout hook

  const signOut = async () => { // Logout handler
    await logout()
    navigate('/')
  }

  return (
    <div className='sidebar'>
      <div className='avatar placeholder justify-center mt-3 mb-3 mx-auto'>
        <div className='ring ring-primary bg-slate-100 text-neutral-content rounded-full w-16'>
          <span className='text-xl text-primary'>AG</span>
        </div>
      </div>
      <ul className='menu w-56 p-2 rounded-box bg-gray-50'>
        <li>
          <a onClick={() => navigate('/nrp')}> {/* Navigate to the NRP section */}
            <BsFileEarmarkPerson className='h-5 w-5' />
            Registros Patronales
          </a>
          <a onClick={() => navigate('/sua')}> {/* Navigate to the SUA section */}
            <FaRegSave className='h-5 w-5' />
            Disco de Pago
          </a>
          <a onClick={() => navigate('/emision')}> {/* Navigate to the Emission section */}
            <MdCorporateFare className='h-5 w-5' />
            Emisión IDSE
          </a>
          <a className='fixed bottom-2' onClick={signOut}> {/* Logout of the app */}
            <BiLogOut className='h-5 w-5' />
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
