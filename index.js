var numberOfseats = document.querySelectorAll(".seat").length;

for (var i = 0; i < numberOfseats; i++) {

  document.querySelectorAll(".seat")[i].addEventListener("click", function() {

    this.classList.add("pressed");

  });

}


  


  

