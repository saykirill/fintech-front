/* =============================
=            РЕЛИЗ            =
============================= */

/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  let min, 
    max;
  let isFirstNumber = true;

  while (string.length > 0) {
    let x = parseFloat(string);
    if (!isNaN(x)) {
      if (isFirstNumber) {
        min = x;
        max = x;
        isFirstNumber = false;
      }
      if (x < min) {
        min = x;
      }
      if (x > max) {
        max = x;
      }
      string = string.substr(String(x).length, string.length);
    }
    else {
      string = string.substr(1, string.length);
    }
  }
  return { min: min, max: max }
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x === 1 || x === 2) {
    return 1;
  }
  if (x < 1) {
    return 'Некорректный номер числа';
  }
  x = fibonacciSimple(x - 1) + fibonacciSimple(x - 2); 

  return x;
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
const cache = [1, 1];

function fibonacciWithCache(x) {
  if (x < 1) {
    return 'Некорректный номер числа';
  }
  if (x === 1 || x === 2) {
    return cache[x - 1];
  }
  cache[x - 1] = fibonacciWithCache(x - 1) + fibonacciWithCache(x - 2);
  return cache[x - 1];
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */

function printNumbers(max, cols) {
  let number = 0;  
  let sumString = ``;
  let minRows = Math.ceil((max + 1) / cols);
  let string = [];
  for (let j = 0; j < minRows; j++){ //инициализируем строки
    string[j] = ``;
  }
  for (let i = 0; i < cols; i++) { //идем по столбцам
    for (let j = 0; j < minRows; j++) { //идем по строкам
      if (number <= max){ //если число больше максимального, то заканчиваем
        if (i !== cols-1) { //в последней колонке не ставим пробел (если в последней строчке не хватает чисел, чтобы заполнить строку используем фичу1, см.ниже)
          if (number < 10){
            string[j] += ` ${number} `;
          }
          else {
            string[j] += `${number} `;
          }
        }
        else {
          if (number < 10){
            string[j] += ` ${number}`;
          }
          else {
            string[j] += `${number}`;
          }
        }
        number++;
      }
    }
  }
  for (let j = 0; j < minRows; j++) {
    if (j !== minRows - 1) {
      sumString += string[j] + `\n`;    //соединяем все строки в одну большую с переходом на след. строку
    }
    else {
      sumString += string[j];    //в последней строке не делаем перенос
    }
  }
  if (sumString.substr(sumString.length-1,sumString.length) === ' ') { //фича1
    sumString =  sumString.substr(0,sumString.length-1) //убираем лишний пробел, если он есть
  }
  return sumString;
}
/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let result = ``;
  let count = 1;
  prevChar = ``;
  curChar = ``;
  for (let i = 0; i < input.length; i++){
    curChar = input[i];
    if (curChar === prevChar) {
      count++;
    }
    else {
      if (count !== 1) {
        result += `${prevChar}${count}`;
        count = 1;
        prevChar=curChar;
      }
      else {
        result += `${prevChar}`;
        count = 1;
        prevChar=curChar;
      }
      
    }
  }
  if (count !== 1) {
    result += `${prevChar}${count}`;
    count = 1;
    prevChar=curChar;
  }
  else {
    result += `${prevChar}`;
    count = 1;
    prevChar=curChar;
  }
  return result;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};

/* =====  End of РЕЛИЗ  ====== */

/* ========================================
=            НЕ ВОШЛО В РЕЛИЗ            =
======================================== */

/**
 * Игра "угадайка". Компьютер загадывает случайное целое число от 1 до 100,
 * пользователь вводит числа в консоль.
 * На каждое число компьютер отвечает "слишком мало", "слишком много", "в точку!".
 * Для общения с пользователем используйте window.prompt.
 */

/**
 * Игра продолжается, пока пользователь не угадает. После этого выводит в консоль результат.
 */
// function guessNumberA() {}

/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
// function guessNumberB() {}

/* =====  End of НЕ ВОШЛО В РЕЛИЗ  ====== */
