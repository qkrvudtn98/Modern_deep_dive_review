let personB = new Object(); // 객체 생성자 방식 

let personA = {
    key : 'value', // 프로퍼티 (객체 프로퍼티)
    key1 : 123,
    key2 : true,
    key3 : undefined,
    key4 : [1,2],
    key5 : function () {}
}; // 객체 리터럴 방식 

console.log(personA.key1);
console.log(personA.key2);

const personC = {
    name: '박평수',
    age: 25
};

console.log(personC['name']); // 대괄호 표기법 (반드시 프로퍼티의 키 이름을 문자열로 만들어주어야 함) 문자열로 만들어주지 않으면 변수로 인식함 
console.log(personC.age); // 점 표기법 

console.log(getPropertyValue('name'));

// 객체의 프로퍼티 값에 접근하는 함수 (대괄호 표기법) => 동적인 파라미터를 전달받는 상황 / key 값을 꺼내와야 하는데 그 값이 고정적이지 않은 상황에 유용! 
function getPropertyValue(key) {
    return personC[key];
}

// 프로퍼티 값 추가 
personC.location = '한국';
personC['gender'] = '남성';
// 프로퍼티 값 수정
personC.name = '박평수 A';
personC['age'] = '27';

console.log(personC);

// let을 const로 바꾸어도 위의 코드들이 정상적으로 동작할까? 
// 정상적으로 동작한다. const personC안의 프로퍼티 값을 바꾸는 행위는 객체 자체를 수정하는 것이 아닌 객체 안의 속성값을 수정하는 행위이기 때문에 personC의 값 자체를 바꿔주는 것이 아니다. 
// personC = { ... } 의 코드는 personC 값 자체를 바꾸어주는 행위이므로 에러가 발생한다.

const personD = {
    name: '강오줌', // 멤버
    age: 24, // 멤버 
    say: function () {
        console.log(`앙냥~ 나는 ${this.name}이라고 해~`);
    } // 객체 안의 함수 : 메서드 (방법)
};
personD['say']();

// 프로퍼티 값 삭제
// 1. delete 명령어 사용 : 객체의 이름과 프로퍼티 사이의 연결을 끊을 뿐 메모리 안의 데이터를 지워주지는 않음
// delete personD['name'];
// delete personD.age;
// 2. null 사용 : 메모리의 데이터까지 삭제해줌 (추천)
//personD.name = null;

// 객체에 존재하지 않는 프로퍼티에 접근 => undefined 반환 (접근하지 않는 것이 좋음!)
console.log(personD.gender); // undefined
// 객체에 프로퍼티가 존재하는지 하지 않는지 확인하는 방법 (in 연산자 활용 => Boolean값으로 반환)
console.log(`name: ${'name' in personD}`);
console.log(`age: ${'age' in personD}`);
console.log(`gender: ${'gender' in personD}`);