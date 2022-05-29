const myBirthday = '19 Sep 2022';
var daysElement =document.getElementById('days');
var hoursElement =document.getElementById('hours');
var minutesElement =document.getElementById('minutes');
var secondsElement =document.getElementById('seconds');


function countdown(){
    const myBirthdayDate =  new Date(myBirthday);
    const currentDate =new Date();

    const totalSeconds = (myBirthdayDate - currentDate) /1000; 
    
    const days = Math.floor(totalSeconds/ 3600 /24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const minutes = Math.floor(totalSeconds/ 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysElement.innerHTML = days;
    hoursElement.innerHTML = formatTime(hours);
    minutesElement.innerHTML = formatTime(minutes);
    secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time <10 ? (`0${time}`) :time;
}

countdown();

setInterval(countdown, 1000);