import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ background: '#1e1e2e', padding: '1rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      
      <Link to="/" style={{ color: '#cdd6f4', fontWeight: 'bold', fontSize: '1.2rem', textDecoration: 'none' }}>
        {'<MonBlog />'}
      </Link>

      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <NavLink
          to="/"
          end
          style={({ isActive }) => ({
            color: isActive ? '#89b4fa' : '#cdd6f4',
            textDecoration: 'none'
          })}
        >
          Articles
        </NavLink>
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? '#89b4fa' : '#cdd6f4',
            textDecoration: 'none'
          })}
        >
          À propos
        </NavLink>
      </div>

    </nav>
  )
}

export default Navbar