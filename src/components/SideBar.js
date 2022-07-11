import { FaRegSave } from 'react-icons/fa'
import { MdCorporateFare } from 'react-icons/md'
import { BsFileEarmarkPerson } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const SideBar = () => {
  const navigate = useNavigate()

  return (
    <div className='sidebar'>
      <div className='avatar placeholder justify-center mt-3 mb-3 mx-auto'>
        <div className='ring ring-primary bg-slate-100 text-neutral-content rounded-full w-16'>
          <span className='text-xl text-primary'>AG</span>
        </div>
      </div>
      <ul className='menu w-56 p-2 rounded-box bg-gray-50'>
        <li>
          <a onClick={() => navigate('/nrp')}>
            <BsFileEarmarkPerson className='h-5 w-5' />
            Registros Patronales
          </a>
          <a onClick={() => navigate('/sua')}>
            <FaRegSave className='h-5 w-5' />
            Disco de Pago
          </a>
          <a onClick={() => navigate('/emision')}>
            <MdCorporateFare className='h-5 w-5' />
            Emisión IDSE
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
