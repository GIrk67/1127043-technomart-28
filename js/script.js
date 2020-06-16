var writeLink = document.querySelector(".contacts__button");
if (writeLink) {
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
}

var mapLink = document.querySelector(".contacts__image");
if (mapLink) {
  var mapPopup = document.querySelector(".modal__map");
  var mapClose = mapPopup.querySelector(".modal__button-close");

  mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal__show");
  });

  mapClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal__show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal__show")) {
        evt.preventDefault();
        mapPopup.classList.remove("modal__show");
      }
    }
  });
}


var basketLink = document.querySelectorAll(".product__basket");
console.log(basketLink);
basketLink.forEach(function (basketLink) {
  var basketPopup = document.querySelector(".modal__basket");
  var basketClose = basketPopup.querySelector(".modal__button-close");

  basketLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.add("modal__show");
  });

  basketClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    basketPopup.classList.remove("modal__show");
  });

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (basketPopup.classList.contains("modal__show")) {
        evt.preventDefault();
        basketPopup.classList.remove("modal__show");
      }
    }
  });
});