const popup = document.querySelector(".popup");
const btn = document.querySelector(".share");
const wrapper = document.querySelector(".wrapper");

wrapper.addEventListener("click", e => {
  if (e.target === btn || e.target === popup) return;
  else {
    popup.classList.add("hidden");
  }
})
btn.addEventListener("click", () => {
  if (popup.classList.contains("hidden")) {
    popup.classList.toggle("hidden");

  }
});

btn.addEventListener("focus", () => {
  if (popup.classList.contains("hidden")) {
    popup.classList.remove("hidden");
  }
})