
// ____________________________________________________________________________________________ calculator.js

let costDesign = document.querySelectorAll('.design__slider .design-slide__prise span')
let priseDesign = +costDesign[0].innerHTML

$('.design__slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
  let slide = currentSlide ? currentSlide : 0
  priseDesign = +costDesign[slide].innerHTML
});

document.querySelector('#openPrise').addEventListener('click', () => {
  let priselayer

  [...document.querySelectorAll('.layer-prise')].forEach((s, i, arr) => {
    if (arr[i].checked) {
      priselayer = +arr[i].value ? +arr[i].value : 0
    }
  })

  let prise = priseDesign + priselayer
  console.log(prise)
})








// ____________________________________________________________________________________________ loaderImg.js
let img = document.querySelector('#myImg');
if (img) img.style.display = 'none';
document.querySelector('input[type="file"]') && document.querySelector('input[type="file"]').addEventListener('change', function () {
  if (this.files && this.files[0]) {
    img.onload = () => {
      img.style.display = 'block';
      URL.revokeObjectURL(img.src);
    }
    img.src = URL.createObjectURL(this.files[0]);
  }
});







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



