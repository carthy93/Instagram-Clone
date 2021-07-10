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

const video = document.querySelector("#vi");
const press = document.querySelector("#btn");

press.onclick = () => {
  video.play();
  press.style.visibility = "hidden";
};

video.onclick = () => {
  video.pause();
  press.style.visibility = "visible";
};

const blockThisUser = document.getElementsByTagName("button")[4];
const blockUser = document.querySelector(".blockUser");

blockThisUser.onclick = () => {
  blockUser.classList.add("active");
};

const cancel1 = document.getElementsByTagName("button")[9];
cancel1.style.color = "black";
cancel1.style.fontWeight = "600";
cancel1.onclick = () => {
  blockUser.classList.remove("active");
};
blockUser.onclick = () => {
  blockUser.classList.remove("active");
};
