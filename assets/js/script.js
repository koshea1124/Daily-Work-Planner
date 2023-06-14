var dateElement = $('#currentDay');
var timeElement = $('#currentTime')

$(function () {

  function dateAndTime () {
    var dateDisplay = dayjs().format('dddd, MMMM D, YYYY');
    dateElement.text(dateDisplay);
    var timeDisplay = dayjs().format('hh:mm:ss A');
    timeElement.text(timeDisplay);
  };

  function hourlyColor () {
    var currentHour = dayjs().format('H');
    $('.time-block').each(function() {
      var hourColor = parseInt($(this).attr('id'));
      if (currentHour > hourColor) {
        $(this).addClass('future');
      } else if (currentHour == hourColor) {
        $(this).addClass('present');
      } else {
        $(this).addClass('past');
      }
    });
  };

  function userEntry () {
    $('.saveBtn').on('click', function () {
      var key = $(this).parent().attr('id');
      var value = $(this).siblings('.description').val();
      localStorage.setItem(key, value);
    });
  };

  $('.time-block').each(function() {
    const key = $(this).attr('id');
    const value = localStorage.getItem(key);
    $(this).children('.description').val(value);
  });
  
    dateAndTime();
    hourlyColor();
    userEntry();
    setInterval(dateAndTime,1000);
  });