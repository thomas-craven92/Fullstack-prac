import { useQuery } from '@tanstack/react-query'
import { fetchLikes } from '../apis/likes-api'

function App() {
  const { data, isPending, isError } = useQuery({
    queryKey: ['likes'],
    queryFn: () => fetchLikes(),
  })

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>No likes.</p>
  }

  return (
    <>
      <header className="header">
        <h1>Tony's Likes</h1>
      </header>
      <section className="main">
        {data.map((likes) => {
          return <li key={likes.name}>{likes.name} {likes.rating}</li>
        })}
      </section>
    </>
  )
}

export default App
