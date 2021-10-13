let tweets = [
    {id:'1', text:'hi', createTime:Date.now().toString, name:'seon', username:"c_on12"}
]

export async function getAll(){
    return tweets
}

export async function getAllByUsername(username){
    return tweets.filter((tweet) => tweet.username === username)
}

export async function getAllById(id){
    tweets.find(tweet=>tweet.id === id)
    return tweets
}

export async function create(tweet){
    tweets.push(tweet)
    return tweets
}

export async function update(id,text){
    const tweet = tweets.find(tweet=>tweet.id === id);
    if(tweet) {
        tweet.text = text;
        return tweets
    }else return False
}

export async function deleteTweet(id){
    tweets = tweets.filter(tweet => tweet.id !== id);
    return tweets
}