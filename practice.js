var x = 'xxx';

function foo() {
    var y = 'yyy';

    function bar() {
        var z = 'zzz';
        console.log(x + y + z);
    }
    
    bar();
}

foo();