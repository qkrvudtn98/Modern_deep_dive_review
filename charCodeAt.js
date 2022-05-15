/** charCodeAt 메서드
 * charCodeAt() 메서드는 주어진 인덱스에 대한 정수를 반환 (0 ~ 65535)
 */

const sentence = 'The quick brown fox jumps over the lazy dog.';

const index = 4;
// sentence 변수 안에 저장된 문자열 (유사배열객체)에서 sentence[4] = q인데, q를 charCodeAt 메서드를 통해 113이라는 정수로 값을 반환한다.
console.log(`The character code ${sentence.charCodeAt(index)} is equal to ${sentence.charAt(index)}`);

/** fromCharCode 메서드 
 * fromCharCode() 메서드는 UTF-16 코드 유닛의 시퀸스로부터 문자열을 생성해서 반환한다
 */

console.log(String.fromCharCode(189, 43, 190, 61));
