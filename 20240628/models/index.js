const config = require('./config');
const Users = require('./users');
const Posts = require('./posts');
const Sequelize = require('sequelize');

// Sequelize class 생성자
// Sequelize 객체 생성
// Sequelize 생성자 함수
// 매개변수를 순서대로 줘야 한다.
// 데이터베이스 이름, 사용자 이름, 비밀번호, 전체 객체 내용

// 시퀄라이즈 객체 생성
// 매개변수 순서는 정해져 있는거라 맞춰서 전달해줘야 함
const sequelize = new Sequelize(config.dev.database, config.dev.username, config.dev.password, config.dev);

const db = {};
db.sequelize = sequelize;
db.Users = Users;
db.Posts = Posts;

Users.init(sequelize);
Posts.init(sequelize);

Users.associate(db);
Posts.associate(db);

// 시퀄라이즈 연결
// mysql에 커넥션 요청을 보내고
// 매핑까지

// sync 시퀄라이즈 연결 요청
// 반환 값이 promise이다.
// 초기화 할 지 ?

sequelize.sync({ force: false }).then(async () => {
    // 연결 성공
    console.log("연결 성공");
    // Users 테이블 매핑 객체
    // insert into users (name, age, msg) values("hyeok", 20, "안녕")
    // create
    // Users.create({
    //     name: "hyeok",
    //     age: 20,
    //     msg: "Hi"
    // })

    // await Posts.create({
    //     content: "오코노미야끼 맛있겠다."
    // })

    // Posts.findAll => 다 찾을건지
    // Posts.findOne => 하나만 찾을건지

    // 여러개 조회
    // select * form Posts where id = 1;
    // const datas = await Posts.findAll({ where: { content: 123 } });
    // const data = datas.reduce((acc, el) => { acc.push(el.dataValues); return acc; }, []);
    // dataValues key를 파싱해서 사용하면 된다.
    // 서버측에서 확인을 하고 있어서
    // axios 요청 보내서 데이터를 응답 받으면 파싱이 되어 있을 것.
    // const data = await Posts.findOne({ where: { id: 1 } });
    // const data = await Posts.findOne({ where: { id: 1 }, raw: true });
    // await Posts.update({
    //     content: "하이볼 가즈아"
    // }, { where: { id: 3 } })
    // // 1 로그는 수정이 잘 되었다 라는 뜻이다.
    // const data2 = await Posts.findOne({ where: { id: 3 } });
    // console.log(data2.dataValues);

    await Posts.destroy({ where: { id: 1 } });


}).catch((error) => {
    // 실패
    console.log("연결 실패", error);
}
)

// 테이블 간에 매핑할 객체를 만들어줘야한다.
// 자바스크립트로 매핑할 내용을 객체로 작성 해줘야 한다.
// 사용자 객체를 만들어 봅시다.

// try catch랑 then catch랑 차이점 알아보기

module.exports = db;

// 게시글을 추가, 삭제, 수정, 조회
// 사용자가 글을 쓸 수 있게 설계 (로그인이 있다는 가정 하에)
// 게시글이 있다는 것은 사용자가 있다는 얘기
// 사용자가 없으면 게시글을 추가 할 수 없다. 제약조건 외래키
// 조회 할 때 사용자의 글이 맞는지 조회 join