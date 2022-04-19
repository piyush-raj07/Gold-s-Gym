var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("images");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 



var currentpack=1;
showpack(currentpack);
 function currentPackage(n){showpack(currentpack=n)};
function showpack(n){
  var i;
  var pos=document.getElementsByClassName("packa")
  var de=document.getElementsByClassName("detail");
  if(n>de.length){currentpack=1}
  if(n<1){currentpack=de.length}
  for(i=0;i<de.length;i++){
    de[i].style.display="none";
  }
  for(i=0;i<pos.length;i++){
    pos[i].className=pos[i].className.replace(" tac", "");
  }
  de[currentpack-1].style.display="block";
  pos[currentpack-1].className +=" tac";
}
function myfuntion(){
  alert("Thank you for Contacting Us!");
  document.getElementById('input').value='';
  location.reload();
}