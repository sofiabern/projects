const formEl = document.querySelector(".form");
const btnEl = formEl.elements.submit_btn;
const boxEl = document.querySelector(".result-box")

formEl.addEventListener("submit", formHandler);
function formHandler(evt) {
  evt.preventDefault();
  const birthdayValue = formEl.elements.birthday.value;
  if (!birthdayValue) {
    alert("Enter the day of your birth");
    return;
  }

  const {years, days} = calculateMs(birthdayValue);

  createMarkup(years, days)
  
  
}

function calculateMs(dateValue) {
  const currentMs = new Date().getTime();
  const birthMs = new Date(dateValue).getTime();
  if (birthMs > currentMs) {
    boxEl.innerHTML = ""
    alert("Sorry, we can calculate your age if you already are born");
    return;
  }
  const differenceMs = currentMs - birthMs;

  return millisecondsToYearsAndDays(differenceMs);
}

// Converting ms into years and days
function millisecondsToYearsAndDays(milliseconds) {
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

  const years = Math.floor(milliseconds / millisecondsInYear);
  const remainingMilliseconds = milliseconds % millisecondsInYear;

  const millisecondsInDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(remainingMilliseconds / millisecondsInDay);

  return { years, days };
}

function createMarkup(years, days) {
  const markup = `<p class="result">You are ${years} ${years > 1 ? "years" : "year" && !years ? "years" : "year"} and ${days} ${days > 1 ? "days" : "day"} old.</p>`;
  boxEl.innerHTML = markup;
}
