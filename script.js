
var openbtn = document.getElementById("account");
var closebtn=document.getElementById("close");

var modal = document.getElementById("createaccount");
openbtn.onclick = function() {
    modal.style.display = "block";
  }
  closebtn.onclick=function(){
      modal.style.display="none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
