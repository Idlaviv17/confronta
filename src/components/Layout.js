import Sidebar from './SideBar'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='main-container'>{children}</div>
    </div>
  )
}

export default Layout
