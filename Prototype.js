/** 상속과 프로토타입 
 * 상속 : 어떤 객체의 프로퍼티 또는 메서드를 다른 객체가 그대로 사용하게 하는 것 
 * 자바스크립트는 프로토타입을 기반으로 상속을 구현하여 불필요한 중복을 제거함!! 
 */

// 생성자 함수 
function Circle(radius) {
    this.radius = radius;
    this.getArea = function () {
        return radius * radius * Math.PI;
    }
}

const circle1 = new Circle(1);
const circle2 = new Circle(2);

// Circle 생성자 함수는 인스턴스를 생성할 때 마다 동일한 동작을 하는 getArea 메서드를 중복 생성하고 모든 인스턴스가 중복 소유한다. 
// getArea 메서드는 하나만 생성하고 모든 인스턴스가 공유하여 사용하는 것이 바람직하다. 
console.log(circle1.getArea === circle2.getArea);

console.log(circle1.getArea());
console.log(circle2.getArea());

/** 생성자 함수는 원래 동일한 프로퍼티를 갖는 객체를 여러개 생성할 때 유용하지만, 
 * 위의 생성자 함수의 경우, getArea라는 메서드를 circle1, circle2라는 두 객체가 사용한다. 
 * 이때, 생성자 함수는 동일한 getArea 메서드를 중복 생성하며, 두 인스턴스는 이를 중복 사용한다.
 * 하지만 동일한 메서드를 사용한다면, 하나의 메서드를 공유하여 사용하면 될 것이다. 
 * 중복 사용을 하게 된다면, 메모리를 낭비하게 되며, 퍼포먼스에도 악영향을 준다. 
 * => 프로토타입을 기반으로 상속을 구현! 
 */

function Circle1(radius) {
    this.radius = radius;
}

// Circle1 생성자 함수가 동일한 메서드를 사용하는 인스턴스들에게 메서드를 공유해서 사용할 수 있도록 프로토타입에 추가한다.
// 프로토타입은 Circle1 생성자 함수의 prototype 프로퍼티에 바인딩되어 있다.
Circle1.prototype.getArea = function() {
    return Math.PI * this.radius ** 2;
}

const circle3 = new Circle1(1);
const circle4 = new Circle1(2);

console.log(circle3.getArea === circle4.getArea); // true => 두 인스턴스가 똑같은 메서드를 공유한다는 것을 알 수 있다.
console.log(circle3.getArea());
console.log(circle4.getArea());
console.log(circle4);

/** Circle1 생성자 함수가 생성한 모든 인스턴스는 자신의 프로토타입 (상위 객체 - 부모의 역할을 수행함)인 Circle1.prototype에게 
 * 모든 프로퍼티와 메서드들을 상속받는다 
 * => circle3, circle4 (인스턴스)들은 상위 객체인 Circle1.prototype에게 getArea 메서드를 상속받아 사용할 수 있게 된다 (radius 프로퍼티는 개별 소유)
*/

// < 프로토타입 객체 >

// [ __proto__ 접근자 프로퍼티 ]
// 모든 객체는 __proto__ 접근자 프로퍼티를 통해서 자신의 프로토타입, [[Prototype]] 내부 슬롯에 간접적으로 접근할 수 있다

// 1. __proto__는 접근자 프로퍼티이다 

 const obj = {};
 const parent = { x : 1 };

 // __proto__를 사용하여 obj의 내부 슬롯 [[Prototype]]에 접근
 // 내부 슬롯 [[Prototype]]에 접근 하면 getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 획득한다
 obj.__proto__;
 // 얻어낸 프로토타입에 새로운 값을 할당하면 setter 함수인 set __proto__가 호출되어 obj객체의 프로토타입을 parent의 프로토타입으로 교체
 obj.__proto__ = parent;

 console.log(obj.x);

// 2. __proto__ 접근자 프로퍼티는 상속을 통해 사용된다
// __proto__ 접근자 프로퍼티는 객체가 직접 소유하는 프로퍼티가 아니라 Object.prototype의 프로퍼티이다.
// 모든 객체는 상속을 통해 Object.prototype.__proto__접근자 프로퍼티를 사용할 수 있다.

const animal = { name : 'Lion' };

// animal 객체는 직접 __proto__ 프로퍼티를 소유하지는 않는다
console.log(animal.hasOwnProperty('__proto__'));

// __proto__ 프로퍼티는 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));

