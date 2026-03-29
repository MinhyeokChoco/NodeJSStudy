CREATE TABLE student (
    id INT,
    name VARCHAR(20),
    class VARCHAR(20)
);

CREATE TABLE student_class (
    class_id INT,
    class VARCHAR(20),
    study VARCHAR(20)
);

INSERT INTO
    student
VALUES (1, "HYEOK", "devops"),
    (2, "min", "story"),
    (3, "lee", "game");

INSERT INTO
    student_class
VALUES (1, "devops", "full"),
    (2, "story", "story1"),
    (3, "game", "game1");

SELECT * FROM student;

SELECT * FROM student_class;

SELECT *
FROM student
    INNER JOIN student_class ON student.id = student_class.class_id;

SELECT student.class, student.name, student_class.study
FROM student
    INNER JOIN student_class ON student.class = student_class.class
WHERE
    student.class = "devops";

# story 수업을 듣고 있는 사람의 수업명과 수업 내용이 필요하다.
SELECT student.class, student_class.study
FROM student
    INNER JOIN student_class ON student.class = student_class.class
WHERE
    student.class = "story";

## 사용자 : id, name
## 주문 : id, name, order_id
## 사용자 테이블이 있고 주문을 받는 테이블이 있다.
## 사용자 테이블에 값을 넣고
## 주문 테이블에 값을 넣고
## 모든 사용자의 주문 내용을 조회
## 해당 사용자의 주문 내용을 조회

CREATE TABLE user (id INT, name VARCHAR(20));

CREATE TABLE `order` (
    id INT,
    name VARCHAR(20),
    FOREIGN KEY order_id REFERENCES user
);

INSERT INTO user VALUES (1, "Hyeok"), (2, "LKJ"), (3, "AJH");

INSERT INTO
    `order`
VALUES (1, "Hyeok", "GOOD"),
    (2, "LKJ", "BETTER"),
    (3, "AJH", "BEST");

SELECT * FROM user INNER JOIN `order` ON user.id = `order`.id;

SELECT *
FROM user
    INNER JOIN `order` ON user.id = `order`.id
WHERE
    user.name = "Hyeok";

SELECT user.name, `order`.order_id
FROM user
    INNER JOIN `order` ON user.name = `order`.name
WHERE
    user.name = "Hyeok";

## 사용자 테이블(uid, uname, phonenumber)
## 비디오가게 테이블(vname, order_id)
## 사용자 값 추가 (아이디, 이름, 전화번호)
## 비디오 빌리는 사람 값 추가(제약 조건 (외래키 사용해서 사용자가 있는 경우에만 데이터 추가 가능) )
## 전체 사용자 비디오 조회
## 해당 사용자 비디오 조회

CREATE TABLE lmh (
    uid VARCHAR(20),
    uname VARCHAR(10),
    phonenumber VARCHAR(15)
);

CREATE TABLE video {
    vname VARCHAR(100),
    order_id VARCHAR(20)
    order_name VARCHAR(20)
};

# 마무리 해놓기
---------------------------------------------

## as 별칭을 정해주는 것.
Ç

CREATE TABLE test1 (
    name VARCHAR(20),
    name2 VARCHAR(20),
    name3 VARCHAR(20)
)

CREATE TABLE test2 (
    name VARCHAR(20),
    name2 VARCHAR(20),
    name3 VARCHAR(20)
)

INSERT INTO
    test1
VALUES ("2", "2", "안녕2"),
    ("3", "2", "안녕3"),
    ("4", "2", "안녕4");

INSERT INTO
    test2
VALUES ("1", "2", "바이1"),
    ("2", "2", "바이2"),
    ("3", "2", "바이3"),
    ("4", "2", "바이4");

SELECT * FROM test1;

SELECT * FROM test1 INNER join test2 on test1.name = test2.name;

### full

UNION (합집합)

(
    select *
    from test1
        left join test2 on test1.name2 = test2.name2
)
UNION
(
    select *
    from test1
        RIGHT join test2 on test1.name2 = test2.name2
)
### cross join (카타잔 곱)
# 두 테이블의 곱을 나타낸다.
SELECT *
FROM test1
    CROSS JOIN test2;

### self join (자기 참조)
> 난이도가 있는 친구,
> 테이블이 본인을 참조 하는 것
## as testname 실제로 사용 하는게 아니고, 조회 용도로만 별칭을 정해준 것.
## 댓글, 대댓글 만들 때 (대댓글, 대댓글, 대댓글)
SELECT *
FROM test1
    CROSS JOIN test1 as testname;

### 회사 테이블 = 부서
### 직원 테이블 = 자신이 속해 있는 부서, 직원 이름, 직원 직급 (부서를 프라이머리키)

### 회사의 값을 추가
### 직원의 값을 추가
### 회사의 소속 컬럼이 있을 때
### 직원이 뽑힐 수 있다.

### 모든 직원의 부서를 조회
### 해당 직원이 속해있는 부서 조회
### 모든 직원을 조회하면서 직원이 속하지 않은 부서도 조회

CREATE TABLE MHCOMPANY ( divisions VARCHAR(30) PRIMARY KEY );

DROP TABLE MHemployee;

CREATE TABLE MHemployee (
    divisions VARCHAR(30),
    CONSTRAINT fk_division FOREIGN KEY divisions REFERENCES MHCOMPANY (divisions),
    name VARCHAR(10),
    jobtitle VARCHAR(5)
)

select * from MHCOMPANY;

select * from MHemployee;

INSERT INTO
    MHCOMPANY
VALUES ("경리"),
    ("관리"),
    ("인사"),
    ("설계"),
    ("마케팅"),
    ("영업"),
    ("법무");

INSERT INTO
    MHemployee
VALUES ("경리", "안중현", "대리"),
    ("관리", "이경재", "과장"),
    ("인사", "백종혁", "대리"),
    ("인사", "이종석", "대리"),
    ("설계", "이준혁", "대리"),
    ("마케팅", "김민지", "대리"),
    ("법무", "이민혁", "사원");

SELECT * FROM MHemployee;

SELECT MHCOMPANY.divisions
FROM MHCOMPANY
    INNER join MHemployee on MHCOMPANY.divisions = MHemployee.divisions;

SELECT MHemployee.divisions, MHemployee.name
FROM MHCOMPANY
    INNER JOIN MHemployee ON MHCOMPANY.divisions = MHemployee.divisions
WHERE
    MHemployee.name = "이민혁";

select *
from MHCOMPANY
    left join MHemployee on MHCOMPANY.divisions = MHemployee.divisions;

# 오늘 실습 완료