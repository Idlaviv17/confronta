import Sidebar from './SideBar'

// The 'children' in this case will be the APP component
const Layout = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <Sidebar />
      <div className='main-container'>{children}</div>
    </div>
  )
}

export default Layout
