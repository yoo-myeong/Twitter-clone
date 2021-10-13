# 👉 로그인 API 스펙 설계

>직렬화 포맷 : JSON <br>
>API 설계 원칙 : REST API

<br>

### ✅ *POST* /auth/signup

+ 회원가입

    **요청**
    ```
    {
        username, password, name, email, url
    }
    ```

    **응답** 
    ```
    {
        token, username
    }
    ```

<br>

### ✅ *POST* /auth/login

+ 로그인

    **요청**
    ```
    {
        username, password
    }
    ```

    **응답**
    ```
    {
        token, username
    }
    ```

<br>

### ✅ *GET* /auth/me

+ 로그인상태

    **요청**
    ```
    {
        token, username
    }