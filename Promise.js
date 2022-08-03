/** Promise 
 * Promise : Javascript의 내장함수 
 * -> 동기적인 것을 수행할 때 콜백함수 대신에 유용하게 쓸 수 있는 내장함수
 * 1. state (상태)
 * - promise가 만들어진 후 우리가 지정한 동작을 수행하는 중일 때 => pending state
 * - 동작을 성공적으로 완수 했을 때 => fulfilled state
 * - 파일을 찾을 수가 없거나 에러가 났다면 => rejected state
 * 
 * 2. producer와 consumer의 차이점 (Promise Object)
 * - producer : 우리가 원하는 데이터를 제공하는 사람 
 * - consumer : 제공된 데이터를 쓰는 사람 
*/

// 1. Producer 
/** Producer 생성자는 두 가지 콜백함수를 인자로 받음
 * resolve : 동작을 정상적으로 마친 후 생성된 최종 데이터를 전달하는 함수 
 * reject : 기능을 수행하다가 중간에 문제가 생기면 호출하는 콜백함수
 * => Promise 생성 : executor 함수가 자동으로 실행!
*/

/* const promise = new Promise((resolve, reject) => {
    // 무거운 작업들을 수행할 것임 (네트워크나 파일을 읽어오는 등의 작업을 동기적으로 수행하면 작업을 수행하는 동안 시간이 오래 걸리기 때문에 다른 작업을 진행할 수 없음 그래서 Promise의 비동기 작업을 통해 효율적으로 작업을 처리함)
    console.log('doing something...');
    // Promise를 만들어지는 순간 생성자에 있는 executor 콜백함수가 수행되는 것을 알 수 있음!
    setTimeout(() => {
        resolve('pyeongsoo');
        // reject(new Error('no network'));
    },2000);
}) */

/** Promise 생성 => 인자인 executor 함수가 즉각적으로 실행 (네트워크 통신이 즉각적으로 일어남) 
 * 하지만 사용자가 버튼을 눌러 네트워크 통신을 해야하는 경우 이 방식은 옳지 않음! 
 * 시키지도 않았는데 네트워크 통신을 해버리기 때문!
 */

// 2. Consumer: then, catch, finally
/** Consumer은 Producer가 생산해내는 데이터를 사용해내는 사람 
 * - then : promise에서 설정한 작업이 정상적으로 수행되었을 때 사용
 *          promise에서 정상적으로 기능이 수행되면 그 데이터를 then이라는 키워드를 통해 가져오는데, 매개인자 value에 담아서 가져옴
 * - catch : then에서 에러가 발생했을 경우, then은 promise를 돌려줌. promise에서 설정한 작업이 정상적으로 수행되지 않았을 경우, promise는 에러메세지를 보냄 
 *           이렇게 에러가 났을 때 어떻게 처리할 것인지 만들어주는 키워드임 catch를 통해 promise가 제대로 작동하지 않았을 때 어떻게 동작할지 적어주면,
 *           더 이상 promise는 에러메세지를 보내지 않고 정해진 동작을 수행하게 됨! 
 * - finally : finally는 promise가 실패하던 성공하던 무조건 실행되어야하는 코드임! 따라서 따로 인자를 받을 필요가 없이, 마지막에 수행해야하는 코드만 입력해주면 됨!
 */


/* promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
    .finally(error => {
        console.log('finally');
    }) */

// 3. Promise chaining
/* const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
})

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num-1), 1000);
    })
})
.then(num => console.log(num));

// 4. Error Handling
const getJja = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('jjajang'), 1000);
    })
const getJang = jja => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${jja} => 🥩`), 1000);
    })
const cook = jang => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${jang} => 🌭`), 1000);
    })

getJja() // 
    .then(getJang)
    .catch(error => {
        return '🍕';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log); */
// Promise : 비동기 처리의 결과값을 핸들링하는 코드를 비동기 함수로부터 분리할 수 있어짐 
/* 비동기 작업이 가질 수 있는 3가지 상태 : Pending, Fulfilled, Rejected */
// Pending (대기상태) : 현재 비동기 작업이 진행중이거나 시작할 수도 없는 상태일 때를 나타냄 
// Fulfilled : 비동기 작업이 정상적으로 이행된 상태를 의미함 
// Rejected : 거부 or 실패를 의미하며, 비동기 작업이 실패한 상태를 의미함 (서버 지연 , 자동 취소 등)

/* function isPositive(number, resolve, reject) {
    setTimeout(()=> {
        if(typeof number === 'number'){
            // 성공 -> resolve
            resolve(number >= 0 ? '양수' : '음수');
        } else {
            // 실패 -> reject
            reject('주어진 값이 숫자형이 아닙니다.');
        }
    }, 2000);
}

isPositive([], (res)=>{
    console.log('성공적으로 수행됨 :', res);    
}, (err)=>{
    console.log('실패 하였음 :', err);
}); */

function isPositiveP(number) {
    const executor = (resolve, reject) => { // 실행자
        setTimeout(()=>{
            if(typeof number === 'number'){
                // 성공 -> resolve
                console.log(number);
                resolve(number >= 0 ? '양수' : '음수');
            } else {
                // 실패 -> reject
                reject('주어진 값이 숫자형이 아닙니다.');
            }
        }, 2000);
    }

    const asyncTask = new Promise(executor);
    return asyncTask;
};

const res = isPositiveP([]);

res
    .then((res)=>{
        console.log('작업 성공 : ', res);
    })
    .catch((err)=>{
        console.log('작업 실패 : ', err);
    });