function currentDiv_1(n) {
  showDivs_1(slideIndex = n);
}

function showDivs_1(n) {
  var i;
  var x = document.getElementsByClassName("mySlides_1");
  var dots = document.getElementsByClassName("demo");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
  }
  x[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " w3-opacity-off";
}

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides_2");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000);    
}

var myI = 0;
carousel_3();

function carousel_3() {
    var i;
    var x = document.getElementsByClassName("mySlides_3");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myI++;
    if (myI > x.length) {myI = 1}    
    x[myI-1].style.display = "block";  
    setTimeout(carousel_3, 2000); // Change image every 2 seconds
}