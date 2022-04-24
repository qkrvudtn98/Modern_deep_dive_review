/* 배열 메서드 : concat 
    - 인수로 전달된 값들을 원본 배열의 마지막 요소로 집어넣는 메서드 
    - 전달된 인수가 배열일 경우 배열을 해체하여 안의 요소값들만 원본 배열에 집어넣는다
**/
const arr1 = [1,2];
const arr2 = [3,4];

let result = arr1.concat(arr2);
console.log(result);

// arr.concat(arg) : 괄호 안의 인수값을 원본 배열의 마지막 요소값으로 집어넣지만, 원본 배열은 변하지 않는다. (arr1)
result = arr1.concat(3);
console.log(result);

// 인수로 배열과 원시값이 들어올 경우, 배열을 해체하고, 원시값을 원본 배열에 집어넣는다. 
result = arr1.concat(arr2, 5);
console.log(result);

// 원본 배열은 변경되지 않는다.
console.log(arr1);

/* push, unshift 메서드와 concat 메서드의 차이점 
- push, unshift 메서드 : 원본 배열을 변경한다. 
=> 원본 배열을 반드시 변수에 저장하여야 변경된 배열을 표시할 수 있다.
    - push 메서드 : 전달받은 배열을 원본 배열의 맨 뒤에 추가한다. (배열을 해체하지 않는다)
    - unshift 메서드 : 전달받은 배열을 원본 배열의 맨 앞에 추가한다. (배열을 해체하지 않는다)
- concat 메서드 : 원본 배열을 변경해주지 않고 새로운 배열을 반환한다. 
=> 변경된 배열을 반드시 변수에 할당하여야 사용할 수 있다. (배열을 전달받은 경우 해체하여 새로운 배열의 맨 뒤에 추가한다.)
**/

// concat 메서드는 스프레드 문법으로 대체할 수 있다.
let spread1= [1,2].concat([3,4]);
console.log(spread1);

let spread2 = [...[1,2], ...[3,4]];
console.log(spread2);