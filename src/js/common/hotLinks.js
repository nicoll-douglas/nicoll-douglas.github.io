import ballLeft from "@/assets/images/common/ball-left.gif";
import ballRight from "@/assets/images/common/ball-right.gif";
import topGif from "@/assets/images/common/top.gif";
import homeUrl from "@/assets/images/common/home.gif";
import setSize from "./setSize";

const hotLinks = [...document.querySelectorAll(".hot-links")];

hotLinks.forEach((container) => {
  const next = container.dataset.next;
  const prev = container.dataset.prev;
  const hasHome = JSON.parse(container.dataset.home);
  const hasTop = JSON.parse(container.dataset.top);

  container.role = "group";
  container.ariaLabel = "Hot Links";

  const prevLink = document.createElement("a");
  prevLink.href = prev;
  prevLink.ariaLabel = prev;
  const prevImg = document.createElement("img");
  prevImg.ariaHidden = true;
  prevImg.src = ballLeft;
  prevLink.appendChild(prevImg);
  setSize(prevImg, 45);

  container.appendChild(prevLink);
  const subContainer = document.createElement("div");

  if (hasHome) {
    const homeLink = document.createElement("a");
    const homeImg = document.createElement("img");
    homeLink.href = "/";
    homeLink.ariaLabel = "Home";
    homeLink.classList.add("flex");
    homeImg.style.width = "120px";
    homeImg.style.height = "40px";
    homeImg.src = homeUrl;
    homeImg.ariaHidden = true;
    homeLink.appendChild(homeImg);
    subContainer.appendChild(homeLink);
  }

  if (hasTop) {
    const topLink = document.createElement("a");
    const topImg = document.createElement("img");
    topLink.href = "#top";
    topLink.ariaLabel = "Home";
    topImg.style.width = "80px";
    topImg.style.height = "100px";
    topImg.src = topGif;
    topImg.ariaHidden = true;
    topLink.appendChild(topImg);
    subContainer.appendChild(topLink);
  }

  container.appendChild(subContainer);

  const nextLink = document.createElement("a");
  nextLink.href = next;
  nextLink.ariaLabel = next;
  const nextImg = document.createElement("img");
  nextImg.ariaHidden = true;
  nextImg.src = ballRight;
  nextLink.appendChild(nextImg);
  setSize(nextImg, 45);

  container.appendChild(nextLink);
});
