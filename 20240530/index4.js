// NodeJS의 내장 모듈
const os = require("os");
const path = require("path");

console.log(os)

// NodeJS의 내장 객체
// Node의 전역 객체에는 global 객체가 있고
// NodeJS의 런타임 환경의 전역 객체
// global은 생략 할 수 있다.
// 브라우저에서 사용하던 런타임 환경과 다르다는걸 계속 인지해야 함

// console.log()

// NodeJS의 모듈의 각각의 파일 스코프를 가지게 되기 때문에 this는 모듈 자체를 가리킨다.

// console.log()
// __filename
// __filename : 파일 경로와 파일의 이름까지 보여줌. (자주 사용함)
console.log(__filename);

// __dirname
// __dirname : 실행한 파일의 디렉토리까지 보여줌.
console.log(__dirname);

// process 객체
// NodeJS의 프로세스 정보를 가지고 있는 객체

console.log(process.version); // 설치된 노드의 버전
console.log(process.execPath); // 노드의 경로
console.log(process.cpuUsage()); // CPU 사용량