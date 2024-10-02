const dom = {
  firstSong: document.querySelector("#first-song"),
  lastSong: document.querySelector("#last-song"),
  openBtn: document.querySelector("#song-selection-btn"),
  modal: document.querySelector("#song-selection-modal"),
};

const modal = {
  toggle: () => dom.modal.classList.toggle("hidden"),
  hide: () => dom.modal.classList.add("hidden"),
  isHidden: () => dom.modal.classList.contains("hidden"),
};

dom.openBtn.addEventListener("click", () => {
  modal.toggle();
  if (modal.isHidden()) {
    dom.openBtn.focus();
  } else {
    dom.firstSong.focus();
  }
});

function handleEscape(e) {
  if (modal.isHidden()) return;
  if (e.key !== "Escape") return;
  e.preventDefault();
  modal.hide();
  dom.openBtn.focus();
}

function handleTab(e) {
  if (modal.isHidden()) return;
  if (e.key !== "Tab") return;

  if (document.activeElement === dom.lastSong) {
    if (!e.shiftKey) {
      e.preventDefault();
      dom.firstSong.focus();
      return;
    }
  }

  if (document.activeElement === dom.firstSong) {
    if (e.shiftKey) {
      e.preventDefault();
      dom.lastSong.focus();
      return;
    }
  }
}

dom.modal.addEventListener("keydown", handleEscape);
dom.modal.addEventListener("keydown", handleTab);
