# Twitter-clone

# Tweets API

### schema

+ id : string
+ text : string
+ createdAt : Date
+ name : string
+ username : sting
+ url : string (optional)


### *GET* /tweets
get all tweets

> Response 200

```
{
  [tweet, tweet, ....]
}
```
### *GET* /tweets?username=:username
get all tweet for users name
> Response 200

```
{
    [tweet, tweet, ...]
}
```

### *GET* /tweets:id
get tweet by id
> Response 200

```
{
    tweet
}
```

### *POST* /tweets:id
get tweet by id
> request

```
{
    text,
    name,
    username
    url(optional)
}
```

> response 200

```
{
    tweet
}
```

### *PUT* /tweets/:id
update tweet
> request

```
{
    tweet
}
```
> response 200

```
{
    tweet
}
```

### *PUT* /tweets/:id
update tweet

> response 204


