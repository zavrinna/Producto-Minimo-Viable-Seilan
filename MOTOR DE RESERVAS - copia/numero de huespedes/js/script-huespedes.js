document.querySelectorAll('.guest-row').forEach(row => {
  const countElement = row.querySelector('.count');
  const incrementBtn = row.querySelector('.increment');
  const decrementBtn = row.querySelector('.decrement');
  const clearBtn = row.querySelector('.clear');

  let count = 0;

  incrementBtn.addEventListener('click', () => {
    count++;
    countElement.textContent = count;
  });

  decrementBtn.addEventListener('click', () => {
    if (count > 0) {
      count--;
      countElement.textContent = count;
    }
  });

  clearBtn.addEventListener('click', () => {
    count = 0;
    countElement.textContent = count;
  });
});

// Botón "Hecho"
document.querySelector('.done-button').addEventListener('click', () => {
  alert('Selección guardada ✅');
});
