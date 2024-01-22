// Учитывая массив целых чисел в виде строк и чисел, верните сумму значений массива, как если бы все они были числами.

// Верните свой ответ в виде числа.


function sumMix(ara){
    var sum = 0;
    ara.forEach(function(num) {
        let a= Number(num)
        sum +=a
    });
    return sum
}
let a =sumMix(['5', '10', 15, 20])
console.log(a)


