# 트위터 클론코딩

온라인 강의(드림코딩-노드로 배우는 백엔드)를 수강하면서 진행한 트위터 클론 코딩 프로젝트

https://twittercl.netlify.app/

+ [tweet API 스펙](./설계/트윗API스펙.md)

+ [login API 스펙](./설계/LoginAPI스펙.md)

<br>

## ✅ 프론트엔드

따로 제작하지 않고 강의에서 제공하는 리액트 프로젝트를 활용

<br>

## ✅ 백엔드

+ Express를 사용하여 서버 구축

+ MVC패턴 구현

+ 요청받은 데이터를 DB에 전달하기 전에 validation 라이브러리를 사용해서 서버에서 먼저 유효성 검증

+ JWT를 사용해서 로그인에 필요한 토큰 생성
  + bcypy를 사용해 password를 해싱하고 DB에 저장
  + jwtSecretKey나 bcrypt Salt bound 등을 configuration

+ socket을 사용해서 실시간 트윗 구현

+ sequelize orm을 사용해서 DB구축 및 CRUD 구현

<br>

## ✅ 배포
+ netlify
  + 프론트엔드 프로젝트 배포
+ heroku
  + 백엔드 프로젝트 배포
  + postgerSQL
  + https://twittercs.herokuapp.com/
