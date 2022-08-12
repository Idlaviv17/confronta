import axios from '../api/axios'
import useAuth from './useAuth'

const useLogout = () => {
  const { setAuth } = useAuth()

  const logout = async () => {
    setAuth({})
    try {
      axios.defaults.withCredentials = true
      const response = await axios.post('/logout', {
        withCredentials: true,
      })
      axios.defaults.withCredentials = false
    } catch (err) {
      console.error(err)
    }
  }

  return logout
}
export default useLogout
