function A() {
    this.a = '1'
    this.b='2'
}
A.prototype = {
    c:'3',
    d:'4'
};

function B() {

}
/*
* 原型模式实现B类继承A类的属性
* */
B.prototype = new A();
var obj = new B();

/*
* 组合寄生模式1
* */

function C(){
    A.call(this)
}
C.prototype = A.prototype;

var obj2 = new C();

/*
* 组合寄生模式2
* */
function D() {
    A.call(this)
}
D.prototype = Object.create(A.prototype);

var obj3 = new D();
console.log(obj3);

/*
* 组合寄生模式3
* */
/*
* 通过extent方法实现继承
* */
function extend(parent) {
    function f(){
        parent.call(this)
    }
    Object.setPrototypeOf(f.prototype,parent.prototype)
    return f;
}
var E = extend(A);
var obj4 = new E()






