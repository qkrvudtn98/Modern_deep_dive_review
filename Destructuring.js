/* 비구조화 할당 */
let object = { one: 'one', two: 'two', three: 'three', name: '박평수'};

// 객체의 key값을 통해서 property에 접근 => 호출 순서는 전혀 상관이 없음
// key값을 통해서 접근하고 싶지 않을 경우 => key값에 변수명 할당해서 변수명으로 호출해도 정상적으로 작동함 
// name이라는 key값을 기준으로 value를 myName이라는 변수에 할당하겠다는 의미 
let {one, two: second, three, name: myName, abc = 'react'} = object;


console.log(one, second, three, myName, abc);
