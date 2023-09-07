const hoursHandle = document.querySelector(".hours");
const minutesHandle = document.querySelector(".minutes");
const secondsHandle = document.querySelector(".seconds");

function getTime(){
  const date = new Date();
  
  return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  }
  
}

setInterval(() => {
  const {seconds, minutes, hours} = getTime();
  
  secondsHandle.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`
  minutesHandle.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`
  hoursHandle.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`
  
}, 1000);



