CREATE TABLE user (
    user_id INT PRIMARY KEY,
    user_name VARCHAR(50)
);

CREATE TABLE passport (
    passport_id INT PRIMARY KEY,
    user_id INT unique, -- 고유한 값으로 중복되면 안되는 데이터
    passport_number VARCHAR(100),
    FOREIGN KEY (user_id) REFERENCES user (user_id)
    -- fk_user_id
);

CREATE TABLE address (
    address_id INT PRIMARY KEY,
    user_id INT,
    address VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES user (user_id)
);

CREATE TABLE student (
    student_id INT PRIMARY KEY,
    name VARCHAR(50)
);

CREATE TABLE courses (
    courses_id INT PRIMARY KEY,
    title VARCHAR(50)
);

CREATE TABLE linkcourses (
    student_id INT,
    courses_id INT,
    PRIMARY KEY (student_id, courses_id),
    FOREIGN KEY (student_id) REFERENCES student (student_id),
    FOREIGN KEY (courses_id) REFERENCES courses (courses_id)
);