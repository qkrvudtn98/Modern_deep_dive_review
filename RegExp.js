/** RegExp 정규표현식
 * 정의 : 일정한 패턴을 가진 문자열의 집합을 표현하기 위해 사용하는 형식언어
 * - 문자열을 대상으로 패턴매치기능을 제공 ( 특정 패턴과 일치하는 문자열을 검색하거나 추출 또는 치환할 수 있는 기능 )
 */

//EX 휴대전화 매칭 
// 사용자로부터 입력받은 휴대폰 전화번호 
const tel = '010-7999-0019';

// 정규 표현식 리터럴로 휴대폰 전화번호 패턴을 정의한다. 
const regExp = /^\d{3}-d\{4}-d\{4}$/;

// tel이 휴대폰 전화번호 패턴에 매칭하는지 테스트(확인)한다.
console.log(regExp.test(tel)); // -> false

// => 정규표현식을 사용하면 반복문이나 조건문 없이 패턴를 정의하고 테스트하는 것으로 간단하게 체크 할 수 있다

/** [ 정규표현식의 생성 ]
 * 1. 정규표현식 리터럴  
 * 2. RegExp 생성자 함수 
 */

/** 정규표현식 리터럴 */
// EX
const target = 'Is this all there is?';

// pattern : is 
// flag : i => 대소문자를 구분하지 않고 검색한다
const regexp = /is/i;

// test 메서드는 target 문자열에 대해 정규표현식 regexp의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환한다.
console.log(regexp.test(target));

/** RegExp 생성자 함수
 * pattern : 정규 표현식의 패턴 
 * flags : 정규 표현식의 플래그 (g, i, m, u, y)
 * -> RegExp 생성자 함수를 사용하면 변수를 사용해 동적으로 RegExp 객체를 생성할 수 있다
 */

// 생성자 함수로 정규표현식 생성 방법 
// new RegExp(pattern[, flags])

// EX
const target1 = 'Is this all there is?';

const regexp1 = new RegExp(/is/i); // ES6
console.log(regexp1.test(target));

// EX 
// RegExp에 pattern에 is라는 규칙을 넣어주었기 때문에 str 인자에 들어간 문자열에서 is의 개수를 찾는다 
const count = (str, char) => (str.match(new RegExp(char, 'gi')) ?? []).length;
console.log(count('Is this all there is?', 'is')); // 3 
console.log(count('Is this all there is?', 'xx')); // 0 

/** [RegExp method] 
 * 종류 : RegExp.prototype.exec, RegExp.prototype.test, RegExp.prototype.match 
*/

/** RegExp.prototype.exec 
 * - exec 메서드는 인수로 전달받은 문자열에 대해 정규표현식의 패턴을 검색하여 매칭 결과를 배열로 반환한다
 * - 매칭 결과가 없는 경우 null로 반환한다
 * - 문자열 내의 모든 패턴을 검색하는 g플래그를 지정해도 첫 번째 매칭 결과만 반환 
 */

// EX
const target2 = 'Is this all there is?';
const regExp2 = /is/;

console.log(regExp2.exec(target2));

/** RegExp.prototype.test
 * - test 메서드는 인수로 전달받은 문자열에 대해 정규 표현식의 패턴을 검색하여 매칭 결과를 불리언 값으로 반환 
 */

const target3 = 'Is this all there is';
const regExp3 = /is/;

console.log(regExp3.test(target3));

/** String.prototype.match (String 표준 빌트인 객체가 제공) 
 * - match 메서드는 대상 문자열과 인수로 전달받은 정규표현식과의 매칭결과를 배열로 반환한다
 * - exec 메서드와는 달리 match 객체는 g 플래그를 쓰면 첫번째 인자 뿐만 아니라 모든 매칭 결과를 배열로 반환 
*/

// EX
const target4 = 'Is this all there is?';
const regExp4 = /is/g;

console.log(target4.match(regExp4));

