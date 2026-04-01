import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getArticleBySlug } from '../data/articles'

function Article() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  // Si l'article n'existe pas → redirige vers l'accueil
  if (!article) return <Navigate to="/" replace />

  return (
    <div>
      {/* En-tête */}
      <Link
        to="/"
        style={{ color: '#89b4fa', textDecoration: 'none', fontSize: '0.9rem' }}
      >
        ← Retour aux articles
      </Link>

      <div style={{ marginTop: '2rem', marginBottom: '1rem', display: 'flex', gap: '0.5rem' }}>
        {article.tags.map(tag => (
          <span key={tag} style={{
            background: '#313244',
            color: '#89b4fa',
            padding: '2px 10px',
            borderRadius: '999px',
            fontSize: '0.75rem'
          }}>
            {tag}
          </span>
        ))}
      </div>

      <h1 style={{ color: '#cdd6f4', marginBottom: '0.5rem' }}>{article.title}</h1>
      <p style={{ color: '#a6adc8', marginBottom: '2rem' }}>{article.date}</p>

      {/* Contenu Markdown */}
      <div style={{ color: '#bac2de', lineHeight: '1.8' }}>
        <ReactMarkdown>{article.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Article