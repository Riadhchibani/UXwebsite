
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

//stepper :

function stepFunction(event) {
  console.log(event);
  if (event === 'caracteristique') {
    document.getElementById("specTable").style.display = "none";
    document.getElementById("caraDesc").style.display = "";
    document.getElementById("carbtn").style.color = "red";
    document.getElementById("specbtn").style.color = "black";
  } else if (event === 'specification') {
    document.getElementById("specTable").style.display = "";
    document.getElementById("caraDesc").style.display = "none";
    document.getElementById("carbtn").style.color = "black";
    document.getElementById("specbtn").style.color = "red";
  }
}


$(document).ready(function () {
  var owl = $('.owl-carousel');
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true
  });
});