/** 배열 메서드 : reduce
 * reduce 메서드는 자신을 호출한 배열의 모든 요소를 순회하며 인수로 전달받은 콜백함수를 반복 호출한다. 
 * 그리고 콜백 함수의 반환값을 다음 순회 시에 콜백 함수의 첫 번째 인수로 전달하면서 콜백 함수를 호출하여 하나의 결괏값을 만들어 반환 (원본 배열 변경 x)
 * 
 * reduce 메서드의 구조 
 * - 두 개의 인수로 이루어져 있는데, 첫 번째 인수로는 콜백 함수, 두 번째 인수로는 초깃값이다. 
 * - 이 콜백 함수의 인수는 총 4개이다 ( 초깃값 or 콜백 함수의 이전 반환값 / reduce 메서드를 호출한 배열의 요소값 / 인덱스 / reduce 메서드를 호출한 배열 자체 ) 
 */

// 1부터 4까지의 누적을 구한다
const sum = [1,2,3,4,5,6].reduce((accumulator, currentValue, index, array) => accumulator + currentValue, 0);
console.log(sum); // 21

/** reduce 활용 예시 */

// 1. 평균 구하기 
const values = [1,2,3,4,5,6];

const average = values.reduce((acc, cur, i, { length }) => {
    return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);

console.log(average);

// 2. 최대값 구하기

const values1 = [1,2,3,4,5];

const max = values1.reduce((acc, cur) => (acc > cur ? acc : cur), 0);

console.log(max); // 최댓값을 구할 때에는 Math.max 메서드를 사용하는 방법이 더 편리하다 

const max1 = Math.max(...values1);

console.log(max1);

// 3. 요소의 중복 횟수 구하기 
const fruits = ['banana', 'apple', 'orange', 'orange', 'apple'];

const count = fruits.reduce((acc, cur) => {
    /** 첫 번째 순회 : acc = 초깃값 {}, cur = 배열의 첫번째 요소 'banana' 
     * 초기값으로 전달받은 빈 객체에 요소값은 cur을 프로퍼티 키로, 요소의 개수를 프로퍼티 값으로 할당한다. 
     * 만약 프로퍼티 값이 undefined이면 프로퍼티 값을 1로 초기화한다.
     */
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
}, {});

console.log(count);

// 4. 중첩배열 평탄화
const values2 = [1, [2,3], 4, [5,6]];

const flatten = values2.reduce((acc, cur) => acc.concat(cur), []);

console.log(flatten); // 중첩배열을 평탄화 할 때는 flat 메서드를 사용하는게 더 효과적이다 

console.log([1, [2,3,4,5]].flat());
// 인수 2는 중첩 배열을 평탄화하기 위한 값이다.
console.log([1, [2,3,[4,5]]].flat(2));

// 5. 중복요소 제거
const values3 = [1,2,1,3,5,4,5,3,4,4];

const result = values3.reduce(
    /** 
     * 현재 순회중인 요소의 인덱스 i가 val의 인덱스와 같다면 val은 처음 순회하는 요소이다
     * 현재 순회중인 요소의 인덱스 i가 val의 인덱스와 같지 않다면 val은 중복된 요소이다
     * 처음 순회하는 요소만 초기값 []가 전달된 unique 배열에 담아 반환하면 중복된 요소는 제거된다
     */
    (unique, val, i, _values) => 
        _values.indexOf(val) === i ? [...unique, val] : unique, []
)

console.log(result); // 중복된 요소를 제거할 때는 filter 메서드를 사용하는 것이 더 직관적이다

// filter Method
const result1 = values3.filter((val, i, _value) => _value.indexOf(val) === i);
console.log(result1);

// set Method (중복 요소 제거할 때 이 방법 추천)

// Set 객체는 중복을 허용하지 않는 유일한 객체 => 배열에서 중복된 요소 제거
const result2 = [...new Set(values3)];
console.log(result2);