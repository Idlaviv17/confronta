import { BsDisc } from 'react-icons/bs'

const SideBar = () => {
  return (
    <div className='fixed top-0 left-0 h-screen flex flex-col shadow-lg'>
      <div class='avatar placeholder justify-center mt-2 mb-2 mx-auto'>
        <div class='ring ring-primary bg-slate-100 text-neutral-content rounded-full w-16'>
          <span class='text-xl text-primary'>AG</span>
        </div>
      </div>
      <ul class='menu bg-base-100 w-56 p-2 rounded-box'>
        <li>
          <a>
            <BsDisc className='h-5 w-5' />
            Disco de Pago
          </a>
        </li>
      </ul>
    </div>
  )
}

export default SideBar
