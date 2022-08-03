import Layout from "./components/Layout"
import Routes from "./Routes"

const App = () => {
  // The entire app component is wrapped in a Layout component (Sidebar implementation)
  return (
    <Layout>
      <Routes />
    </Layout>
  )
}

export default App
