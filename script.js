let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let session =document.querySelector('.session');

setInterval(getdisplay, 1000);

function getdisplay() {
  let date = new Date();
 
  let displayhour = date.getHours();
  if(displayhour>12){
      session.textContent=" PM ";
  }
  else{
      session.textContent=" AM ";
  }

  let displayminute = date.getMinutes();
  let displaysecond = date.getSeconds();
  displayhour=displayhour%12;
  hour.textContent =addLeadingZeros( displayhour )+ " : ";
  minute.textContent =addLeadingZeros( displayminute )+ " : ";
  second.textContent =addLeadingZeros( displaysecond)+" : ";
}
function addLeadingZeros(number) {
  return String(number).padStart(2, "0");
}