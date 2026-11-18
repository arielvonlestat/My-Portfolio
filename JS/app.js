const tablet = window.matchMedia(
  "(min-width: 768px) and (hover: none) and (pointer: coarse)",
);

const aboutContainer = document.querySelector("#about");
const aboutLink = document.querySelector(".aboutme");
const aboutPopup = document.querySelector(".popup-aboutme");

let popupInfo = document.querySelector(".popup-info");
let popupInvitation = document.querySelector(".popup-invitation");

let aboutSelected = false;
let popupTimer;

if (tablet.matches === true) {
  aboutLink.addEventListener("click", (event) => {
    if (aboutSelected === false) {
      event.preventDefault();
      aboutSelected = true;
      aboutPopup.classList.add("active");
      popupTimer = setTimeout(() => {
        popupInfo.classList.add("hidden");
        popupInvitation.classList.add("visible");
      }, 3000);
    } else {
      clearTimeout(popupTimer);
    }
  });

  document.addEventListener("click", (event) => {
    if (!aboutContainer.contains(event.target)) {
      clearTimeout(popupTimer);
      aboutSelected = false;
      aboutPopup.classList.remove("active");
      popupInfo.classList.remove("hidden");
      popupInvitation.classList.remove("visible");
    }
  });
}
