const about = document.getElementsByClassName("profile-info")[0];

const para = document.createElement("span");
para.classList.add("info");

para.innerHTML = `Bringing you closer to the people and things you love. ❤️`;
para.style.fontSize = "21.55px";
about.appendChild(para);

const report = document.querySelector("#options");
const modal = document.querySelector(".modal");

report.onclick = () => {
  modal.classList.add("active");
};

// report.addEventListener("click", function () {
//   modal.classList.add("active");
// });

const cancel = document.getElementsByTagName("button")[7];
cancel.style.color = "black";
cancel.style.fontWeight = "600";
cancel.onclick = () => {
  modal.classList.remove("active");
};
modal.onclick = () => {
  modal.classList.remove("active");
};

const video = document.querySelector(".vid");
const press = document.querySelector("#btn");

const playPause = () => {
  if (video.paused) {
    video.play();
    press.style.visibility = "hidden";
  } else {
    video.pause();
    press.style.visibility = "Visible";
  }
};

press.onclick = () => {
  playPause();
};
