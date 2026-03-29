# ORM (Object-Relational Mapping)
> Object-Relational Mapping 약어
> 데이터베이스의 데이터를 객체로 매핑 해준다.
> 객체 <=> ORM <=> DB
> 복잡한 sql문은 작성을 해야 하지만 간단한 sql 동작은 작성할 필요 없이 매핑된 객체를 사용해서 데이터를 저장, 수정, 삭제, 조회 할 수 있다.
> 서비스 로직에 집중 할 수 있게 도와준다.

## 시퀄라이즈 (Sequelize)
> ORM 중 하나이고 객체와 데이터베이스를 ORM 라이브러리가 매핑을 도와주고 자바스크립트 구문으로 sql의 제어를 할 수 있게 도와준다. (`영속성`)
> 쉽게 말해서 시스템 간에 데이터를 변환하는 프로그래밍 기술이다.

```sh
npm init -y
npm i sequelize mysql2

```