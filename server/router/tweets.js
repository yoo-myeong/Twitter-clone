import express from 'express'
import 'express-async-errors'
import * as tweetController from '../controller/tweets.js'

const router = express.Router();

router.get('/', tweetController.getTweet)

router.get('/:id', tweetController.getById)

router.post('/', tweetController.createTweet)

router.put('/:id', tweetController.updateTweet)

router.delete('/:id', tweetController.deleteTweet)

export default router;