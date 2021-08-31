let number = 123
let string = 'string'
let boolean = true
let object = {'key': 'key'}
const arr = [0, 1, 2]
const func = () => {
}
let nul = null
let undefined1 = undefined
let symbol1 = Symbol();

console.log("number: ", number instanceof Object, typeof number, number.__proto__ instanceof Object)
console.log("string: ", string instanceof Object, typeof string)
console.log("boolean: ", boolean instanceof Object, typeof boolean)
console.log("object: ", object instanceof Object, typeof object)
console.log("arr: ", arr instanceof Object, typeof arr)
console.log("func: ", func instanceof Object, typeof func)
console.log("nul: ", nul instanceof Object, typeof nul)
console.log("undefined1: ", undefined1 instanceof Object, typeof undefined1)
console.log("symbol: ", symbol1 instanceof Object, typeof symbol1)


for(let i = 1; i < 10; i++) {
    setTimeout(() => console.log(i), 1000)
}


(function() {

})()