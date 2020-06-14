var writeLink = document.querySelector(".contacts__button");
var writePopup = document.querySelector(".modal__write");
var writeClose = writePopup.querySelector(".modal__button-close");
var writeForm = writePopup.querySelector(".modal__write-form");
var writeLogin = writePopup.querySelector("[name=your-name]");
var writeEmail = writePopup.querySelector("[name=your-email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

writeLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.add("modal__show");

  if (storage) {
    writeLogin.value = storage;
    if (storage) {
      writeLogin.value = storage;
      writeEmail.focus();
    } else {
      writeLogin.focus();
    }
  }
});

writeClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writePopup.classList.remove("modal__show");
  writePopup.classList.remove("modal__error");
});

writeForm.addEventListener("submit", function (evt) {
  if (!writeLogin.value || !writeEmail.value) {
    evt.preventDefault();
    writePopup.classList.remove("modal__error");
    writePopup.offsetWidth = writePopup.offsetWidth;
    writePopup.classList.add("modal__error");
  } else {
    localStorage.setItem("login", writeLogin.value);
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writePopup.classList.contains("modal__show")) {
      evt.preventDefault();
      writePopup.classList.remove("modal__show");
      writePopup.classList.remove("modal__error");
    }
  }
});