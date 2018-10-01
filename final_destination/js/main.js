var identicalPassw = function () {
    if (document.getElementById('password').value !=
    document.getElementById('retype-password').value) {
        alert("Passwords don't match!");
        return true;
    } else {
        
        return false;
    }
}

var check = function () {
    if (document.getElementById('password').value ==
        document.getElementById('retype-password').value) {
        document.getElementById('error-message').style.color = 'green';
        document.getElementById('error-message').innerHTML = 'matching';
        document.getElementById("btn").disabled = false;
    } else {
        document.getElementById('error-message').style.color = 'red';
        document.getElementById('error-message').innerHTML = 'not matching';
        document.getElementById("btn").disabled = true;
    }
}

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
  var slides = document.getElementsByClassName("mySlides");
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

//About Us page
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

//Chat
function addMessage() {
    var text;
    text = document.getElementById('chat-message').innerHTML;
    document.getElementById('chat-window').innerHTML = text;
}
//username?
