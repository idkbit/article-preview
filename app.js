const popup = document.querySelector(".popup");
const btn = document.querySelector(".share");
const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", e => {
  if (e.target === btn || e.target === popup) {
    return;
  } else {
    popup.classList.add("hidden");
  }
})
btn.addEventListener("click", () => {
  popup.classList.toggle("hidden");
})
