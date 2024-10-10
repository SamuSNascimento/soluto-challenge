let firstInteraction = true;

const handleAnimations = () => {
  let isMobile = window.innerWidth < 768;
  let delay = 0;

  for (let i = 2; i <= 6; i++) {
    setTimeout(() => {
      var elementAvatar = document.getElementById(`mokaly-avatar-cup-${i}`);

      elementAvatar.style.animation = "none";
      elementAvatar.offsetHeight;
      elementAvatar.style.animation = !isMobile ? "toTop 3s" : "toBottom 3s";

      if (firstInteraction) firstInteraction = false;
    }, delay);
    delay += 2000;
  }
};

const handleAudio = () => {
  const audio = new Audio("https://b.mokaly.com/audios/matrix_room_enter.mp3");
  audio.play();
  handleButton("block");
};

const handleEvents = () => {
  handleButton("none");
  setTimeout(handleAnimations, firstInteraction ? 4000 : 0);
  setTimeout(handleAudio, firstInteraction ? 14500 : 10500);
};

const handleButton = (displayValue) => {
  const button = document.getElementById("button");
  button.style.display = displayValue;
};

window.onload = handleEvents;
