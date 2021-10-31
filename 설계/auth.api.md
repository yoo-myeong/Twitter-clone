# 👉 Auth API 스펙 설계

> 직렬화 포맷 : JSON <br>
> API 설계 원칙 : REST API

<br>

### ✅ _POST_ /auth/signup

- 회원가입

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

### ✅ _POST_ /auth/login

- 로그인

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

### ✅ _GET_ /auth/me

- 로그인상태

  **요청**

  ```
  {
      token, username
  }
  ```
