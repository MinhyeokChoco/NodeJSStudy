CREATE DATABASE test;

use test;

CREATE TABLE student (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    age INT,
    class VARCHAR(10)
);

-- full scan
SELECT * FROM student;

show global variables like "local_infile";

set global local_infile = on;

-- full scan
SELECT * FROM student WHERE name = "hyeok";
-- index가 되어 있지 않으면 모든 데이터를 조회하고 결과를 찾는다.

show variables like "secure_file_priv";

LOAD DATA INFILE "student.csv" INTO
table student FIELDS TERMINATED BY "," ENCLOSED BY '"' LINES TERMINATED BY "\n" IGNORE 1 ROWS;

SELECT * FROM student;

SELECT * FROM student WHERE class = "devops";

SELECT * FROM student WHERE name = "";

# 인덱스 name
create index student_name ON student (name);

drop index student_name on student;

create index student_class on student (class);

drop index student_class on student;

drop index student_email on student;

# 설정한 인덱스 확인
show index FROM student;

# 인덱스를 두개 이상

## index의 종류
# index
# 멀티 컬럼 index(unique);

# 두가지 이상의 컬럼으로 유니크 인덱스 생성
create UNIQUE index student_name_email ON student (name, email);
# 기준으로 선택된 컬럼만 인덱싱이 된다.
# email은 인덱싱이 안됨.
select *
from student
WHERE
    name = "Willard.Nolan"
    AND email = "Moriah.Kessler83@gmail.com";

create index student_email ON student (email);

select * from student WHERE email = "Moriah.Kessler83@gmail.com";

-- 두개 이상의 컬럼을 유니크 인덱스로 생성(두 컬럼을 가지고 있는 유니크한 인덱스라는 뜻)

-- primary key는 자동으로 인덱스가 생성된다.

-- Non_unique : 유니크인지 아닌지 정보를 알려준다.
-- 0 : 유니크 중복값을 허용 X
-- 1 : 반대 중복값을 허용 O

-- Seq_in_index : 멀티 컬럼 인덱스 이면 1 2 이런식으로 멀티컬럼으로 지정한 컬럼을 순서대로 보여준다

-- Column_name : 어떤 컬럼의 이름인지

## 쿼리문 호출을 할때 어떤 인덱스를 사용한건지 알아보자.
EXPLAIN
select *
from student
WHERE
    email = "Moriah.Kessler83@gmail.com";
## student_email

## DBMS는 옵티마이저 sql을 가장 효율적으로 실행할수 있는 방법을 결정.
## 옵티마이저 오류가 발생할수 있기때문에
## 인덱스를 설정했을때 실수를 하지 못하게 하기 위해서

-- 인덱스를 지정해서 테이블 조회
select *
from student
use index (student_email)
WHERE
    email = "Moriah.Kessler83@gmail.com";
## use index(student_email) : 인덱스를 사용해달라고 요청을 하는것.

-- 인덱스를 사용하는것을 강제로
select *
from student FORCE index (student_email)
WHERE
    email = "Moriah.Kessler83@gmail.com";