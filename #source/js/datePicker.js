// ____________________________________________________________________________________________ datePicker.js
let datePickerId = document.querySelector('#datePickerId')

let today = new Date()

function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

let minDate = addDays(today, 3)
day = minDate.getDate()
month = minDate.getMonth() + 1
year = minDate.getFullYear()
if (day < 10) {
  day = '0' + day
}
if (month < 10) {
  month = '0' + month
}

if (datePickerId) {
  datePickerId.value = year + '-' + month + '-' + day
  datePickerId.min = year + '-' + month + '-' + day;
}