/** [ flag ]
 * - 정규표현식의 검색 방식을 설정하기 위해 사용 
 * - i : 대소문자를 구별하지 않고 패턴을 검색
 * - g : 대상 문자열 내에서 패턴과 일치하는 모든 문자열을 전역 검색
 * - m : 문자열의 행이 바뀌더라도 패턴 검색을 계속함 
 * 
 * - 옵션이므로 선택적으로 사용할 수 있음 
 * - 순서와 상관없이 하나 이상의 플래그를 동시에 설정 
 * - 어떠한 플래그도 설정하지 않은 경우 대소문자를 구별해서 패턴을 검색
 * - 문자열 패턴 검색 매칭 대상이 1개 이상 존재해도 첫 번째 매칭한 대상만 검색하고 종료 
 */

// EX 
const target5 = 'Is this all there is?';

console.log(target.match(/is/)); // 대소문자를 구별하여 한 번만 검색 -> is
console.log(target.match(/is/i)); // 대소문자를 구별하지 않고 한 번만 검색 -> Is
console.log(target.match(/is/g)); // 대소문자를 구별하여 전역 검색 -> is, is
console.log(target.match(/is/ig)); // 대소문자를 구별하지 않고 전역 검색 -> Is, is, is

/** [ pattern ]
 * - 문자열의 일정한 규칙을 표현하기 위하여 사용 
 * - /로 열고 닫으며 문자열의 따옴표는 생략 
 * - 특별한 의미를 가지는 메타문자 또는 기호로 표현할 수 있음 
 */

/** 임의의 문자열 검색 
 * - .은 임의의 문자 한 개를 의미함 (문자의 내용은 상관없음 띄어쓰기 포함)
 */

// EX
const target6 = 'Is this all there is?';
const regExp6 = /.../g;
console.log(target.match(regExp6));

/** 반복 검색 
 * {m,n}은 앞선 패턴이 최소 m번, 최대 n번 반복되는 문자열을 의미 (콤마 뒤에 공백이 있으면 정상동작하지 않음)
 * {n}은 앞선 패턴이 n번 반복되는 문자열을 의미 
 * {n,}은 앞선 패턴이 최소 n번 이상 반복되는 문자열을 의미
 * +은 앞선 패턴이 최소 한 번 이상 반복되는 문자열을 의미 ( + = {1,} ) 
 * ?은 앞선 패턴이 최대 한 번(0번 포함) 이상 반복되는 문자열을 의미 ( ? = {0,1} )
 */

// EX 
const target7 = 'A AA B BB Aa Bb AAA';

// 'A'가 최소 1번, 최대 2번 반복되는 문자열을 전역 검색한다 
const regExp7 = /A{1,2}/g;
console.log(target7.match(regExp7));

// 'A'가 2번 반복되는 문자열을 전역 검색한다
const regExp8 = /A{2}/g;
console.log(target7.match(regExp8));

// 'A'가 최소 2번 이상 반복되는 문자열을 전역 검색한다
const regExp9 = /A{2,}/g;
console.log(target7.match(regExp9));

// 'A'가 최소 한 번 이상 반복되는 문자열 ('A', 'AA', 'AAA' ...)을 전역 탐색한다
const regExp10 = /A+/g;
console.log(target7.match(regExp10));

// ? 예제 
const target11 = 'color colour';
// colo 다음에 u가 0번 이상 반복되고 r이 이어지는 패턴 전역 검색 
const regExp11 = /colou?r/g;
console.log(target11.match(regExp11));

/** OR 검색 
 * - |은 or의 의미를 갖는다 
 * - 분해되지 않은 단어 레벨로 검색하기 위해서는 +를 함께 사용한다 
 * - [] 내의 문자는 or로 동작한다 그 뒤에 +를 사용하면 앞선 패턴을 한 번 이상 반복한다 
 * - 범위를 지정하려면 [] 내에 -를 사용한다
 */

// EX
const target12 = 'A AA B BB Aa Bb';

