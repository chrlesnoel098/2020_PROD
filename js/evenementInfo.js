let infoIndex = 0;
carouselInfo();

function carouselInfo() {
  let infos = document.querySelectorAll(".infoCarousel");


  for (var unInfo of infos) {
    unInfo.style.display = "none";
  }
  
  if (infoIndex <= infos.length) {
      infos[infoIndex].style.display = "block";
      infoIndex++;
  }

  if(infoIndex >= infos.length) {
    infoIndex = 0;
  }
  setTimeout(carouselInfo, 30000);
}
