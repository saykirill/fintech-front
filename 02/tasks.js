/* =============================
=            РЕЛИЗ            =
============================= */

/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  const bindArgs = [].slice.call(args);

  return function() {
    const curArgs = [].slice.call(arguments);
    const unshiftArgs = bindArgs.concat(curArgs);

    return func.apply(context, unshiftArgs);
  };
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  if (arguments.length === 0) {
    return 0;
  }

  return param => {
    if (param !== undefined) {
      return sum(param + x);
    }
    return x;
  };
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  const arr1 = first.toLowerCase().split('').sort(); // переводим в нижний регистр, сплитим в массив и
  const arr2 = second.toLowerCase().split('').sort();// сортируем

  if (arr1.join() === arr2.join()) { // превращаем в строку, чтобы удобно было сравнивать
    return true;
  }
  return false;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  arr.sort((a, b) => (a - b)); // чтобы отсортировать по возрастанию чисел, а не строк
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1); // удаляем повторяющийся элемент
      i--;
    }
  }
  return arr;
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  const arr = [];

  for (let i = 0; i < first.length; i++) {
    if (second.indexOf(first[i]) !== -1) { // ищем iый элемент массива first в массиве second
      arr.push(first[i]);
    }
  }
  arr.sort((a, b) => (a - b)); // сортируем
  return arr;
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  let count = 0;

  if (left.length !== right.length) {
    return false;
  }
  for (let i = 0; i < left.length; i++) {
    if (left[i] === right[i]) {
      count++;
    }
  }
  if ((left.length - count === 1) || (count === left.length)) {
    return true;
  }
  return false;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
