export interface TonyLikes {
  name: string 
  rating: string | null
}

export interface Likes extends TonyLikes {
  id: number | null
}