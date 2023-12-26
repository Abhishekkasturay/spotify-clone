const audioElement = new Audio("1.mp3");
const masterPlay = document.getElementById("masterPlay");
const myProgressBar = document.getElementById("myProgressBar");
const songItem = Array.from(document.getElementsByClassName("songItem"));

let songIndex = 1;

const songs = [
  {
    songName: "Ghar se Nikaltae he",
    filePath: "1.mp3",
    currentPath: "Papa-Kehte-Hai.jpg",
  },
  {
    songName: "sari duniya jalan denge",
    filePath: "2.mp3",
    currentPath: "maxresdefault.jpg",
  },
  {
    songName: "Shaabaashiyaan",
    filePath: "3.mp3",
    currentPath: "49037951_300x300.jpg",
  },
  {
    songName: "Oonchi Oonchi Deewarein",
    filePath: "4.mp3",
    currentPath:
      "Oonchi-Oonchi-Deewarein-From-Yaariyan-2-Hindi-2023-20230919183037-500x500.jpg",
  },
  {
    songName: "Yeh Jo Des Hai Tera",
    filePath: "5.mp3",
    currentPath: "Swades-Hindi-2004-20221206092155-500x500.jpg",
  },
];

songItem.forEach((element, i) => {
  element.querySelectorAll("img")[0].src = songs[i].currentPath;
  element.querySelector(".songName").innerText = songs[i].songName;
});

masterPlay.addEventListener("click", function () {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause");
    masterPlay.classList.add("fa-play");
  }
});

audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause");
      element.classList.add("fa-circle-play");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      makeAllPlays();
      index = parseInt(e.target.id);
      e.target.classList.add("fa-pause");
      e.target.classList.remove("fa-circle-play");
      audioElement.src = `${index}.mp3`;
      audioElement.currentTime = 0;
      audioElement.play();
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-pause");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 5) {
    songIndex = 1;
  } else {
    songIndex++;
  }
  audioElement.src = `${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-pause");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 1) {
    songIndex = 1;
  } else {
    songIndex--;
  }
  audioElement.src = `${songIndex}.mp3`;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-circle-play");
  masterPlay.classList.add("fa-pause");
});
