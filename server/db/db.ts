import { Likes, TonyLikes } from '../../models/likes'
import db from './connection'

//C

export async function addLike(like: TonyLikes) {
  const result = await db('tonys_likes').insert({
    name: like.name,
    rating: like.name
  })
  return result as number[ ]
}

//R - All

export async function getAllLikes() {
  const likes = await db('tonys_likes').select('*')
  return likes as Likes[]
}

//R - One

export async function getLikeById(id: number) {
  const like = await db('tonys_likes').select('*')
  .where('id', id)
  .first()

  return like as Likes
}

//U

export async function updateLike(id: number, like: Likes) {
  const result = await db('tonys_likes').update({
    name: like.name,
    rating: like.name
})
  .where('id', id)
  return result as number
}

//D

export async function deleteLike(id: number) {
  const result = await db('tonys_likes').where('id', id).delete()
  return result as number
}

