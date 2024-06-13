# 데이터 베이스 (Data Base, DB)
> 데이터 베이스라는 것은 정보를 저장하는 공간
> 쉽게 생각해서 폴더라고 생각하면 좋다.

## DBMS (DataBase Management System)
> 데이터베이스라는 말은 정보를 저장하는 공간을 말하고
> DBMS는 특정 기능을 넣어서 데이터를 저장하고 조회 하는 것을 뜻한다.
> 데이터를 조작 할 수 있는 기능 또는 시스템 프로그램을 DBMS라고 한다.

## SQL (Structured Query Language)
> DBMS에서 구현된 기능을 실행 시키기 위해서 특정한 언어로 실행해서 데이터를 조작한다.
> 데이터를 보관할 공간을 만들거나, 데이터를 저장하거나 삭제함
> SQL 구문을 사용해서 삭제, 수정, 조회를 한다.
> SQL을 사용하는 것을 SQL이라 하고, 반대로 사용하지 않는 것들은 NO SQL이라고 한다.
> 데이터를 저장하는 형태가 관계형이냐 RDBMS가 맞냐 아니냐로 나뉜다.

## RDBMS
> 관계형 DBMS의 대표적 플랫폼이다.

1. Oracle
2. MySQL
3. MariaDB
4. PostgreSQL
5. MSSQL

## 비관계형 DBMS

1. MongoDB

우리는 MySQL을 배워보려고 함.

## SQL의 개요

1. 데이터의 정의어 (DDL)(Data Definition Language)
2. 데이터의 조작어 (DML)(Data Manipulation Language)
3. 데이터의 제어어 (DCL)(Data Control Language)

- 데이터 정의어(DDL) 2
> 테이블이나 관계의 구조를 생성하는데 사용하는 구문
 1. CREATE (생성)
 2. SHOW (조회)
 3. DROP (삭제)
 4. ALTER (테이블의 구조를 변경할 때 사용)

- 데이터 조작어(DML) 1
> 테이블의 데이터 검색, 삽입, 수정, 삭제 등을 하는데 사용한다. (CRUD)
> 우리가 많이 그리고 흔히 사용할 구문이 될 예정이다.
 1. SELECT (조회)
 2. INSERT (생성)
 3. UPDATE (수정)
 4. DELETE (삭제)

- 데이터 제어어(DCL) 3
> 데이터의 사용 권한을 관리하는데 사용
 1. GRANT (유저의 권한 설정)
 2. REVOKE (테이블의 접근 권한 관리자)

## MySQL 설치
> 터미널에서 설치된 경로로 이동해서 MySQL 접속

```sh
# mysql 접속
mysql -u root -p
password 입력

# 데이터 정의어(DDL)
# 스키마 생성
CREATE DATABASE [이름]
CREATE SCHME [이름]

```




> 구조화된 쿼리의 언어
> 데이터베이스에서 데이터를 추출하고 조작하는 데에 사용하는 데이터 처리 언어입니다.
> 쉽게 말해 데이터베이스에 저장된 정보를 쉽게 찾고 정리하는 데에 도움을 주는 도구입니다.