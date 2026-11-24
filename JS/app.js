const tablet = window.matchMedia(
  "(min-width: 768px) and (hover: none) and (pointer: coarse)",
);

const aboutContainer = document.querySelector("#about");
const aboutLink = document.querySelector(".aboutme");
const aboutPopup = document.querySelector(".popup-aboutme");
const navigationContainers = document.querySelectorAll(
  ".navigation > div:not(.popup-invitation)",
);

let popupInfo = document.querySelector(".popup-info");
let popupInvitation = document.querySelector(".popup-invitation");

let popupTimer;
let activeContainer = null;
let activePopup = null;

if (tablet.matches === true) {
  navigationContainers.forEach((container) => {
    const link = container.querySelector("a");
    const popup = container.querySelector("div");
    link.addEventListener("click", (event) => {
      if (activeContainer === container) {
      } else {
        event.preventDefault();
        if (activeContainer !== null) {
          clearTimeout(popupTimer);
          popupInvitation.classList.remove("visible");

          const previousPopup = activeContainer.querySelector("div");
          previousPopup.classList.remove("active");
          previousPopup.classList.remove("hidden");
        }

        activeContainer = container;

        popup.classList.add("active");

        activePopup = popup;

        container.append(popupInvitation);

        popupTimer = setTimeout(() => {
          activePopup.classList.add("hidden");
          popupInvitation.classList.add("visible");
        }, 4000);
      }
    });
  });

  document.addEventListener("click", (event) => {
    if (activeContainer !== null && !activeContainer.contains(event.target)) {
      activePopup.classList.remove("active");
      activePopup.classList.remove("hidden");
      clearTimeout(popupTimer);
      popupInvitation.classList.remove("visible");
      activeContainer = null;
      activePopup = null;
    }
  });

  window.addEventListener("pageshow", () => {
    clearTimeout(popupTimer);
    if (activePopup !== null) {
      activePopup.classList.remove("active");
      activePopup.classList.remove("hidden");
    }
    popupInvitation.classList.remove("visible");
    activeContainer = null;
    activePopup = null;
  });
}
