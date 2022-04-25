/** 생성자 함수에 의한 객체 생성 */

//1. new 연산자와 함께 Object 생성자 함수를 호출하는 경우
// 빈 객체 생성 
const person = new Object();

// 프로퍼티 추가 
person.name = 'Lee';
person.sayHello = function() {
    console.log('Hi! My name is Park Pyeong Soo!');
}

console.log(person);
person.sayHello();

//2. 빌트인 생성자 함수 (Number, String, Boolean, Function, Array, Date, RegExp, Promise 등등)
// - String 생성자 함수 
const strObj = new String('abc');
console.log(typeof strObj);
console.log(strObj);

// - Number 생성자 함수
const numObj = new Number(123);
console.log(typeof numObj);
console.log(numObj);

// - Boolean 생성자 함수
const boolObj = new Boolean(true);
console.log(typeof boolObj);
console.log(boolObj);

// - Function 생성자 함수
const func = new Function('x', 'return x*x');
console.log(typeof func);
console.dir(func); 

// - Array 생성자 함수 
const arr = new Array(1, 2, 3);
console.log(typeof arr);
console.log(arr);

// - RegExp 생성자 함수에 의한 RegExp 객체(정규표현식) 생성
const regExp = new RegExp(/ab+c/i);
console.log(typeof regExp);
console.log(regExp);

// - Date 생성자 함수에 의한 Date 객체 생성
const date = new Date();
console.log(typeof date);
console.log(date);

// => 객체 리터럴을 이용하여 객체를 생성하는 것이 더 간편하다!

/** < 객체 리터럴을 이용하여 객체를 생성하는 방식의 문제점 >
 * 객체 리터럴을 이용하여 객체를 생성하는 방식은 직관적이고 간편하다.
 * 하지만 객체 리터럴을 이용하여 생성할 수 있는 객체는 단 하나가 전부이다. 
 * 동일한 속성을 갖는 객체를 여러개 생성해야 하는 경우 매번 똑같은 속성을 선언해야하기 때문에 비효율적인 부분이 존재한다
 */

const circle1 = {
    radius : 5,
    getDiameter() {
        return 2 * this.radius;
    }
};

console.log(circle1.getDiameter());

const circle2 = {
    radius : 10,
    getDiameter() {
        return 2 * this.radius;
    }
}

console.log(circle2.getDiameter());

// circle1, circle2는 똑같은 프로퍼티를 가지고 있다. 하지만 객체 리터럴을 이용하여 객체를 생성해야 하는 경우 똑같은 프로퍼티를 객체 모두에 생성해야 하므로, 다소 비효율적이라 할 수 있다.

/** < 생성자 함수에 의한 객체 생성 방식의 장점 > 
 * 인스턴스를 생성하기 위한 템플릿처럼 생성자 함수를 사용하여 프로퍼티 구조가 동일한 객체 여러개를 간편하게 생성할 수 있다.
*/

function Circle(radius) {
    this.radius = radius;
    this.getDiameter = function() {
        return 2 * radius;
    }
}

const circle3 = new Circle(5);
const circle4 = new Circle(10);
console.log(circle3.getDiameter());
console.log(circle4.getDiameter());

// new 연산자와 함께 호출하면 해당 함수는 생성자 함수로 동작하지만, new 연산자와 함께 호출하지 않으면, 해당 함수는 일반 함수로 동작한다. 
 const circle5 = Circle(15); // new 연산자와 함꼐 사용하지 않았음 => Circle 일반함수로서 호출
 console.log(circle5); // circle5는 함수 그 자체이므로, undefined가 반환
 console.log(radius); // 일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킨다 => 15

/** 생성자 함수의 인스턴스 생성 과정 
 * 생성자 함수의 역할 : 인스턴스 생성 및 생성된 인스턴스 초기화 
 * -> 자바스크립트 엔진은 암묵적으로 인스턴스를 생성하고 반환함! (new 연산자와 함께 생성자 함수를 호출할 때 다음과 같은 과정을 거침)
 * 1. 인스턴스 생성과 this 바인딩 : 암묵적으로 빈 객체(인스턴스)가 생성된다(완성 x, 생성만!) 그리고 인스턴스는 this에 바인딩 된다 (함수의 코드가 실행되는 런타임 이전에 실행된다) 
 * 2. 인스턴스 초기화
 * 3. 인스턴스 반환
 */ 

// 바인딩 : 식별자와 값을 연결하는 과정을 의미한다. 예를 들면, 변수 선언은 식별자와 변수가 할당된 메모리 공간을 바인딩한다. this 바인딩은 this와 this가 가리키는 객체를 연결하는 것이다.

function Add(num1,num2) {
    // 1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다
    
    // 2. this에 바인딩되어 있는 인스턴스를 초기화한다
    this.x = num1;
    this.y = num2;
    this.sum = function() {
        return num1 + num2;
    }

    // 3. 완성된 인스턴스가 바인딩된 this가 암묵적으로 반환된다. 
}

const add = new Add(1,2);
console.log(add);

// 주의 : this가 아닌 다른 객체를 반환하게 되면 인스턴스는 this를 반환하지 않고 다를 객체를 반환하게 된다.
// Ex : return {}; => this 반환 무시, 빈 객체 반환한다. 하지만 명시적으로 객체가 아닌 원시 값을 반환하게 되면 엔진은 이를 무시하고 this를 반환한다.
// => 생성자 함수 내부에서 반드시 return 문을 생략해야 한다

/** < 내부 메서드 [[Call]], [[construct]] >
 * 함수 선언문 : 일반 함수 / 생성자 함수 모두 호출할 수 있다. 
 * 특히 생성자 함수로서 호출하는 것은 객체로서 호출한다는 것인데, 함수는 일반 객체와 마찬가지로 내부 슬롯과 내부 메서드 모두를 가지고 있다. 
 * 하지만 일반 객체와는 달리 함수 객체는 호출할 수 있다. 일반 객체가 가지고 있는 내부 메서드와 내부 슬롯 이외에도 함수 객체로서 동작하기 위한 추가적인 내부 슬롯과 내부 메서드를 가지고 있기 때문이다.
 * 1. 일반 함수로서 호출되는 경우 : 내부 메서드 [[Call]] 호출 
 * 2. 생성자 함수로서 호출되는 경우 : 내부 메서드 [[Construct]] 호출
 * 내부 메서드 [[Call]]을 갖는 함수 callable (모든 함수) / 내부 메서드 [[construct]]를 갖는 함수 객체 Constructor (생성자 함수를 호출할 수 있는 함수)/ 내부 메서드 [[constructor]] 갖지 않는 함수 객체 non-constructor (생성자 함수를 호출할 수 없는 함수)
 * 
 * constructor : 함수 선언문, 함수 표현식, 클래스(클래스도 함수임!)
 * non-constructor : 메서드(ES6축약표현 메서드), arrow function
*/

/** < new 연산자 > 
 * new 연산자와 함께 함수 호출 : constructor
 * new 연산자와 x 함수 호출 : non-constructor
*/

function sub (x,y) {
    return x-y; // 반환값이 객체가 아님 => non-constructor
}

let inst = new sub();
console.log(inst); // 빈 객체 반환 - [[Call]] 호출

function createUser(name, role) {
    return { name, role }; // 반환값이 객체 => constructor 
}

inst = new createUser('Park', 'student');
console.log(inst); // 객체 반환 - [[Construct]] 호출

