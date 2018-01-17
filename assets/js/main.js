var todayButton = document.querySelector(`#now-button`);

var outputMessage;
var duration;

var date = new Date();

function thisday() {
  return date;
}

function thismonth() {
  return date.getMonth();
}

function thishours() {
  return date.getHours();
}

function today() {
  var today = thisday()
  var thisMonth = thismonth()
  var thisHours = thishours()

  document.getElementById('result').innerHTML = `Today ${today}`
}

todayButton.addEventListener('click', today);