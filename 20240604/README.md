# Buffer
> NodeJS의 내장 객체

## Buffer 공식 문서
> 바이너리 데이터들의 스트림을 읽거나 조작하는 메커니즘 octet 스트림(일반적으로 8bit 형식을 된 데이터를 의미)과의
상호작용을 가능하게 하기 위해 만들어 졌다.

> Buffer 클래스는 바이너리 데이터들의 스트림을 직접 다루기 위해 NodeJS API에 추가 되었다.

# 2진수와 비트
> 2진수와 비트는 `용어`
> 우리는 손가락 개수만큼 10까지 세다가 10이 되면 자리수가 증가. (10진수)
> 컴퓨터는 0과 1 손가락이 한 개, 전기 신호가 들어왔느냐 꺼졌느냐 ? (2진수)
> 2마다 자리수가 증가
> 10진수는 0에서 9까지 이후 자리수 증가, 10에서 19까지 = 10개
> 2진수는 0에서 1까지 이후 자리수 증가, 10에서 11까지 = 2개

| 10진수 | 2진수 |
|-------|======|
| 0 | 0 |
| 1 | 1 |
| 2 | 10 |
| 3 | 11 |
| 4 | 100 |
| 5 | 101 |
| 6 | 110 |
| 7 | 111 |
| 8 | 1000 |
| 9 | 1001 |

> 1000 여기서 2진수의 자리수 하나당 비트
> 위에 1000은 4비트 `바이트 패딩`
> 컴퓨터가 사용하는 단위 => 비트
> 이 비트가 8개가 모이면 바이트라는 컴퓨터의 가장 기본 단위가 된다.

## Binary Data
> 컴퓨터는 기본 0, 1으로만 데이터를 표현한다.
> 우리는 데이터를 표현할 때 비트나 바이트라는 단위를 많이 사용한다.
> 데이터의 가짓수를 표현할 때 사용하는 방법이라고 보면 된다.
> 만약 12라는 숫자를 저장할 때 12를 작성하면 되지만 1은 알고 2를 모르는 친구 컴퓨터는 이진수 1100로 저장
> 숫자는 쉬운데 글자가 어렵다.
> 만약 A라는 글자를 이진수로 표현하게 되면 ?
> `Character Set 문자 집합` : 컴퓨터는 A와 a의 글자를 다르게 인식
> 숫자로 표현
> 컴퓨터가 A를 65, a를 97의 값으로 인식한다.
> 사람이 정해줬기 때문이다. `문자 집합` 이라고 한다.
> 문자 집합 : 문자를 숫자로 표현 할 수 있도록 정의한 규칙

### Character Set 문자 집합
1. ASCII CODE (아스키 코드)
> 글자를 표헌할 때 8bit만 사용한다. 1byte
> 8bit 중에서 1bit는 오류 체크 용도로 사용, 실제로 사용하는 7bit만 사용
> 1bit는 오류 체크용으로 사용 `Parity bit(패리티 비트)`
> 00000000 ~ 11111111 즉 2^7 = 128까지 아스키 코드는 128가지의 글자를 표현 할 수 있는 것.
> 한글을 제외한 키보드 자판에 있는 영어와 특수 문자만 표현이 가능하다.
> 한글은 1byte로 표현이 불가능하다, 알파뱃 1글자와 한글 1글자는 크기가 다릅니다.

> 그래서 생겨난 것이 한글과 같은 다른 문자를 표현하기 위해 탄생한 유니코드

2. Uni CODE (유니 코드)
> 유니코드는 전 세계의 문자를 일관되게 표현 할 수 있도록 설계된 표준
> 아스키 코드와 유니 코드의 큰 차이점은 용량의 차이
> 글자 하나 당 1byte가 아닌 2byte를 사용한다.

### 16진수
> 2진수와 10진수
> 2진수로 표현하기에 너무 길어지기 때문에 비효율적이라고 판단, 그래서 16진수로 표현을 하는 것.
> 16진수 구하기
> 0 1 2 3 4 5 6 7 8 9 A B C D E F
> 10 진수를 16으로 나누고 나머지를 16진수로 표현, 나눈 몫을 0이 될 때까지 반복
> 30 => 1E
> 30을 나누면 몫 1 나머지가 14 => 1E

