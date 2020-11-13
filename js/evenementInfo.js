var infoIndex = 0;
carouselInfo();

function carouselInfo() {
  var i;
  var infos = document.getElementsByClassName("info");
  for (i = 0; i < infos.length; i++) {
    infos[i].style.display = "none";
  }
  infoIndex++;
  if (infoIndex > infos.length) {infoIndex = 1}
  infos[infoIndex-1].style.display = "block";
  setTimeout(carouselInfo, 3000);
}