// Напиши функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved"
// через ms миллисекунд.Значением исполнившегося промиса должно быть
// то кол - во миллисекунд которое передали во время вызова функции delay.
const taskDelay = document.querySelector('.task-1');
const delay = ms => {
  // Твой код
    return new Promise(resolve => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
taskDelay.addEventListener('click', () => {
  (delay(2000).then(logger)); // Resolved after 2000ms
  (delay(1000).then(logger)); // Resolved after 1000ms
  (delay(1500).then(logger)); // Resolved after 1500ms
});