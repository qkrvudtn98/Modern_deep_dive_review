let person = {
    name: '박평수',
    age: 25,
    tall: 175
};

// 객체를 반복문으로 순회하는 방법 
// 1. key 값을 반환하는 방법  
const personKeys = Object.keys(person);
// 2. value 값을 반환하는 방법
const personValues = Object.values(person);

for(let i = 0; i<personKeys.length; i++) {
    const curKey = personKeys[i];
    const curValue = person[curKey];

    console.log(`${curKey} : ${curValue}`);
}

/* 배열 내장 함수 */

// 1. forEach 메서드 : 배열의 모든 요소를 한번씩 순회
const arr = [1, 2, 3, 4];
const newArr = [];

// elem이라는 배열의 요소들을 전달받는 콜백함수
arr.forEach((elem) => console.log(elem));

arr.forEach(function(elem) {
    console.log(elem * 2);
}); 

arr.forEach(function (elem) {
    newArr.push(elem * 2);
});

console.log(newArr);

// 2. map 메서드 : 배열의 모든 요소들에 대해 한번씩 콜백함수 수행 => 로직을 수행하여 나온 요소값들을 새로운 배열에 저장
const arrA = [1, 2, 3, 4];
const newArr1 = arr.map((elem) => {
    return elem * 2;
});

console.log(newArr1);

let number = 3;

// 3. includes 메서드 : 주어진 배열에서 전달받은 인자와 같은 값이 있는지 확인하는 역할을 수행 (Boolean 값으로 반환)
console.log(arr.includes(number));

// 4. indexOf 메서드 : 주어진 배열에서 전달받은 인자의 인덱스 값이 있는지 확인하고, 만약 있다면 인덱스 값을 반환, 없다면 -1을 반환한다.
console.log(arr.indexOf(number));

// 5. findIndex 메서드 : 객체를 포함한 배열일 경우 사용 (인덱스가 필요할 때) / find 메서드 : 요소 자체가 필요할 때 사용
const arrB = [
    {color: 'red'},
    {color: 'black'},
    {color: 'blue'},
    {color: 'green'},
    {color: 'blue'}
];

// 요소 값의 인덱스가 필요할 때
const idx = arrB.findIndex((elem) => {
    return elem.color === 'green';
})

console.log(idx);

// 요소 값 자체를 가져오고 싶을 때
const element = arrB.find((elem)=>{
    return elem.color === 'blue';
});

console.log(element);

// 6. filter 메서드 : 특정 조건을 갖는 배열의 요소를 가져오고 싶을 때 사용
const arrC = [
    {num: 1, color: 'red'},
    {num: 2, color: 'black'},
    {num: 3, color: 'blue'},
];

console.log(arrC.filter((elem) => elem.color === 'blue'));

// 7. slice 메서드 : 특정 조건에 의해 원하는 부분의 배열을 자르는 함수

// console.log(arrC.slice(0, 1)); 

// 8. concat 메서드 : 원하는 배열들을 이어붙이고 싶을 때 사용
const arrD = [
    {num: 4, color: 'green'},
    {num: 5, color: 'blue'}
];

console.log(arrC.concat(arrD));

// 9. sort 메서드 : 원본 배열의 순서를 사전순으로 정렬 (문자열을 기준으로 정렬)

let chars = ['나', '다', '가'];
chars.sort();
console.log(chars);

// 숫자의 경우
let numbers = [0, 1, 3, 2, 10, 30, 20];
const compare = (a,b) => {
    // 1. 같다
    // 2. 크다
    // 3. 작다

    if(a>b) {
        // 크다
        return 1;
    }

    if(a<b) {
        // 작다
        return -1;
    }

    // 같다
    return 0;
}

numbers.sort(compare);

console.log(numbers);

// 10. join 메서드 : 문자열 결합 메서드 
const arrE = ['박평수', '님', '안녕하세요', '또 오셨군요'];

console.log(arrE.join(' ')); // 구분자는 ''사이에 작성하면 됨!!