var rockPosition = -500;
var rockMovement = -2;
let correctActiveNavbar = () => {
   let locations = {
      "index.html": "Home",
      "menu.html": "Menu",
      "checkout.html": "Checkout",
      "news.html": "News",
      "about.html": "About"
   };
   let currentLocation = window.location.href;
   currentLocation = currentLocation.split("/").pop();
   document.getElementById(""+locations[currentLocation]).className = "active";
}
let resetRock = () => {
   let rock = document.getElementById("rock");
   rock.style.top = Math.floor(Math.random()*500+50)+"px";
   rockPosition=-100;
   rockMovement=2;
}
let positionRock = () => {
   let rock = document.getElementById("rock");

   rockPosition+=rockMovement;
   rock.style.left = (rockPosition)+"px";
   if (rockPosition > -40){
      rockMovement*=-1;
   }
}

window.onload = function() {
   correctActiveNavbar();
   setInterval(() => {positionRock()},25);
   setInterval(() => {resetRock()},Math.floor(Math.random()*8000)+8000);
}