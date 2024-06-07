const fs = require('fs');
const path = require('path');

// public 폴더의 파일들의 루트 경로를 지정
// public 폴더의 경로가 루트 경로

const rootName = "public";
// __dirname => Macintosh HD/사용자/leeminhyeok/문서/MH/NodeJS/20240606/net/lib
const rootDir = path.join(__dirname, "..", rootName)

// 폴더 안의 내용을 찾는 함수
// Macintosh HD/사용자/leeminhyeok/문서/MH/NodeJS/20240606/net/public/css/style.css
// Macintosh HD/사용자/leeminhyeok/문서/MH/NodeJS/20240606/net/public/js/index.js

const result = {};
const find = (currentPath = rootDir) => {
    // 경로의 파일과 디렉토리 목록을 읽어오자
    // readdirSync : 동기적으로 파일과 디렉토리 목록을 가져오는 메서드
    const directory = fs.readdirSync(currentPath)

    for (const index in directory) {
        // console.log(index);
        // 폴더들의 경로를 완성
        // Macintosh HD/사용자/leeminhyeok/문서/MH/NodeJS/20240606/net/public/css
        // 경로가 있어야 폴더나 파일을 가져올 수 있다.
        // currentPath : 찾을 루트 경로와 찾을 폴더
        // join : 문자열 반환, 경로를 완성시켜서 하나의 문자열을 반환해준다.
        const findPath = path.join(currentPath, directory[index]);
        // console.log(findPath);

        // 만약 폴더인지 파일인지 정확히 몰라서 확인하고 싶을 때
        const isFile = fs.statSync(findPath).isFile(); // 반환되는 값이 파일이면 True, 디렉토리면 False

        if (!isFile) {
            // 폴더 안의 폴더
            // 폴더를 찾으려면 재귀를 사용해야 한다.
            find(findPath);
        } else {
            // 파일인 경우
            // 탐색하는 경로가 public 디렉토리인지 확인
            const key = currentPath === rootDir ? "/" : currentPath.replaceAll(rootDir, "");
            // key 객체화 시킬거라서 key 값을 뽑는 것.
            // Macintosh HD/사용자/leeminhyeok/문서/MH/NodeJS/20240606/net/public/js/index.js 원래 이렇게 나오는데 이렇게 나오면 문자열이 너무 길어서
            // js/index.js // 이렇게 객체화 시킨다고 함
            // css/style.css // 위와 이유 동일
            // http 경로 생성
            // \\ 문자열이 역슬래시 \\ 로 들어오는데 ex) \\css\\style.css => /css/style.css로 치환해야 함
            const httpPath = path.join(key, directory[index]).replaceAll("\\", "/")
            // replaceAt === 직접 만들어서 사용해야 한다. replaceAt이란 ? 첫번째가 아닌 특정 위치에 있는 문자열을 치환하고 싶을 때 사용
            // 내가 편하게 사용할 객체를 만들기 위해 만든 문자열 => /css + style.css
            // console.log(httpPath);
            result[httpPath] = directory[index];
        }
    }
    console.log(result);
    return result;
}

module.exports = find(rootDir);