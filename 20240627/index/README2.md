# index
> 데이터베이스의 인덱스는 중요한 개념 중 하나.
> 데이터의 검색 성능을 잘 사용하면 성능을 엄청 높게 향상 시킬 수 있다.
> 데이터에 빠른 접근을 할 수 있게 만들어주는 자료 구조

# DBMS index
> b-tree 기반의 동작을 할 수가 있다.
> 이진 트리는 자식을 2개만 가질 수 있다.
> b-tree 기반의 자료 구조는 3개 이상의 자식을 가질 수 있다.
> 이진 트리 보다 b-tree 기반의 자료 구조가 훨씬 빠르다.
> b-tree 기반의 인덱스를 생성한다.
> 데이터가 한글이면 초성, 중성, 종성 순서로 구분, 사전식 구성
예 = 가, 각, 간, 갇, 갈 ...
> 영문은 a,b,c,d,e,f 알파뱃 순서 사전 식 구성
> 숫자는 작은순 정렬
> 정렬된 인덱스는 실제 테이블 데이터의 포인터의 값을 하나씩 갖는다.
> id를 찾는다고 가정하면 select * from student where id = 100;
> `바이너리 서치`를 한다.
> 쉽게 말해서, 정리 해보자면 전체 데이터의 가운데 값을 조회하고, 가운데 값이 찾는 값보다 크거나 작은지 비교하고 다음 기준에서 또 반복, 찾으면 찾은 기준의 데이터 위 아래를 맞는 범위까지 조회하고 안 맞으면 끝난다.
> 더 쉽게 말하자면 가운데 값을 조회하면서 데이터를 찾을 때 까지 범위를 좁혀나간다.

> 두 개의 값을 찾는다 가정할 때 select * from where id = 100 and age = 50;
> 인덱스는 id만 설정 되어 있다고 가정하고 위와 동일하게 바이너리 서치를 하고 age값을 포인터로 참조해서 모두 확인한다.
> 맞는지 안맞는지 조건을 모두 찾을 때까지 확인하면서 포인터 접근을 하기 때문에 age라는 컬럼은 full scan을 하게 된다.

> id와 age를 둘 다 멀티 컬럼 인덱스로 묶어서 관리하면
> 위와 동일하게 바이너리 서치를 하는데 id와 age의 값이 둘 다 일치할 때 인덱스의 데이터에서 포인터 접근을 한다.
> 좀 더 효율적 id, age 둘 다 인덱싱이 된 것이다.

> 멀티 컬럼 인덱스 묶은 순서에서 왼쪽의 컬럼을 순서대로 정렬하고, 그 정렬한 순서의 기준으로 매핑되는 컬럼의 데이터로 오른쪽 컬럼의 데이터는 정렬한다.

> 인덱스가 조회에는 좋기는 하나 막 쓰면 위험하다. 막 쓰면 안 쓰는것만 못하다.
> 추가, 수정, 삭제 오래 걸린다
> 이유는 인덱스의 데이터도 같이 생성 되기 때문에 (데이터의 저장 공간도 늘어난다.)
> 데이터베이스 오버헤드 : 너무 많은 인덱스가 있으면 DBMS 성능이 떨어진다.
> 꼭 필요한 곳인지 확인, 조회가 번번히 일어나고 데이터가 많은 경우 쓰기 적합하다.

> 인덱스로 저장한 데이터가 전체 테이블의 데이터 중에 상당수를 차지하는 경우에는 full scan을 하는게 더 빠르다.
> 너무 적은 테이블도 풀 스캔 하는게 더 빠를 수 있다.

`옵티마이즈` : DBMS가 최적의 쿼리를 사용하게 만들어 주는 것.
<!-- 이진 트리는 공부를 해야 한다. -->

## index 구조
```sql
CREATE DATABASE test;
use test;

-- full scan
SELECT * FROM student;

-- full scan
SELECT * FROM student WHERE name = "hyeok";
-- index가 되어 있지 않으면 모든 데이터를 조회하고 결과를 찾는다.

CREATE TABLE student(
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(50),
    age INT,
    class VARCHAR(10)
);
```

## 테이블에 값을 csv를 가져와서 추가해보자.
> mysql 로컬 파일을 읽을 수 있는 상태인지 속성을 확인 해봐야 한다.
```sql
show global variables like "local_infile";
set global local_infile = on;

-- 파일을 가져올 경로
show variables like "secure_file_priv";

-- 가져올 경로 지정
secure_file_priv = "/Users/leeminhyeok/Documents/MH/upload"

-- 테이블에 넣기
show variables like "secure_file_priv";

LOAD DATA INFILE "/Users/leeminhyeok/Documents/MH/upload/student.csv" INTO
table student FIELDS TERMINATED BY "," ENCLOSED BY "" LINES TERMINATED BY "\n" IGNORE 1 ROWS;

```

```js
// csv 생성
const fs = require('fs');

// 랜덤한 이름이나 랜덤한 이메일, 등등 제공해주는 라이브러리
// npm init -y
// npm i @faker-js/faker
const { faker } = require("@faker-js/faker");

// CSV 파일 스트림
const file = fs.createWriteStream("student.csv");

// 테이블의 컬럼 내용
file.write("id,name,email,age,class\n")

const classArr = ["devops", "game", "story"];
// 몇만개의 열을 만들자.
for (let i = 1; i < 100000; i++) {
    const id = i;
    const name = faker.internet.userName();
    const email = faker.internet.email();
    const age = Math.floor(Math.random() * 100) + 1;
    const className = classArr[Math.floor(Math.random() * 3)];
    file.write(`${id}, ${name}, ${email}, ${age}, ${className}\n`);
}

// 파일 스트림 끝내고 파일 생성
file.end();
console.log("파일 생성");
```