### 인코딩 규칙
> 문자를 숫자로 나타내는 것의 규칙이 있는 것처럼
> 숫자를 바이너리 데이터로 나타내는 데에도 규칙이 있다.
> A는 숫자 65를 나타내는데 2진수로 표현하면 1000001 으로 표현이 가능하다.
> A12는 컴퓨터가 2진수로 표현하면 1000 0011100 이렇게 변환한다.
> 컴퓨터는 어디서 잘라야 할 지, 몇 글자를 잘라야 할 지 모른다.
> 10000011100 어디를 분리 하느냐에 따라 결과물이 달라질 수 있다.
> 앞을 8bit 뒤를 4bit로 잘라야 A12글자를 만들 수 있다.
> 그래서 우리는 `문자 인코딩`을 하는 것.
> 문자 인코딩 중 하나인 UTF8 => 8의 숫자가 바로 bit를 뜻한다.
> 하지만 12라는 숫자는 4bit로 표현이 가능하지만 문자 인코딩을 통해서 8bit로 변환 해야 한다.
> 변환하는게 어려운건 아니고 단순하게 4자리의 숫자를 8자리의 숫자로 표현하면 끝.
> 0000+1100으로 표현하면 된다. 자리수만 채우는 것. 12라는 숫자는 문자 인코딩을 통해서 0000 1100 이렇게 표현

1. A
> A -> CharacterSet -> 65 -> 1000001 (2진수) -> 01000001 (문자 인코딩)

2. 12
> 12 -> 1100 (2진수) -> 00001100 (문자 인코딩)

> 인코딩의 반대 개념은 디코딩

## Stream
> NodeJS의 스트림
> 한 지점에서 다른 지점으로 이동하는 일련의 데이터
> 방대한 데이터 처리를 할 때 모든 데이터가 전부 다 사용 가능 할 때까지 기다리지 않아도 된다.
> 기본적으로 큰 데이터는 청크 단위로 세분화 되어 전송한다.
> buffer의 정의로 파일 시스템에서 바이너리 데이터들이 이동한다는 것
> file.txt -> file2.txt
> Streaming 하는 동안 buffer는 바이너리 데이터를 어떻게 다루냐 ?

## buffer
> 데이터 스트림이란 일련의 데이터들이 한 지점에서 다른 지점으로 이동하는 것.
> 데이터가 어떻게 이동되는 것이냐 ?
> 일반적으로 데이터의 이동은 그 데이터를 가지고 작업 혹은 읽기 등을 하기 위해서 한다.
> 어떤 작업을 할 때 특정 시간동안 데이터를 받을 수 있는 데이터의 최소량과 최대량이 존재합니다.
> 이 작업이 데이터를 처리하는 시간보다 데이터가 도착하는게 더 빠르다면 ?
> 초과된 데이터는 어느 공간에서 처리 되기를 대기하고 있어야 한다.
> 데이터를 처리하는 시간보다 데이터가 빠르게 계속 도착하면 데이터를 처리하는 시간이 도착하는 시간보다 빠르면 ?
> 먼저 도착한 데이터는 처리되기전에 어느정도 데이터가 쌓일 때 까지 기다려야 한다.
> 그 데이터가 대기하는 영역이 buffer
> 컴퓨터에서 일반적으로 RAM의 영역에서 streaming 중에 데이터가 일시적으로 모이고, 기다리다가 데이터를 처리할 때 처리하기 위해서 내보내준다.
> NodeJS는 데이터가 도착하는 시간이나 전송되는 속도를 제어할 수 없다.
> NodeJS가 결정할 수 있는건 언제 데이터를 내보낼거냐 ?
> 아직 데이터를 내보낼 때가 아니면 NodeJS는 데이터들의 대기 영역인 RAM에 작은 영역인 buffer에 데이터를 쌓아 놓는다.
> 우리가 유튜브 등의 영상을 볼 때 인터넷이 좋으면 버퍼를 빠르게 채우고 데이터를 빠르게 내보내서 처리하는 것을 반복
> 반대로 인터넷이 좋지 않으면 로딩을 띄우면서 버퍼링이 걸리고
> 데이터가 더 도착할 때까지 기다린다는 의미, 데이터가 더 쌓이고 처리되면 영상이 다시 보여진다.

## buffer 객체
> NodeJS에서는 streaming을 하는 동안 자동으로 buffer를 만든다.

```js
const buf1 = Buffer.alloc(10); // size가 10인 버퍼 객체를 만든다. (10 byte)
const buf2 = Buffer.from("Hello Buffer"); // Buffer 객체에 "Hello Buffer" 라는 데이터를 담아준다.

// 버퍼 내용을 확인해보자.
console.log(buf1.toJSON());
console.log(buf2.toJSON());

buf1.write("Hello Buffer aaaaaaaaaa"); // 버퍼의 빈 공간에 내용을 넣은 것

// 버퍼를 디코딩
console.log(buf1.toString()); // 문자열로 변환
```