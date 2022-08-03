import { useNavigate } from 'react-router-dom'

const TopBar = ({ btns }) => {
  const navigate = useNavigate() // Used to change the current route 

  return (
    <div className='top-bar'>
      <div className='navbar-star hidden lg:flex'>
        <ul className='menu menu-horizontal p-0'>
          {btns.map(elem => { // Generates a button from every object in the array
            return (
              <li key={elem.name}>
                <a onClick={() => navigate(elem.to, { replace: false })}> {/* Navigates to the route without altering the previous one */}
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
