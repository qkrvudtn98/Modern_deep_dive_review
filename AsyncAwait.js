/** async/await
 * async/await : promise를 조금 더 간결하게 표현하며, 그리고 동기적으로 실행되는 것 처럼 보이게 만들어주는 것 
 * 새로 만들어진 함수가 아니라 기존에 존재하던 promise위에 간편한 API를 제공
*/

// 1. async 
/* async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user); */

// 2. await
/* function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
    await delay(1000);
    return '🍎'
}

async function getBanana() {
    await delay(1000);
    return '🍌'
}

async function pickFruits() {
    const applePromise = getApple();
    const bananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await bananaPromise;
    return `${apple} + ${banana}`;
}

pickFruits().then(console.log); */

// 3. 유용한 API 
/* function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log); */

/* async & await */
// 1. async  
function hello() {
    return 'hello';
} 

// async라는 키워드를 함수 앞에 붙여주게 되면 그 함수는 promise객체를 반환하는 함수가 됨
/* async function helloAsync() {
    return 'helloasync';
} */
// async를 붙여준 helloAsync라는 함수는 Promise객체를 반환하기 때문에 then을 사용할 수 있게 되며, 콜백함수에 들어가는 인자는 helloAsync의 resolve의 결과값이 됨 
// helloAsync().then((res)=>{console.log(res)});

// 2. await 
function delay(ms) {
    return new Promise((resolve)=>{
        setTimeout(resolve,ms);
    });
}

async function helloAsync() {
    // await 키워드를 비동기 함수 앞에 붙여주게되면 동기적인 함수처럼 작동하게 됨  
    await delay(3000); 
    // await 뒤의 함수 delay함수가 끝날 때까지 뒤의 return문은 실행되지 않음! + await 키워드는 async키워드가 붙은 함수 안에서만 사용할 수 있음!
    return 'hello Async';
}

async function main() {
    const res = await helloAsync();
    console.log(res);
}

main();

// cf) setTimeout 함수는 실행해야하는 함수가 있는데 만약 resolve함수만 실행하면 된다고 가정하면, 화살표 함수는 굳이 사용할 필요가 없음 
// setTimeout(resolve, 3000);과 같은 코드가 가능해지는 것임! 

