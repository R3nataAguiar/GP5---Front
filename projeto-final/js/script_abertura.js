document.getElementById("start-button").addEventListener("click", function () {
  document.getElementById("start-screen").style.display = "none";

  document.getElementById("fade-container").style.display = "flex";

  const video = document.getElementById("intro-video");
  const audio = document.getElementById("background-audio");

  video.play();
  audio.play();

  video.onended = function () {
    document.getElementById("fade-container").classList.add("fade-out");

    setTimeout(function () {
      window.location.href = "index_home.html";
    }, 500);
    ar;
  };
});
