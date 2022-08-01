/* 동기 처리와 비동기 처리 */

// 동기 처리 예시 
/* function taskA() {
    console.log('A작업 끝');
}

taskA();
console.log("코드 끝"); // 처리 순서 : taskA 함수 실행 -> console.log문 실행

// 비동기 처리 예시1
function taskB() {
    setTimeout(()=>{
        console.log('B작업 끝');
    }, 2000);
}

taskB();
console.log('코드 끝'); */
// setTimeout 함수는 특정 시간을 기다렸다가 실행되는 함수
// 처리 순서 : console.log문 실행 -> taskB 함수 실행 (2초 후)

// 비동기 처리 예시2
/*function taskC(a,b,cb) {
    setTimeout(()=>{
        const res = a + b;
        cb(res);
    },3000);
}

function taskD(a,cb) {
    setTimeout(()=>{
        const res = a * 2;
        cb(res);
    },1000);
}

function taskE(a,cb) {
    setTimeout(()=>{
        const res = a * -1;
        cb(res);
    },2000);
}

taskC(3, 4, (res) => {
    console.log('C작업의 결과 : ', res);
});

taskD(7, (res) => {
    console.log('D작업의 결과 : ', res);
});

taskE(14, (res) => {
    console.log('E작업의 결과 : ', res);
});

console.log('코드 끝'); */

// 비동기 처리 예시3
/* function taskF(a,b,cb) {
    setTimeout(()=>{
        const res = a + b;
        cb(res);
    },3000);
}

function taskG(a,cb) {
    setTimeout(()=>{
        const res = a * 2;
        cb(res);
    },1000);
}

function taskH(a,cb) {
    setTimeout(()=>{
        const res = a * -1;
        cb(res);
    },2000);
} */ 

// 콜백 지옥 
/* taskF(4,5,(f_res) => {
    console.log('F작업의 결과 : ', f_res);
    taskG(f_res, (g_res)=>{
        console.log('G작업의 결과 : ', g_res);
        taskH(g_res, (h_res)=>{
            console.log('H작업의 결과 : ', h_res);
        });
    });
}); */ 

// Promise를 이용한 콜백 지옥 해결 
function taskA(a,b) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a + b;
            resolve(res);
        }, 3000);
    }); 
};

function taskB(a) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a * 2;
            resolve(res);
        }, 1000);
    })
};

function taskC(a) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const res = a * -1;
            resolve(res);
        }, 2000);
    })
};

// then chaining
taskA(1,5)
    .then((a_res)=>{
        console.log('taskA :',a_res);
        return taskB(a_res);
    })
    .then((b_res)=>{
        console.log('taskB :',b_res);
        return taskC(b_res);
    })
    .then((c_res)=>{
        console.log('taskC :',c_res);
    });