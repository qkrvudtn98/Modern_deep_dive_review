/* 함수 표현식 & 화살표 함수 */

// 함수 : 자료형 (값의 분류) => 값이기 때문에 변수나 상수에 담아서 사용할 수 있음 

console.log(helloA());

// 함수 선언식 
function helloA() {
    return '안녕하세요 여러분';
};

// 함수 표현식 
let helloB = function () {
    return "안녕하세요 여러분";
}

console.log(helloB());

// 함수 선언식과 함수 표현식의 차이점 
/* 
함수 선언식 : 함수 호이스팅 => 함수 선언의 위치와 상관없이 호출 가능 ( 스크립트가 로딩되는 시점에 바로 초기화하고 변수객체에 저장함 = 함수 선언, 초기화, 할당이 한꺼번에 이루어진다 )
함수 표현식 : 변수 호이스팅 => 초기화와 할당이 분리되어 진행 ( 변수 선언 위치 위에 호출될 경우 undefined 반환 )
=> 결론 : 함수 선언 위치보다 위에 호출해야할 경우에는 함수 선언식을 사용 / 그렇지 않을 경우 함수 선언식 or 함수 표현식을 선택해서 사용
*/

// 화살표 함수 (함수 표현식을 더 간략하게 사용할 수 있는 방법)
let helloC = () => '안녕하세요 여러분'
// 호이스팅의 대상이 아님! 
console.log(helloC());

/* 콜백함수 
정의 : 어떤 함수의 매개변수로 다른 함수를 넘겨준 함수 
*/

function checkMood (mood, goodCallback, badCallback) {
    if (mood === 'good') {
        // 기분 좋을 때 하는 동작 
        goodCallback();
    } else {
        // 기분 안좋을 때 하는 동작
        badCallback();
    }
}

function cry() {
    console.log("ACTION :: CRY");
}

function sing() {
    console.log("ACTION :: SING");
}

function dance() {
    console.log("ACTION :: DANCE");
}

checkMood('sad',sing,cry); // 함수를 값으로 담았음 (함수표현식)