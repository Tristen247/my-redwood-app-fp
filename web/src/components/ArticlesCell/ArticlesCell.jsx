import Article from 'src/components/Article'

export const QUERY = gql`
  query ArticlesQuery {
    articles: posts {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

/*Added 3/10/25
Mapped from components/Article.jsx*/
export const Success = ({ articles }) => {
  return articles.map((article) => <Article key={article} article={article} />)
}
