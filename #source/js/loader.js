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






