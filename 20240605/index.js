const fs = require('fs');
// 내장 모듈 fs

// 파일을 읽거나 쓰거나 삭제, 생성 등을 할 때 사용하는 내장 모듈 파일 시스템
// 폴더가 있는지 확인
// existsSync : 폴더가 있는지 확인, 반환값이 true false
let folder = fs.existsSync("./Test");
console.log(folder);
// fs에 메서드가 많음, Sync가 붙으면 동기적으로 처리하겠다는 뜻
// exists 존재한다 라는 뜻

// 폴더가 없으면 생성
if (!folder) {
    // 비동기적으로 실행되는 메서드
    // 매개변수로 폴더를 만들 경로를 전달
    // fs.mkdir("./Test", (err) => {
    //     if (err) {
    //         console.log(err)
    //         console.log("에러 발생");
    //     } else {
    //         console.log("Test 폴더가 정상적으로 만들어짐")
    //         // 폴더가 생성되고 처리 해야 할 내용
    //     }
    // })

    // 페이지의 게시판을 만드는 내용
    // 나머지 기능적인 부분이나 페이지를 그리는 내용은 동기 비동기 나눠야 함

    const text = fs.mkdirSync("./Test");
    // 폴더에 파일을 만드는 내용(나 폴더 필요한데 ? 폴더가 없네 ?)
    // try catch 많이 사용 해야 함, 숙지 필요
    console.log(text);
    console.log("동기니?")
}

// 폴더를 만들었으니 폴더에 파일을 추가해보자
// writeFile : 파일을 쓰기, 파일에 데이터를 포함하여 파일을 만들어준다.
// writeFile("파일 생성 경로 및 파일 이름", "파일에 작성할 내용", "함수")
// fs.writeFile("./Test/text.txt", "Hello NodeJS", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("파일이 잘 만들어 졌음");
//     }
// })
// 폴더는 mkdir로 생성 하려고 했을 때 이미 폴더가 있으면 에러가 뜨지만
// 파일은 writeFile로 재생성 및 재작성 했을 때 이미 있다면 내용을 수정, 새로 쓴다는 느낌이다, 덮어 쓰는 느낌이다.

fs.writeFileSync("./Test/text.txt", "Hello NodeJS MH");
console.log("파일이 잘 만들어 졌음 !")

// 파일을 읽어오자
// 전달한 익명함수의 매개변수 순서가 에러 결과 순으로 작성
// 경로, "인코딩 방식", "함수 (매개변수 안에 읽은 데이터를 담을 data를 , 뒤에 작성)"
// fs.readFile("./Test/text.txt", "utf8", (err, data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// })

// 동적으로 실행
let data = fs.readFileSync("./Test/text.txt", "utf8");
console.log(data);

// 삭제
// recursive 삭제할 때의 옵션 (폴더 안에 있는 내용까지 삭제하겠다.)
fs.rm("./Test", { recursive: true }, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("폴더가 잘 삭제 됐음 !")
    }
})

// 비동기적으로 하려면 콜백함수가 있어야 하고
// 동기적으로 Sync를 붙여서 하려면 콜백함수가 없어야 함
// 이거는 물어봐야 할 듯