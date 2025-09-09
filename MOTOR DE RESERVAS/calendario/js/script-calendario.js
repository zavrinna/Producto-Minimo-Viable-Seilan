const monthYear = document.getElementById("monthYear");
const datesContainer = document.getElementById("dates");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const checkinInput = document.getElementById("checkin");
const checkoutInput = document.getElementById("checkout");
const doneBtn = document.getElementById("doneBtn");

let currentDate = new Date();
let selectedCheckIn = null;
let selectedCheckOut = null;

const monthNames = [
  "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  monthYear.textContent = `${monthNames[month]}`;

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const firstWeekDay = firstDay.getDay();
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  const daysInMonth = lastDay.getDate();

  datesContainer.innerHTML = "";

  for (let i = firstWeekDay - 1; i >= 0; i--) {
    const day = prevMonthLastDay - i;
    const span = document.createElement("span");
    span.classList.add("gray");
    span.textContent = day;
    datesContainer.appendChild(span);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const span = document.createElement("span");
    span.textContent = i;
    span.dataset.date = new Date(year, month, i).toISOString();

    span.addEventListener("click", () => {
      selectDate(new Date(year, month, i), span);
    });

    datesContainer.appendChild(span);
  }

  const totalCells = datesContainer.children.length;
  const nextDays = 42 - totalCells;
  for (let i = 1; i <= nextDays; i++) {
    const span = document.createElement("span");
    span.classList.add("gray");
    span.textContent = i;
    datesContainer.appendChild(span);
  }

  highlightSelected();
}

function selectDate(date, span) {
  if (!selectedCheckIn || (selectedCheckIn && selectedCheckOut)) {
    selectedCheckIn = date;
    selectedCheckOut = null;
    checkinInput.value = formatDate(date);
    checkoutInput.value = "-/-/-";
  } else if (selectedCheckIn && !selectedCheckOut && date > selectedCheckIn) {
    selectedCheckOut = date;
    checkoutInput.value = formatDate(date);
  } else {
    selectedCheckIn = date;
    selectedCheckOut = null;
    checkinInput.value = formatDate(date);
    checkoutInput.value = "-/-/-";
  }

  highlightSelected();
  updateDoneButton();
}

function highlightSelected() {
  document.querySelectorAll(".calendar-dates span").forEach(span => {
    span.classList.remove("selected");
    const dateAttr = span.dataset.date;
    if (dateAttr) {
      const spanDate = new Date(dateAttr);
      if (
        selectedCheckIn && spanDate.toDateString() === selectedCheckIn.toDateString() ||
        selectedCheckOut && spanDate.toDateString() === selectedCheckOut.toDateString()
      ) {
        span.classList.add("selected");
      }
    }
  });
}

function formatDate(date) {
  const d = date.getDate().toString().padStart(2, '0');
  const m = (date.getMonth() + 1).toString().padStart(2, '0');
  const y = date.getFullYear();
  return `${d}/${m}/${y}`;
}

function updateDoneButton() {
  if (selectedCheckIn && selectedCheckOut) {
    doneBtn.disabled = false;
    doneBtn.classList.add("active");
  } else {
    doneBtn.disabled = true;
    doneBtn.classList.remove("active");
  }
}

prevBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
});

nextBtn.addEventListener("click", () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
});

renderCalendar(currentDate);