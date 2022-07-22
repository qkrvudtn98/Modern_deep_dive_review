/* Spread 문법 
정의 : 하나의 객체의 프로퍼티들을 다른 객체에 펼쳐주는 역할을 함 
*/
// 객체에 적용
const cookie = {
    base : 'cookie',
    madeIn: 'Korea'
};

const chocochipCookie = {
    ...cookie,
    toping: 'chocochip'
};

const blueberryCookie = {
    ...cookie,
    toping: 'blueberry'
};

const strawberryCookie = {
    ...cookie,
    toping: 'strawberry'
};

console.log(chocochipCookie);
console.log(blueberryCookie);
console.log(strawberryCookie);

// 배열에 적용
const noTopingCookies = ['촉촉한 쿠키', '안촉촉한 쿠키'];
const topingCookies = ['바나나 쿠키', '블루베리 쿠키', '딸기 쿠키', '초코칩 쿠키'];

const allCookies = [...noTopingCookies, '함정쿠키', ...topingCookies];
console.log(allCookies);