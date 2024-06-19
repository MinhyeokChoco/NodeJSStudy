# 파일 업로드 Multer
> Multer express 환경에서 파일의 업로드를 처리하는 미들웨어
> 주로 multipart/form-data 형식의 데이터를 파일 처리 할 때 사용합니다.
> 파일 업로드를 할 수 있도록 기능을 제공합니다.
> 메모리 혹은 파일을 디렉터리에 저장하는 옵션을 사용 할 수 있습니다.

/img

/img/01.jpg

DB = /img/01.jpg

<img src = "/img/01.jpg">

## 구조
> Multer multipart/form-data 형식의 데이터를 처리하기 위해 스트림을 사용합니다.
> 우리가 지정한 위치에 저장한다.

> 스토리지 옵션 : 파일을 저장할 위치 방법을 설정 할 수 있는 옵션을 제공한다.
> 파일 필터링 : 업로드 되는 파일을 필터링 해서 확장자 등의 조건에 맞는 파일 처리만 할 수 있는 옵션을 제공.
ex : JPG, PNG 형식 필터링
> 파일 크기 제한 : 파일의 크기를 제한할 수 있는 옵션을 제공.

## RESTful API
> 웹 서비스 설계의 원칙 HTTP 프로토콜을 사용해서 클라이언트와 서버의 통신을 할 수 있게 개발 방법을 정한 것.
> 자원 기반 : 자원의 요청과 응답 간에는 URI HTTP 프로토콜 형식인 메서드가 있는데, 그 메서드 종류를 밑에 나열했습니다.
> get, post, put, delete
> 캐시 : 응답 데이터는 캐시화 될 수 있고, 성능이 향상된다.

## ajax, fetch, axios

### ajax
> 초기 웹페이지는 서버에서 모든 데이터를 받아야 했고, 페이지의 새로고침이 되지 않으면 데이터로 화면을 보여주기 불가능 했다.
> 이로 인한 불편함으로 데이터의 새로고침이 되지 않아도 볼 수 있는 기술을 개발 하기 시작했다.
> 1999년 XMLhttpRequest 객체를 만들고, 이로 인해 AJAX가 생겼고 페이지를 새로고침 하지 않고 서버와 데이터를 주고 받을 수 있게 됐다.
> XMLhttpRequest 객체로 데이터를 주고 받으면 비동기적으로 데이터를 주고 받을 수 있다.
> `상태`가 필요했고, 요청을 보내고 상태의 변화를 확인하다가 완료 상태가 되면 상태 코드를 확인하고 코드에 맞는 내용을 작성해줘야 한다.
> 상태코드를 조건문으로 200이든 404든 등등의 상태 코드들을 하드 코딩으로 확인 해서 작성을 해줘야 한다.
> 단점으로 콜백 지옥이 펼쳐 질 수 있다.

```js
// ajax
let xhr = new XMLhttpRequest();
xhr.open("GET", "http://127.0.0.1:3000/post");
// onreadystatechange 요청을 보내고 완료 상태가 되었을 때
// responseText 
xhr.onreadystatechange = () => {
    if((xhr.readyState === 4) && (xhr.status === 200)) {
        JSON.parse(xhr.responseText);
    }
}
xhr.send();
```

### Fetch
> ajax도 사용하기에 부족함은 없었는데 코드가 길어지는 문제가 있었고 이 부분의 문제를 개선한 모던한 API를 개발하자.
> 2015년도 쯤 fetch는 promise 기반으로 코드가 좀 더 직관적이고 짧아졌다.
> promise 기반이기 때문에 좀 더 비동기 처리를 쉽게 할 수 있게 됐다.
> 응답의 메시지를 객체로 받아서 JSON이나 text 형식의 데이터를 파싱해서 사용한다.
> 상태 코드를 제어해서 코드를 작성해야 하는 경우에는 따로 처리를 해줘야 한다.

```js
fetch("http://127.0.0.1:3000/post").then((res) => {
    if(!res.ok)
    return console.log("네트워크 에러");
    return res.json();
}).then(console.log(data));
```

### Axios
> fetch 이후 기능적으로 요청을 취소하거나, 타임아웃이나 JSON 변환을 기본 제공으로 할 수 있도록 개발했다.
> 자바스크립트 기반으로 개발한 라이브러리 이다.
> fetch와 차이점은 promise를 반환하지만 JSON 파싱(변환)은 자동으로 해주고 추가적으로 타임아웃 설정, 요청 취소, 요청과 응답의 인터셉터 기능이 있다.

```js
npm i axios

axios.get("http://127.0.0.1:3000/userinfo").then((res) => console.log(res.data));

const res = await axios.get("http://127.0.0.1:3000/userinfo");
console.log(res.data);
```

<!-- then catch 와 async await는 같이 사용하면 안된다. -->

#### then catch
1. Ajax : XMLhttpRequest 객체의 기반, 콜백 지옥의 문제가 있다.
2. Fetch : Promise 기반, 코드가 간결하고 직관적으로 작성할 수 있다. http 응답 내용 파싱 작업은 해줘야 한다.
3. Axios : Promise 기반, JSON 데이터를 파싱 해주는 기능을 기본으로 제공, 추가 기능 등등 제공
            Nodejs 라이브러리로 npm을 통해서 설치 혹은 cdn(Content Delivery Network) 이용