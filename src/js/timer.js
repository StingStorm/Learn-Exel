import addLeadingZero from '../utils/addLeadingZero.js';
import convertMs from '../utils/convertMs.js';

const endTime = new Date(2025, 3, 10, 19, 30, 0, 0).getTime(); // April 10 2025, 19:30

document.addEventListener('DOMContentLoaded', () => {
  updateAllTimers(endTime);
});

setInterval(() => updateAllTimers(endTime), 1000);

function updateAllTimers(endTime) {
  const timerElements = document.querySelectorAll('.timer');

  const now = new Date().getTime();
  const timeLeft = endTime - now;

  const timerValues = convertMs(timeLeft);

  timerElements.forEach(timer => {
    timer.querySelector('[data-days]').textContent = addLeadingZero(
      timerValues.days
    );
    timer.querySelector('[data-hours]').textContent = addLeadingZero(
      timerValues.hours
    );
    timer.querySelector('[data-minutes]').textContent = addLeadingZero(
      timerValues.minutes
    );
    timer.querySelector('[data-seconds]').textContent = addLeadingZero(
      timerValues.seconds
    );
  });
}
