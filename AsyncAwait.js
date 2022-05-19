/** async/await
 * async/await : promise를 조금 더 간결하게 표현하며, 그리고 동기적으로 실행되는 것 처럼 보이게 만들어주는 것 
 * 새로 만들어진 함수가 아니라 기존에 존재하던 promise위에 간편한 API를 제공
*/

// 1. async 
async function fetchUser() {
    return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await
function delay(ms) {
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

pickFruits().then(console.log);

// 3. 유용한 API 
function pickAllFruits() {
    return Promise.all([getApple(), getBanana()])
    .then(fruits => fruits.join(' + '));
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
    return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);