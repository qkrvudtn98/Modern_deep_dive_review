/** Array.from 메서드 
 * Array.from 메서드는 유사배열객체 또는 이터러블 객체를 인수로 전달받아 배열도 반환한다
 */

console.log(Array.from({length:2, 0:'a', 1:'b'})); // ['a', 'b']

console.log(Array.from('Hello')); // ['H', 'e', 'l', 'l', 'o']

/** Array.from에 전달된 두 번째 인수를 콜백함수로 받을 수 있는데, 위에 예시 결과들과 같이 반환된 배열의 요소값과 인덱스들을 통해 함수를 실행하고 반환값을 배열로 돌려준다
 */

console.log(Array.from({length:3}));
console.log(Array.from({length:3}, (_, i)=>i));