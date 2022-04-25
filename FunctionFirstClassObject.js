/** 함수와 일급객체 
 * < 일급 객체 >
 * 1. 무명의 리터럴로 생성할 수 있다 (런타임에 생성 가능)
 * 2. 변수나 자료구조 (객체, 배열)에 저장할 수 있다
 * 3. 함수의 매개변수에 전달할 수 있다
 * 4. 함수의 반환값으로 사용할 수 있다
 */

// 자바스크립트의 함수는 일급 객체이다

// 함수를 변수에 저장함 (2)
const increase = function(num) {
    return ++num;
}

const decrease = function(num) {
    return --num;
}
// 함수를 객체에 저장함 (2)
const auxs = { increase, decrease };

function makeCounter(aux) {
    let num = 0;

    // 함수를 반환값으로 사용함
    return function() {
        num = aux(num);
        return num;
    };
}
// 함수를 매개변수에 전달함
const increaser = makeCounter(auxs.increase);
console.log(increaser());
console.log(increaser());
// 함수를 매개변수에 전달함
const decreaser = makeCounter(auxs.decrease);
console.log(decreaser());
console.log(decreaser());

// => 함수는 일급객체의 모든 조건을 충족함!
/** 함수 : 일급객체 -> 함수와 객체를 동일하게 사용할 수 있음! 
 * 객체는 값이므로 함수는 값으로서 사용할 수 있는데, 그렇기에 값으로서 사용할 수 있는 곳이라면
 * 어디든지 함수를 리터럴로 정의할 수 있다. (변수 할당문, 객체의 프로퍼티 값, 배열의 요소, 함수 호출의 인수, 함수 반환문)
 */

// 함수 객체와 일반 객체의 차이점 : 일반 객체는 호출할 수 없지만, 함수 객체는 호출할 수 있다! 

// < 함수 객체의 프로퍼티 >
function square(number) {
    return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
/** 함수 객체의 데이터 프로퍼티 (arguments, caller, length, name, prototype)
 * arguments: {value: null, writable: false, enumerable: false, configurable: false}
   caller: {value: null, writable: false, enumerable: false, configurable: false}
   length: {value: 1, writable: false, enumerable: false, configurable: true}
   name: {value: 'square', writable: false, enumerable: false, configurable: true}
   prototype: {value: {…}, writable: true, enumerable: false, configurable: false}
 */

/** [ arguments 프로퍼티 ] 
 * 함수의 arguments 프로퍼티 값은 arguments 객체이다
 * arguments 객체 : 함수 호출 시 전달된 인수들의 정보를 담고 있는 순회 가능한 유사배열객체 / 함수 내부에서 지역 변수처럼 사용된다 (함수 외부에서는 사용될 수 없다)
 * 매개변수와 인수의 개수가 일치하는지는 참조하지 않는다 => 개수가 달라도 에러가 발생하지는 않음!
*/

function multiply(x,y) {
    console.log(arguments);
    return x * y;
}

console.log(multiply());
console.log(multiply(1));
console.log(multiply(1,2));
console.log(multiply(1,2,3));

// 매개변수의 개수 > 인수의 개수 : 전달되지 않은 인수는 undefined로 초기화된 상태 유지 => 결과값 NaN
// 매개변수의 개수 < 인수의 개수 : 초과된 인수는 무시함 
// 선언된 매개변수의 개수와 함수를 호출할 때 전달하는 인수의 개수를 확인하지 않는 자바스크립트의 특성 때문에 함수가 호출되면 인수의 개수를 확인하고 동작을 다르게 정의해야할 필요가 있을 수 있다.
// => arguments 객체는 그렇기에 매개변수의 개수를 확정할 수 없는 '가변인자함수'를 구현할 때 유용하다

function sum() {
    let res = 0;
    // arguments : 유사 배열 객체 => for문으로 순회하며 인수들의 동작을 정의할 수 있다
    for (let i = 0; i < arguments.length; i++) {
        res = res + arguments[i];
    }
    return res;
}

console.log(sum(1));
console.log(sum(1,2));
console.log(sum(1,2,3));
console.log(sum(1,2,3,4));

/** [ caller 프로퍼티 ] 
 * 자기자신이 호출한 함수
*/

/** [ length 프로퍼티 ]
 * 함수를 정의할 때 선언한 매개변수의 개수
 */

// 매개변수 0개
function foo() {}
console.log(foo.length);

// 매개변수 1개
function bar(x) {
    return x;
}
console.log(bar.length);

// 매개변수 2개
function baz(x,y) {
    return x*y;
}
console.log(baz.length);

// 주의사항 : arguments의 length는 인수의 개수를 가리키고, length 프로퍼티의 값은 매개변수의 개수를 가리킨다.

/** [ name 프로퍼티 ] 
 * 함수의 이름을 나타내는 프로퍼티 (ES5와 ES6에서 동작을 달리한다)
*/

// 기명 함수 표현식
var namedFunc = function foo() {}
console.log(namedFunc.name); // 함수 이름을 값으로 갖는다
// 익명 함수 표현식
var anonymousFunc = function () {}
console.log(anonymousFunc.name); // 함수 객체를 가리키는 변수 이름을 값으로 갖는다
// 함수 선언문
function bar() {}
console.log(bar.name); // bar

/** [ prototype 프로퍼티 ] 
 * 생성자 함수로 호출할 수 있는 함수 객체이다 (constructor만이 소유할 수 있음)
 * => 일반 함수와 생성자 함수로 호출할 수 없는 non-constructor에는 prototype이 없음!
*/

(function() {}).hasOwnProperty('prototype'); // true (함수 객체) => prototype 프로퍼티 o 
({}).hasOwnProperty('property'); // false (일반 객체) => prototype 프로퍼티 x