import { useState, useMemo } from 'react'
import { articles } from '../data/articles'
import ArticleCard from '../components/ArticleCard'

// Extrait tous les tags uniques de tous les articles
function getAllTags(articles) {
  const tags = articles.flatMap(a => a.tags)
  return ['Tous', ...new Set(tags)]
}

function Home() {
  const [search, setSearch] = useState('')
  const [activeTag, setActiveTag] = useState('Tous')

  const allTags = getAllTags(articles)

  // useMemo recalcule uniquement quand search ou activeTag changent
  const filtered = useMemo(() => {
    return articles.filter(article => {
      const matchSearch = article.title
        .toLowerCase()
        .includes(search.toLowerCase())

      const matchTag =
        activeTag === 'Tous' || article.tags.includes(activeTag)

      return matchSearch && matchTag
    })
  }, [search, activeTag])

  return (
    <div>
      <h1 className="text-3xl font-bold text-[#cdd6f4] mb-8">Articles</h1>

      {/* Barre de recherche */}
      <input
        type="text"
        placeholder="Rechercher un article..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full bg-[#1e1e2e] border border-[#313244] text-[#cdd6f4] placeholder-[#6c7086] rounded-lg px-4 py-3 mb-6 focus:outline-none focus:border-[#89b4fa] transition-colors"
      />

      {/* Filtres par tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {allTags.map(tag => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-4 py-1.5 rounded-full text-sm transition-colors ${
              activeTag === tag
                ? 'bg-[#89b4fa] text-[#1e1e2e] font-semibold'
                : 'bg-[#313244] text-[#cdd6f4] hover:bg-[#45475a]'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Résultats */}
      {filtered.length === 0 ? (
        <p className="text-[#6c7086] text-center py-12">
          Aucun article trouvé.
        </p>
      ) : (
        filtered.map(article => (
          <ArticleCard key={article.slug} {...article} />
        ))
      )}
    </div>
  )
}

export default Home