// 'A', 'B'를 전역 검색한다
const regExp12 = /A|B/g;
console.log(target12.match(regExp12));

// EX
const regExp13 = /A+|B+/g;
console.log(target12.match(regExp13));

// EX 
// 'A' 또는 'B'가 한 번 이상 반복되는 문자열을 전역 검색
// 'A' 'AA' 'AAA' ... 'B' 'BB' 'BBB' ...
const regExp14 = /[AB]+/g;
console.log(target12.match(regExp14));

// EX
//'A' ~ 'Z'가 한 번 이상 반복되는 문자열을 전역 탐색 (대문자 알파벳 검색)
const target15 = 'A AA BB ZZ Aa Bb';
const regExp15 = /[A-Z]+/g;
console.log(target15.match(regExp15));

// EX
// 대소문자를 구별하지 않고 알파벳을 검색하는 방법 
const target16 = 'AA BB Aa Bb 12';
// 'A' ~ 'Z' 또는 'a' ~ 'z'가 한 번 이상 반복되는 문자열을 전역 탐색 
const regExp16 = /[A-Za-z]+/g;
console.log(target16.match(regExp16)); // 숫자 제외 모두 탐색 

// EX
// 숫자 검색하는 방법 
const target17 = 'AA BB 12,345';
// 0 ~ 9가 한 번 이상 반복되는 문자열을 전역 검색한다 
const regExp17 = /[0-9]+/g;
console.log(target17.match(regExp17));
// 쉼표 때문에 매칭 결과가 분리되므로 쉼표를 패턴에 포함시킴 

// EX
const target18 = 'AA BB 12,345';
// 0 ~ 9 또는 ','가 한 번 이상 반복되는 문자열을 전역 검색한다
const regExp18 = /[0-9,]+/g;
console.log(target18.match(regExp18));

// EX 
// \d는 숫자를 의미한다 ( \d = [0-9] ) \D는 문자를 의미한다 
const target19 = 'AA BB 12,345';
let regExp19 = /[\d,]+/g;
console.log(target19.match(regExp19));

regExp19 = /[\D,]+/g;
console.log(target19.match(regExp19));

// \w는 알파벳, 숫자, 언더스코어를 의미한다 ( \w = [A-Za-z0-9_] ) \W는 알파벳, 숫자, 언더스코어가 아닌 문자를 의미한다
const target20 = 'Aa Bb 12,345 _$%&';
// 알파벳, 숫자, 언더스코어, ','가 한 번 이상 반복되는 문자열을 전역 탐색한다
let regExp20 = /[\w,]+/g;
target20.match(regExp20);
// 알파벳, 숫자, 언더스코어가 아닌 문자 또는 ','가 한 번 이상 반복되는 문자열을 전역 탐색
regExp20 = /[\W,]+/g;
console.log(target20.match(regExp20));

/** [ NOT 탐색 ]
 * [] 내의 ^은 not의 의미를 갖는다 
 * - [^0-9]는 숫자를 제외한 문자를 의미함 => /d는 [0-9]와 같으므로, 이와 반대로 동작하는 /D가 [^0-9]와 같다 w의 경우도 마찬가지이다
 */

// EX 
const target21 = 'AA BB 12 Aa Bb';

// 숫자를 제외한 문자열을 전역 탐색
const regExp21 = /[^0-9]+/g;
console.log(target21.match(regExp21));

/** [ 시작 위치로 검색 ]
 * [] 밖의 ^은 문자열의 시작을 의미한다
 */

// EX 
const target22 = 'https://poiemaweb.com';
// https로 시작하는지 검사
const regExp22 = /^https/;
console.log(regExp22.test(target22));

/** [ 마지막 위치로 검색 ] 
 * $는 문자열의 마지막을 의미한다 
*/

// EX 
const target23 = 'https://poiemaweb.com';
const regExp23 = /com$/;
console.log(regExp23.test(target23));