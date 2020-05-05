let data = {
    a: '1',
    b: '2'
};
let target;
for (var key in data) {
    (function (key) {
        var value = 1;
        var dep = [];
        Object.defineProperty(data, key, {
            get: function () {
                for (let i = 0; i < dep.length; i++) {
                    if (dep[i] == target) {
                        return value
                    }
                }
                console.log('get')
                dep.push(target); //此操作会触发set里的for循环导致rander持续执行
                return value;
            },
            set: function (newValue) {
                if (newValue == value) {
                    return
                }
                console.log('set')
                value = newValue;
                for (let i = 0; i < dep.length; i++) {
                    dep[i]()
                }
            }
        })
    })(key)
}
let index = 0

function watch(key, fn) {
    target = fn;
    if (typeof key == 'function') {
        key();
        return;
    }
    data[key]
}

// watch('a',function () {
//     console.log('监听a的第一个函数')
//    render()
// });
// watch('a',function () {
//     console.log('监听a的第二个函数')
//     render()
// });
// watch('b',function () {
//     console.log('监听b的第1个函数')
//
// });
watch(render,render);

function render() {
    document.body.innerHTML = `<div>a=${data.a}====,b=${data.b}</div>`
}

setTimeout(function () {
    data.a = 11
}, 1000)

setTimeout(function () {
    data.b = 22
}, 3000)

// Object.defineProperty(data);
