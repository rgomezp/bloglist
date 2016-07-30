$(function(){
  function timer(){
    seconds = seconds-1;
    if (seconds == 0){
      clearTimeout(timeout);
    }
    update(seconds)
  }

  function update(seconds){
    var minutes = Math.floor(seconds / 60);
    var seconds2 = seconds % 60;
    if(seconds2 < 10){
      seconds2 = "0"+seconds2;
    }
    console.log(seconds);
    $("#timer").html(minutes + ":" + seconds2);
  }
  var seconds = 300;
  var timeout = setInterval(timer,1000);
})
