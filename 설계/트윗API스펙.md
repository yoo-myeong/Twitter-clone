# 👉 트윗 API 스펙 설계

>직렬화 포맷 : JSON <br>
>API 설계 원칙 : REST API

<br>

### ✅ *GET* /tweets

+ 모든 트윗 가져오기
+ 응답 : 200

    ```
    {
        [tweet, tweet, ...]
    }
    ```

### ✅ *GET* /tweets?username=:username

+ 유저네임의 트윗을 모두 가져오기
+ 응답 : 200

    ```
    {
        [tweet, tweet, ...]
    }
    ```

### ✅ *GET* /tweets/:id

+ 데이터의id에 해당하는 하나의 트윗을 가져오기
+ 응답 : 200

    ```
    {
        tweet
    }
    ```

### ✅ *POST* /tweets

+ 새로운 트윗 생성

    **요청** : 200
    ```
    {
        text, name, username, url
    }
    ```

    **응답** : 201
    ```
    {
        tweet
    }
    ```

### ✅ *PUT* /tweets/:id

+ 데이터id를 가진 트윗의 내용 수정

    **요청** : 200
    ```
    {
        text
    }
    ```

    **응답** : 201
    ```
    {
        tweet
    }
    ```

### ✅ *DELETE* /tweets/:id

+ 데이터id를 가진 트윗 전체 삭제

    **요청**
    ```
    넘기는 데이터 없음
    ```

    **응답** : 204
    ```
    넘기는 데이터 없음
    ```