// Ваша задача — создать функцию, выполняющую четыре основные математические операции.

// Функция должна принимать три аргумента — операция(строка/символ), значение1(число), значение2(число).
// Функция должна возвращать результат чисел после применения выбранной операции.

// Примеры (Оператор, значение1, значение2) --> вывод
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7



function basicOp(operation, num1, num2) {

    switch (operation) {
        case '+':
            let a = num1 + num1;
            return a;
        case '-':
            let b = num1 - num2;
            return b;
        case '*':
            let c = num1 * num2;
            return c;
        case '/':
            let d = num1 / num2;
            return d;

    }
}

let f = basicOp('*', 6, 4)

console.log(f)