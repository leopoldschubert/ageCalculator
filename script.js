const check = document.getElementById('check');

const dayHeader = document.getElementById('day-header');
const monthHeader = document.getElementById('month-header');
const yearHeader = document.getElementById('year-header')

const dayInput = document.getElementById('day-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');

const dayText = document.getElementById('day-text')
const monthText = document.getElementById('month-text')
const yearText = document.getElementById('year-text')

const years = document.getElementById('years');
const months = document.getElementById('months');
const days = document.getElementById('days');

let day = true;
let month = true;
let year = true;

function checkEmpty(input) {
    if (!dayInput.value) {
        day = false;
        dayText.innerHTML = "This field is required";
        return false;
    } else {
        day = true;
    }

    if(!monthInput.value) {
        month = false;
        monthText.innerHTML = "This field is required";
        return false;
    } else {
        month = true;
    }

    if(!yearInput.value) {
        year = false;
        yearText.innerHTML = "This field is required";
        return false;
    } else {
        year = true;
    }
    return true;
}

function render() {
    if (day === false) {
        dayInput.style.border = '1px solid red';
        dayHeader.style.color = 'red';
        dayText.style.color = 'red';
    } else {
        dayInput.style.border = 'none';
        dayHeader.style.color = 'black';
        dayText.style.color = 'black';
    }

    if (month === false) {
        monthInput.style.border = '1px solid red';
        monthHeader.style.color = 'red';
        monthText.style.color = 'red';
    } else {
        monthInput.style.border = 'none';
        monthHeader.style.color = 'black';
        monthText.style.color = 'black';
    }

    if (year === false) {
        yearInput.style.border = '1px solid red';
        yearHeader.style.color = 'red';
        yearText.style.color = 'red';
    } else {
        yearInput.style.border = 'none';
        yearHeader.style.color = 'black';
        yearText.style.color = 'black';
    }
}

function checkFuture() {
    if (yearInput.value > 2022) {
        yearText.innerHTML = "Must be in the past.";
        year = false;
        return false;
    } 
    return true;

}

function checkValid() {
    if (!(yearInput.value > 0 && yearInput.value < 2022)) {
        yearText.innerHTML = "enter valid year"
        year = false;
        return false;
    }

    if (!(dayInput.value >= 1 && dayInput.value <= 31)) {
        dayText.innerHTML = "enter valid day"
        day = false;
        return false;
    }

    if (!(monthInput.value >= 1 && monthInput.value <= 12)) {
        monthText.innerHTML = "enter valid month"
        month = false;
        return false;
    }
    return true;
}

function calculateAge() {
    const currentDate = new Date();
    //const birthDateString = `${yearInput.value}-${monthInput.value}-${dayInput.value}`;
    const birthDate = new Date(yearInput.value, (monthInput.value - 1), dayInput.value);
    const yearDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthDate.getMonth();
    const dayDiff = currentDate.getDate() - birthDate.getDate();
  
    let year = yearDiff;
    let month = monthDiff;
    let day = dayDiff;
  
    if (day < 0) {
      month--;
      const daysInPrevMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      ).getDate();
      day += daysInPrevMonth;
    }
  
    if (month < 0) {
      year--;
      month += 12;
    }
  
    years.innerHTML = year;
    months.innerHTML = month;
    days.innerHTML = day;
  }

function resetText() {
    dayText.innerHTML = "</br>";
    monthText.innerHTML ="</br>";
    yearText.innerHTML ="</br>";

    years.innerHTML = '--';
    months.innerHTML = '--';
    days.innerHTML = '--';
}

function handleClick() {
    resetText();
    if (checkEmpty() && checkFuture() && checkValid()) {
        calculateAge();
    }
    render();
}

check.addEventListener('click', handleClick);
console.log(dayInput.value)

