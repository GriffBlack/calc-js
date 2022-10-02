let a = ''; // first number
let b = ''; // secont number
let sign = ''; // знак операции
let finish  = false;

// const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// const action = ['-', '+', 'X', '/'];
const body = ['(', ')', '%', 'AC',
              '7', '8', '9', '/',
              '4', '5', '6', 'x',
              '1', '2', '3', '-',
              '0', '.', '=', '+'];
              
const calc = document.querySelector('.calc');

document.body.onload = addOutput, addInput(body);

function addInput(body) {
    let calcBtn = document.createElement('div');
    calcBtn.classList.add('calc_btn');
    body.map((symb) => {
        let btn = document.createElement('div');
        btn.classList.add('btn');
        btn.innerHTML = symb;
        if (/[ '\-', '+', 'x', '/', '=']/.test(symb)) {
            btn.classList.add('bg-orange');
        } else if (/['(', ')', '%', 'AC']/.test(symb)) {
            btn.classList.add('bg-grey');
        }
        calcBtn.append(btn);
        // calcBtn.insertBefore(btn, calcBtn.firstChild);
        // console.log(symb)
    })
    calc.append(calcBtn);
}

function addOutput() { 
    let calcResult = document.createElement('div');
    calcResult.classList.add('calc_form');
    let calcInput = document.createElement('p');
    calcInput.classList.add('calc_result');
    calcInput.setAttribute("type", "text");
    calcInput.innerHTML = 0;
    calcResult.append(calcInput);
    calc.prepend(calcResult);
    // calc.insertBefore(calcResult, calc.firstChild);
};

// экран    
// const out = document.querySelector('.calc-screen p');

// function clearAll () {
//     a = ''; // first number and result
//     b = ''; // second number 
//     sign = ''; // знак
//     finish = false;
//     out.textContent = 0;
// }

// document.querySelector('.ac').onclick = clearAll;

// document.querySelector('.buttons').onclick = (event) => {
//     // нажата не кнопка
//     if(!event.target.classList.contains('btn')) return;
//     // нажата кнопка clearAll ac
//     if(event.target.classList.contains('ac')) return;

//     out.textContent = '';
//     // получаю нажатую кнопку
//     const key = event.target.textContent;

//     // если нажата клавиша 0-9 или .
//     if (digit.includes(key)) {
//         if (b ==='' && sign === '') {
//             a += key;
            
//             out.textContent = a;
//         }
//         else if (a!=='' && b!=='' && finish) {
//             b = key;
//             finish = false;
//             out.textContent = b;
//         }
//         else {
//             b += key;
//             out.textContent = b;
//         }
//         console.table(a, b , sign);
//         return;
//     }

//      // если нажата клавиша + - / *
//      if (action.includes(key)) {
//         sign = key;
//         out.textContent = sign;
//         console.table(a, b , sign);
//         return;
//     }

//     // нажата =
//     if (key === '=') {
//         if (b === '') b = a;
//         switch (sign) {
//             case "+":
//                 a = (+a) + (+b);
//                 break;
//             case "-":
//                 a = a - b;
//                 break;
//             case "X":
//                 a = a * b;
//                 break;
//             case "/":
//                 if (b === '0') {
//                     out.textContent = 'Ошибка';
//                     a = '';
//                     b = '';
//                     sign = '';
//                     return;
//                 }
//                 a = a / b;
//                 break;
//         }
//         finish = true;
//         out.textContent = a;
//         console.table(a, b , sign);
//     }

// }