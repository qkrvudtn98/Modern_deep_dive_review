/** Array.prototype.join 메서드 
 * join 메서드는 원본 배열의 모든 요소를 문자열로 반환한 후, 인수로 전달받은 문자열, 즉 구분자로 연결한 문자열을 반환한다
 * 구분자는 생략 가능하며 기본 구분자는 ,다
 */

const arr=[1,2,3,4];
// 기본 구분자는 콤마(,)다
// 원본 배열 arr의 모든 요소를 문자열로 반환한 후, 기본 구분자(,)로 연결한 문자열을 반환한다.
console.log(arr.join());

// 원본 배열 arr1의 모든 요소를 문자열로 반환한 후, 빈 문자열로 연결한 문자열을 반환한다.
const arr1=['jong','gi','man','jae','hyun'];
console.log(arr1.join(''));

// 원본 배열 arr1의 모든 요소를 문자열로 반환한 후, 구분자 ':'로 연결한 문자열을 반환한다.
console.log(arr1.join(':'));