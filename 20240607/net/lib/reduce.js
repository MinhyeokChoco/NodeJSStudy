// reduce
let a = [1, 2, 3, 4, 5, 6];
// 초기값을 지정할 수 있고
// []           0
// acc = 1      1
// acc = 2      2
const result = a.reduce((acc, content, index) => {
    acc[index] = content
    return acc;
}, [])

console.log(result);




// // reduce
// let a = [1, 2, 3, 4, 5, 6]
// // 초기값을 지정할 수 있고
// // []           0
// // acc = 1      1
// // acc = 2      2
// a.reduce((acc, content) => {
//     return
// }, [])