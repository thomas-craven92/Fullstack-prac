import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { addLike, fetchLikes } from '../apis/likes-api'
import { TonyLikes } from '../../models/likes'
import { ChangeEvent, FormEvent, useState } from 'react'

function App() {
  const [formState, setFormState] = useState({
    name: '',
    rating: '',
  })

  const { data, isPending, isError } = useQuery({
    queryKey: ['likes'],
    queryFn: () => fetchLikes(),
  })

  const queryClient = useQueryClient()

  const addLikeMutation = useMutation({
    mutationFn: (like: TonyLikes) => addLike(like),
    onSuccess: async () => {
      queryClient.invalidateQueries({ queryKey: ['likes'] })
    },
  })

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault()
    console.log('adding', formState.name)
    addLikeMutation.mutate({
      name: formState.name,
      rating: formState.rating,
    })
  }

  const handleChange = (
    evt: ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = evt.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (isPending) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>No likes.</p>
  }

  return (
    <>
      <header className="header">
        <h1>Tony&apos;s Likes</h1>
      </header>
      <section className="main">
        {data.map((likes) => {
          return (
            <li key={likes.name}>
              {likes.name} {likes.rating}
            </li>
          )
        })}
        <h2>Add like</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="what"
            name="name"
            value={formState.name}
            onChange={handleChange}
          ></input>
          <input
            placeholder="rating"
            name="rating"
            value={formState.rating}
            onChange={handleChange}
          ></input>
          <button type="submit">Add like</button>
        </form>
      </section>
    </>
  )
}

export default App
