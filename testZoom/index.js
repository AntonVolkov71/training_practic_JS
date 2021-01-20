

function zoom(event) {
  let zoomer = event.currentTarget;

  event.offsetX ? (offsetX = event.offsetX) : (offsetX = event.touches[0].pageX);
  event.offsetY ? (offsetY = event.offsetY) : (offsetX = event.touches[0].pageX);

  let x = offsetX / zoomer.offsetWidth * 100;
  let y = offsetY / zoomer.offsetHeight * 100;

  zoomer.style.backgroundPosition = x + "% " + y + "%";
}