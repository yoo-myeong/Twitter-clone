import * as tweetRouter from '../data/tweets.js'

export async function getTweet(req,res,next){
    const username = req.query.username;
    let data;
    if (username) {
        data = await tweetRouter.getAllByUsername(username)
    }
    else data = await tweetRouter.getAll()
    res.status(200).json(data);
}

export async function getById(req,res,next){
    const id = req.params.id;
    const tweet = await tweetRouter.getAllById(id)
    if(tweet) res.status(200).json(tweet)
    else res.status(404).json({
        message: `tweet ${id} not found`
    })
}

export async function createTweet(req,res,next){
    const {text, username, name} = req.body
    const tweet = {id:Date.now().toString(), text, name, username};
    const tweets = await tweetRouter.create(tweet)
    res.status(201).json(tweets)
}

export async function updateTweet(req,res,next){
    const id = req.params.id
    const text = req.body.text
    const tweets = await tweetRouter.update(id,text)
    if(tweets) res.status(200).json(tweets)
    else res.status(404).json({massage:'not exist id'})
}

export async function deleteTweet(req,res,next){
    const id = req.params.id
    const tweets = await tweetRouter.deleteTweet(id)
    if(tweets) res.status(200).json(tweets)
    else res.sendStatus(404)
}