  var secondsHand = document.querySelector('.sec-hand');
  var minHand = document.querySelector('.min-hand');

  function getTime() {
    var time = new Date();
    var secs = time.getSeconds();
    var min = time.getMinutes();
    var secondsDegree = ((secs / 60) * 360 + 90);
    var minDegree = ((min / 3600) * 360 + 90);
    secondsHand.style.transform = `rotate(${secondsDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
  }

  setInterval(getTime, 1000);
