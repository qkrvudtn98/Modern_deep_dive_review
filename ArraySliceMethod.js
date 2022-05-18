/** Array.prototype.slice 메서드 
 * slice 메서드는 인수로 전달된 범위의 요소들을 복사하여 배열로 반환 (원본배열 변경x)
 * 주의 : splice 메서드는 원본 배열을 변경 (헷갈리지 말것!)
 * 매개변수 : start / end (생략 가능하며 생략할시 기본값은 length 프로퍼티 값이다)
 */

// EX1
const arr=[1,2,3];

console.log(arr.slice(0,1)); // arr[1]은 포함하지 않는다 
console.log(arr.slice(1,2)); // arr[2]는 포함하지 않는다
console.log(arr); // 원본 배열 변경 x

// slice 메서드는 전달받은 인데스로부터 end인덱스를 제외한 나머지 범위 안의 요소들을 복사하여 반환한다.

//EX2 
const arr1=[1,2,3];

console.log(arr.slice(1)); //end 인덱스를 생략했으므로 end 인덱스를 제외한 모든 요소들을 반환한다.

//EX3
const arr2=[1,2,3];

console.log(arr.slice(-1)); // 맨 뒤에서부터 하나의 요소를 반환한다.
console.log(arr.slice(-2)); // 맨 뒤에서부터 두개의 요소를 반환한다.

//EX4 
const arr3=[1,2,3];

const copy=arr.slice(); // 인자를 전달해주지 않는다면 원본 배열의 복사본을 전달해준다 
console.log(copy); 
console.log(copy===arr3); // 하지만 이때 slice 메서드가 실행하는 복사는 얕은 복사이므로, 원본 배열과 비교하면 false가 출력된다

//EX5 얕은 복사 예시 
const todos=[
    { id:1, content: 'HTML', completed: false},
    { id:1, content: 'CSS', completed: true},
    { id:1, content: 'JavaScript', completed: false}
];

// 얕은 복사 
const _todos = todos.slice();
// const _todos = [...todos];

// _todos와 todos는 참조값이 다른 별개의 객체다 
console.log(_todos===todos);

// 배열 요소의 참조값이 같다 (얕은 복사)
console.log(_todos[0]===todos[0]);

// EX6 
function sum() {
    // 유사 배열 객체를 배열로 변환 
    var arr4=Array.prototype.slice.call(arguments);
    console.log(arr4);

    return arr4.reduce((pre, cur) => {
        return pre + cur;
    }, 0);
}

console.log(sum(1,2,3));

// EX7
function sum1() {
    const arr5=Array.from(arguments);
    console.log(arr5);

    return arr.reduce((pre, cur) => pre + cur, 0);
}

console.log(sum1(1,2,3));

//EX8 
function sum2() {
    const arr6=[...arguments];
    console.log(arr6);

    return arr6.reduce((pre, cur) => pre + cur,0);
}

console.log(sum2(1,2,3,4));
