  var secondsHand = document.querySelector('.sec-hand');
  var minHand = document.querySelector('.min-hand');
  var hourHand = document.querySelector('.hour-hand');
  function getTime() {
    var time = new Date();

    var secs = time.getSeconds();
    var min = time.getMinutes();
    var hour = time.getHours();

    var secondsDegree = ((secs / 60) * 360) + 90;
    var minDegree = ((min / 60) * 360) + ((secs / 60) * 6) + 90;
    var hourDegree = ((hour / 12) * 360) + ((min / 60 ) * 30) + 90;

    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
  }

  setInterval(getTime, 1000);

  getTime();
