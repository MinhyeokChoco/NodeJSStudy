# mb4 : Most bytes 4
# utf8mb4 : 4바이트 씩 사용하는 utf8 문자 집합으로 유니코드 문자를 지원하겠다.
# general : 비교 정렬 규칙을 정의하는데 단순한 규칙으로 정의하겠다.
# ci : 대소문자 구분 안하겠다.
CREATE DATABASE Hyeok DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

Show DATABASES;
# utf8mb4 : 한글 포함 전세계 문자 + 이모티콘 사용 가능
# utf8mb4_general_ci : 간단한 정렬과 비교를 사용해서 정렬속도를 빠르게 사용하겠다.

# ;
# 데이터 베이스 삭제
DROP DATABASE hyeok;

# 데이터 베이스를 사용하겠다.
# USE [사용할 데이터베이스 이름]
USE hyeok;

# 사용하는 데이터베이스의 테이블 내용을 확인
SHOW TABLES;

# 테이블 생성
-- CREATE TABLE [이름]([컬럼 이름][데이터 타입] [옵션])
# AUTO_INCREMENT : 자동으로 증가한다.
# 테이블에 열이 하나씩 추가될 때마다 증가한다.
# PRIMARY KEY : 고유햔 키 하나만 존재할 수 있다. 식별자
# VARCHAR : 256BYTE 가변데이터 20자 (우리가 20자 까지 사용을 안하면 알아서 맞춘다.) 문자열 사용할 때 사용함
CREATE TABLE store (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tel VARCHAR(20)
);

# 테이블 필드 확인
DESC [이름] 