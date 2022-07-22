// Truthy : True가 아니어도 참으로 평가되는 값들 ([], {}, 숫자, 'false'...)
// Falsy : False가 아니어도 거짓으로 평가되는 값들 (빈 문자열, 0, -0, null, undefined...)

// Falsy값들로 인해 생성되는 오류
const getName = (person) => {
    if (!person) {
        // false NOT => True
        return '객체가 아닙니다';
    }
    return person.name; // undefined, null의 경우 객체가 아니기 때문에 프로퍼티 또한 가질 수 없음 => 에러 생성
}
 
let person; // 변수를 선언만 하고 할당 x => undefined
person = null // null 값을 person에 할당 
const name = getName(person);
console.log(name);

// 오류 해결 방법 : person에 일일이 예외들을 달아주는 것이 아닌, !person으로 person이 아닌 모든 것들에 대해서 예외를 설정해주면 됨
