// instanceof를 이용하여 객체의 상속관계 체크 
/*function getTypes(target) {
    return Object.prototype.toString.call(target).slice(8, -1);
}

function isString(target) {
    return getTypes(target) === 'String';
}

function isElement(target) {
    return !!(target && target instanceof HTMLElement);
}

function css(elem, prop, val) {
    if(!(isElement(elem) && isString(prop) && isString(val))) {
        throw new TypeError('매개변수의 타입이 맞지 않습니다.');
    }
    elem.style[prop] = val;
}

css(document.querySelector('p'), 'color', 'red');
css(document.querySelector('div'), 'color', 'blue'); */

// 유사배열객체 
console.log(undefined == null);
const isArrayLike = function (collection) {
    
    const MAX_ARRAY_INDEX = Math.pow(2, 53) -1;
    
    const length = collection = null ? undefined : collection.length;
    console.log(length);
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
}

console.log(isArrayLike({}));