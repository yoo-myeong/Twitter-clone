# π Auth API μ€ν μ€κ³

> μ§λ ¬ν ν¬λ§· : JSON <br>
> API μ€κ³ μμΉ : REST API

<br>

### β _POST_ /auth/signup

- νμκ°μ

  **μμ²­**

  ```
  {
      username, password, name, email, url
  }
  ```

  **μλ΅**

  ```
  {
      token, username
  }
  ```

<br>

### β _POST_ /auth/login

- λ‘κ·ΈμΈ

  **μμ²­**

  ```
  {
      username, password
  }
  ```

  **μλ΅**

  ```
  {
      token, username
  }
  ```

<br>

### β _GET_ /auth/me

- λ‘κ·ΈμΈμν

  **μμ²­**

  ```
  {
      token, username
  }
  ```
