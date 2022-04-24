/* filter 메서드 : 자신이 호출한 배열의 모든 요소들을 순회하면서 
인수로 전달받은 콜백함수를 반복 호출한다. 콜백의 반환값이 true인 요소들만으로 구성된 
새로운 배열을 반환한다. 원본 배열은 변경되지 않는다.*/

const numbers = [1, 2, 3, 4, 5];

const odds = numbers.filter(item => item % 2);
// odds는 원본 배열을 저장하는 변수가 아니라 새로운 배열을 의미한다. 
console.log(odds);

/** filer 메서드의 콜백함수는 filter메서드를 호출한 배열의 요소값, 인덱스, 그리고 filter메서드를 호출한 배열 자체를 전달받을 수 있다 */

[1,2,3].filter((item, index, arr) => {
    console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
    return item % 2;
})

// filter 메서드는 자신을 호출한 배열에서 특정 요소를 제거하기 위해 사용할 수도 있다. 

class User {
    constructor() {
        this.users = [
            { id : 1, name: 'Lee'},
            { id : 2, name: 'Kim'}
        ]
    };

    // 요소 추출 
    findById(id) {
        // id가 일치하는 사용자만 추출한다
        return this.users.filter(user => user.id === id);
    }

    // 요소 제거 
    remove(id) {
        // id가 일치하지 않는 사용자를 제거한다
        this.users = this.users.filter(user => user.id !== id);
    }
}

const users = new User();

let user = users.findById(1);
console.log(user);

users.remove(1);

user = users.findById(1);
console.log(user);