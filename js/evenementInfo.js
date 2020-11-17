var infoIndex = 5;
carouselInfo();

function carouselInfo() {
  var i;
  var infos = document.querySelectorAll(".info");

  for (i = 0; i < infos.length; i++) {
    infos[i].style.display = "none";
  }
  if (infoIndex > infos.length) {
    infoIndex = 5
  }
  infoIndex++;
  console.log(infoIndex);



  infos[infoIndex-1].style.display = "block";
  setTimeout(carouselInfo, 3000);
}