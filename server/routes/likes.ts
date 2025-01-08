import express from 'express'

import * as db from '../db/db'

const router = express.Router()
export default router

// GET api/v1/likes/

router.get('/', async (req, res) => {
  try {
    const likes = await db.getAllLikes()
    res.json(likes)
  } catch (error) {
    if(error instanceof Error){
      console.error(error.message)
    }
    else
      console.error('unknown error')
      res.sendStatus(500)
  }
})

// GET one api/v1/likes/:id

router.get('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const likes = await db.getLikeById(Number(id))
    res.json(likes)
  } catch (error) {
    if(error instanceof Error){
      console.error(error.message)
    }
    else
      console.error('unknown error')
      res.sendStatus(500)
  }
})

// POST api/v1/likes

router.post('/', async (req, res) => {
  try {
    const newLike = req.body
    const id = await db.addLike(newLike)
    res.json({...newLike, id: id[0]})
  } catch (error) {
    if(error instanceof Error){
      console.error(error.message)
    }
    else
      console.error('unknown error')
      res.sendStatus(500)
  }
})

// PATCH api/v1/likes/:id

router.patch('/:id', async (req, res) => {
  try {
    const {id} = req.params
    const updatedLike = req.body 
    await db.updateLike(Number(id), updatedLike)
    res.sendStatus(200)
  } catch (error) {
    if(error instanceof Error){
      console.error(error.message)
    }
    else
      console.error('unknown error')
      res.sendStatus(500)
  }
})

// DELETE api/v1/like/:id

router.delete('/:id', async (req, res) => {
  try {
    const {id} = req.params
    await db.deleteLike(Number(id))
    res.sendStatus(200)
  } catch (error) {
    if(error instanceof Error){
      console.error(error.message)
    }
    else
      console.error('unknown error')
      res.sendStatus(500)
  }
})