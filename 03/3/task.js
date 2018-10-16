/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    const resolveValues = [];
    let count = 0;
    // const cl = console.log;

    promises.forEach((promise, i) => {
      promise
        .then(
          result => {
            resolveValues[i] = result;
            // cl(result);
            // cl(resolveValues);
            count++;
            // cl(count);
            if (count === promises.length) {
              resolve(resolveValues);
              // cl(resolveValues);
            }
          }
        )
        .catch(err => {
          reject(err);
        });
    });
  });
}

module.exports = promiseAll;
