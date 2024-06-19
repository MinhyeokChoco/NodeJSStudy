const multer = require('multer');
const path = require('path');
// { upload: multer }
// multer 함수로 객체를 생성
exports.upload = multer({
    // 속성을 추가
    // storage : 어느 디스크를 사용할건지 ?
    // storage 서버 컴퓨터의 하드디스크에 저장할건지 ? 메모리에 저장할건지 ?
    storage: multer.diskStorage({
        // diskStorage : 서버 컴퓨터의 하드 디스크에 업로드 파일을 저장하는 객체를 생성
        // destination : 파일이 저장될 폴더를 지정
        destination: (req, file, done) => {
            // req : 요청의 내용
            // file : 파일의 정보의 내용
            // done("에러의 메시지", "저장할 폴더의 경로");
            done(null, "upload/")
        },
        filename: (req, file, done) => {
            // filename 업로드하는 파일의 이름을 설정
            // file.originalname : 사용자가 업로드한 원본의 파일명
            // path extname 메서드를 제공 => ex) file01.png => .png 이렇게 파일의 확장자만 추출
            const ext = path.extname(file.originalname);

            // 고유한 값을 만들어 줘야 한다.
            // 고양이.png가 이미 저장되어 있고 다른 사람이 고양이라는 이름의 png 파일을 업로드 하게 되면 이름이 중복 되어서 덮어쓰거나 경로가 잘못 될 수도 있다.
            // 그래서 고유한 값으로 이미지의 이름을 만들어 줘야 한다.

            // /upload/고양이.png
            // 시간을 이름으로 주는 것. 코드가 아무리 빨라도 동시는 없습니다.
            // 저장할 파일의 이름
            // basename : 이름에 확장자를 추가 혹은 제거 가능
            // 고양이.png => basename()을 통해서  => 고양이가 되었고, 고양이_20240619 + ext = 고양이_1231234.png
            const filename = path.basename(file.originalname, ext) + "_" + Date.now() + ext;
            done(null, filename);
            // filename == 실제로 서버에 저장할 파일명.
        }
    }),
    // 파일의 사이즈 설정을 최대 5MB로 설정
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});