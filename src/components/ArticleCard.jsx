import { Link } from 'react-router-dom'

function ArticleCard({ title, date, description, slug, tags }) {
  return (
    <article style={{
      border: '1px solid #313244',
      borderRadius: '8px',
      padding: '1.5rem',
      marginBottom: '1.5rem',
      background: '#1e1e2e'
    }}>
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
        {tags.map(tag => (
          <span key={tag} style={{
            background: '#313244',
            color: '#89b4fa',
            padding: '2px 8px',
            borderRadius: '999px',
            fontSize: '0.75rem'
          }}>
            {tag}
          </span>
        ))}
      </div>

      <h2 style={{ margin: '0.5rem 0', color: '#cdd6f4' }}>
        <Link to={`/article/${slug}`} style={{ color: 'inherit', textDecoration: 'none' }}>
          {title}
        </Link>
      </h2>

      <p style={{ color: '#a6adc8', fontSize: '0.85rem', margin: '0 0 0.75rem' }}>{date}</p>
      <p style={{ color: '#bac2de', margin: 0 }}>{description}</p>
    </article>
  )
}

export default ArticleCard