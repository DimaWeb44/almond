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







