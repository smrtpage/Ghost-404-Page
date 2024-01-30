var pageX = $(document).width();
var pageY = $(document).height();
var mouseY = 0;
var mouseX = 0;

$(document).mousemove(function (event) {
  mouseY = event.pageY;
  yAxis = ((pageY / 2 - mouseY) / pageY) * 300;
  mouseX = event.pageX / -pageX;
  xAxis = -mouseX * 100 - 100;

  $(".box__ghost-eyes").css({
    transform: "translate(" + xAxis + "%,-" + yAxis + "%)",
  });
});
