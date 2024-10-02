import britney from "@/assets/audio/britney.mp3";
import cher from "@/assets/audio/cher.mp3";
import eiffel from "@/assets/audio/eiffel.mp3";
import daft from "@/assets/audio/daft.mp3";
import lionel from "@/assets/audio/lionel.mp3";
import mrmister from "@/assets/audio/mrmister.mp3";
import mariah from "@/assets/audio/mariah.mp3";
import selena from "@/assets/audio/selena.mp3";
import daft2 from "@/assets/audio/daft-2.mp3";
import backstreet from "@/assets/audio/backstreet.mp3";

// audio sources
const songAudios = {
  britney,
  backstreet,
  cher,
  eiffel,
  daft,
  daft2,
  lionel,
  mrmister,
  mariah,
  selena,
};

// element references
const controlPanel = {
  buttons: [...document.querySelectorAll(".song-button")],
  audio: document.querySelector("#song-audio"),
  songSelectionBtn: document.querySelector("#song-selection-btn"),
  toggleMusicBtn: document.querySelector("#toggle-music"),
  stopMusicBtn: document.querySelector("#stop-music"),
  marquee: document.querySelector("#song-marquee"),
  volume: document.querySelector("#volume-slider"),
};

// methods to operate on song selection button styles
const buttons = {
  deactivateAll: () => {
    controlPanel.buttons.forEach((btn) => {
      btn.classList.remove("song-active");
      btn.querySelector("span").classList.add("invisible");
    });
  },
  activateOne: (btn) => {
    btn.classList.add("song-active");
    btn.querySelector("span").classList.remove("invisible");
  },
};

// methods to operate on marquee text
const marquee = {
  setCurrentSong: (btn) => {
    controlPanel.marquee.textContent = btn.dataset.song;
  },
  reset: () => {
    controlPanel.marquee.textContent = "Select a song!";
  },
};

// methods to operate on audio element
const audio = {
  toggle: () => {
    const audioRef = controlPanel.audio;
    if (audioRef.src) {
      if (audioRef.paused) {
        audioRef.play();
      } else {
        audioRef.pause();
      }
    }
  },
  reset: () => {
    controlPanel.audio.removeAttribute("src");
    controlPanel.audio.currentTime = 0;
    controlPanel.audio.pause();
  },
  play: (btn) => {
    controlPanel.audio.src = songAudios[btn.dataset.songId];
    controlPanel.audio.currentTime = 0;
    controlPanel.audio.play();
  },
  setVolume: (value) => {
    controlPanel.audio.volume = value;
  },
};

// click song window btn => toggle it

// click stop music btn => reset the music player
controlPanel.stopMusicBtn.addEventListener("click", () => {
  audio.reset();
  buttons.deactivateAll();
  marquee.reset();
});

// click toggle music (play/pause) => toggle audio
controlPanel.toggleMusicBtn.addEventListener("click", audio.toggle);

// user interacts with slider => set volume to slider value
controlPanel.volume.addEventListener("input", (e) => {
  audio.setVolume(parseFloat(e.target.value));
});

controlPanel.buttons.forEach((btn) => {
  // click song btn => reset audio and buttons + activate button and play song
  btn.addEventListener("click", () => {
    buttons.deactivateAll();
    audio.reset();
    buttons.activateOne(btn);
    audio.play(btn);
    marquee.setCurrentSong(btn);
  });
});
