import { Outlet } from 'react-router-dom'  // ← remplace children
import Navbar from '../components/Navbar'

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <Outlet />  {/* ← la page s'affiche ici */}
      </main>
    </div>
  )
}

export default MainLayout