// 모든 객체는 Object.prototype의 접근자 프로퍼티인 __proto__를 상속받아 사용할 수 있다
console.log({}.__proto__ === Object.prototype);

// 3. __proto__ 접근자 프로퍼티를 통해 프로토타입에 접근하는 이유 
// 프로토타입에 접근하기 위해 접근자 프로퍼티 __proto__를 사용하는 이유는 상호 참조에 의해 프로토타입 체인이 생성되는 방지하기 위해서이다.

const ancestor = {};
const child = {};

// 객체 child의 프로토타입을 ancestor로 설정 
child.__proto__ = ancestor;
// 객체 ancestor의 프로토타입을 child로 설정 => 에러!
// ancestor.__proto__ = child; 

/** child의 상위 객체를 이미 ancestor로 설정하였는데, ancestor의 상위 객체를 child로 설정한다면, 
 * 서로 참조하게 되는 현상이 발생한다. 하지만 프로토타입 체인은 단방향 링크드 리스트의 구조를 가지고 있어
 * 한 방향으로만 탐색을 실시하여야 한다. 그렇기에 위와 같은 상황은 프로토타입에서 프로퍼티를 검색할 때 무한루프에 빠지게 만든다
 */

/** 4. __proto__ 접근자 프로퍼티를 코드 내에서 사용하는 것은 권장하지 않는다 
 * => 모든 객체가 __proto__ 접근자 프로퍼티를 사용하는 것은 아니기 때문 ( __proto__ 접근자 프로퍼티를 사용할 수 없는 경우가 있음 )
*/

// obj1는 프로토타입 체인의 종점이다. 따라서 __proto__ 접근자 프로퍼티를 사용하여 접근할 수 없다 
const obj1 = Object.create(null);

// Object.__proto__를 상속받을 수 없다
console.log(obj1.__proto__);

// 따라서 __proto__ 보다 Object.getPrototypeOf 메서드를 사용하는 편이 좋다
console.log(Object.getPrototypeOf(obj1));

// ------------------------------------------------------------------------------ //

const obj2 = {};
const parent1 = { x : 1 };

// getPrototypeOf 메서드를 사용하여 obj2의 프로토타입 취득 
Object.getPrototypeOf(obj2); // obj.__proto__;
// setPrototypeOf 메서드를 사용하여 obj2의 프로토타입을 교체  (obj2 프로토타입 -> parent 프로토타입)
Object.setPrototypeOf(obj2, parent); // obj.__proto__ = parent;

console.log(obj2.x);

/** [ 함수 객체의 prototype 프로퍼티 ] 
 * => 함수 객체만이 소유하는 prototype 프로퍼티는 생성자 함수가 생성할 인스턴스의 프로토타입을 가리킨다
*/

(function () {}).hasOwnProperty('prototype'); // true
({}).hasOwnProperty('prototype'); // false

// constructor만 prototype 프로퍼티를 가진다. 즉, non-constructor(화살표 함수, ES6 축약표현)는 prototype 프로퍼티를 갖지 않는다.  

/** 모든 객체가 가지고 있는 __proto__ 프로퍼티 == 함수 객체만 가지고 있는 prototype 프로퍼티  
 * => Object.prototype을 가리킨다 (하지만 그 목적과 사용하는 주체가 다름!)
 * 1. __proto__ 프로퍼티 : 모든 객체가 소유하고 있으며 객체 자신의 [[Prototype]]에 간접적으로 접근하거나 교체해주기 위해서 사용 
 * 2. prototype 프로퍼티 : 함수 객체만 소유하고 있으며 생성자 함수가 만들어낼 인스턴스의 프로토타입을 할당하게 위해서 사용 
 */

function Person(name){
    this.name = name;
}

const me = new Person('Lee');

console.log(Person.prototype == me.__proto__); // 함수 객체 Person의 prototype과 일반 객체 me의 __proto__이 가리키는 대상이 동일함 (Object.prototype)

/** [ 프로토타입의 constructor 프로퍼티와 생성자 함수 ] */

//----------------------------------------------------------------------------------------------------------------------------------

/** Object.keys 메서드 
 * => 객체 자신의 열거 가능한 프로퍼티 키를 배열로 반환한다
 */

const person = {
    name: 'Lee',
    address: 'Seoul',
    __proto__: {age: 20}
};

console.log(Object.keys(person)); // 객체의 key를 배열로 반환
console.log(Object.values(person)); // 객체의 value를 배열로 반환