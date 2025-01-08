import request from "superagent";
import { Likes, TonyLikes } from "../../models/likes";

export async function fetchLikes(){
  const result = await request.get('/api/v1/likes/')
  console.log(result.body)
  return result.body as Likes[]
}

export async function fetchLike(id: number){
  const result = await request.get(`/api/v1/likes/${id}`)
  console.log(result.body)
  return result.body as Likes
}

export async function addLike(like: TonyLikes){
  const result = await request.post(`/api/v1/likes/`).send(like)
  console.log(result.body)
  return result.body as Likes
}

export async function updateLike(id: number, like: Likes){
  const result = await request.patch(`/api/v1/likes/${id}`).send(like)
  console.log(result.statusCode)
  return
}

export async function deleteLike(id: number){
  const result = await request.delete(`/api/v1/likes/${id}`)
  console.log(result.statusCode)
  return 
}