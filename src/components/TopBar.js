import { useNavigate } from 'react-router-dom'

const TopBar = ({ btns }) => {
  const navigate = useNavigate()

  return (
    <div className='top-bar'>
      <div className='navbar-star hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          {btns.map(elem => {
            return (
              <li key={elem.name}>
                <a onClick={() => navigate(elem.to, { replace:false })}>
                  {elem.name}
                </a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className='navbar-center'></div>
      <div className='navbar-end'></div>
    </div>
  )
}

export default TopBar
