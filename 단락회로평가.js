// Falsy 값 핸들링하는 함수 
const getName = (person) => {
    if(!person) {
        return '객체가 아닙니다';
    } else {
        return person.name;
    }
}

let person;
const name = getName(person);
console.log(name);

// 단축평가를 이용하여 Falsy 값 핸들링하는 함수 
const getNameA = (person) => {
    const name =  person && person.name; // person에서 이미 논리식의 값이 False인 것이 결정 => undefined를 반환
    return name || '객체가 아닙니다'; // name에는 person && person.name에서 단축평가를 통해 나온 null값 (Falsy)이 담겼음. 그리고 한번 더 단축평가를 실행하면 '객체가 아닙니다'는 빈 문자열이 아니기 때문에 Truthy값으로 간주하고 그대로 반환됨
}

let personA = null;
const nameA = getNameA(personA);
console.log(nameA);