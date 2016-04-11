
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 
var start = function(){
  $('#middleCol').fadeIn(2000);
}
var play = function(){
  $('#rightCol').fadeIn(2000);
  $('#bottomRow').fadeIn(2000);
}
var infoSubmit = function(e){
    e.preventDefault();
    initAmount = parseInt($('#initAmount').val());
    currentAmount = parseInt($('#initAmount').val());
    bet = parseInt($('#bet').val());
    odds = parseInt($('#odds').val());

    html = "<h1 style='text-align: center;'> Your money : " + currentAmount + "$</h1>";
    var guess_html = "<label> Input your guess here (number between 1 and " + odds + ") :</label>";

    $('#your_money').html(html);
    $('#guess_output').html(guess_html);
    $("html, body").animate({ scrollTop: "300px" }, 2000);
    percentageBar(100);
}

var betSubmit = function(e){     
  e.preventDefault();
  guess = parseInt($('#guess').val());
  randNum = getRandomInt(1, odds);

  if (guess === randNum){
    currentAmount += bet;
    html = "<h1 style='text-align: center;'> Your money : " + currentAmount + "$</h1>";
    output(true);
  } else {
    currentAmount -= bet;
    html = "<h1 style='text-align: center;'> Your money : " + currentAmount + "$</h1>";
    output(false);
  }
  $('#your_money').html(html);
  percentageBar(getPercentage());
}

var reset = function(){
  location.reload();
}

var getPercentage = function(){
  percentage = (currentAmount/initAmount)*100;
  if (percentage > 100){
    percentage = 100;
  } else if (percentage < 0){
    percentage = 0;
  }
  return percentage;
}

var percentageBar = function(percentage) {
  
  if(percentage === 100){
    progressBar.attr('class', 'progress-bar progress-bar-success')
               .animate({width: percentage+'%'},1000);
  }
  debugger;

  if (percentage > 75){
    //green bar
    progressBar.attr("class", "progress-bar progress-bar-success")
               .css('width', percentage+'%');
  }else if (percentage > 50){
    //blue bar
    progressBar.attr("class", "progress-bar progress-bar-info")
               .css('width', percentage+'%');
  }else if (percentage > 25){
    //yellow bar
    progressBar.attr("class", "progress-bar progress-bar-warning")
               .css('width', percentage+'%');
  }else {
    //red bar
    progressBar.attr("class", "progress-bar progress-bar-danger")
               .css('width', percentage+'%');
  }

  if (percentage === 0){
    alert('Warning! You are out of money!');
  }
}

var output = function(boolean){
  var html = "";
  if (boolean === true){
    html = "<h2 style='color: green; text-align: center;'> You won! </h2>";
  } else {
    html = "<h2 style='color: red; text-align: center;'> You lost! </h2>";
  }

  $('.game_output').html(html).fadeIn(500,function(){
    $(this).fadeOut(500);
  });

}

  var initAmount = 0;
  var currentAmount = 0;
  var bet = 0;
  var odds = 0;
  var randNum = 0;
  var guess = 0;
  var html = "";
  var percentage = 0;
  var progressBar = null;

$(document).ready(function(){

 
  progressBar = $('#progressBar');


  $('#startPlaying').click(start);
  $('#submitForm').submit(infoSubmit);
  $('#submitInfo').click(play);
  $('#submitFormBet').submit(betSubmit);
  $('#refresh').click(reset);

});









