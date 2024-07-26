function debounce(callback, delay = 100) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}

const getElementById = (id) => document.getElementById(id);

const showNav = () => {
  if ($("#transformDiv").data("open") == "0") {
    $("#transformDiv").removeClass("h-0");
    $("#transformDiv").addClass("h-80");
    $("#transformDiv").data("open", "1");
    console.log("showing Nav");
  } else {
    $("#transformDiv").addClass("h-0");
    $("#transformDiv").removeClass("h-80");
    $("#transformDiv").data("open", "0");
    console.log("closing nav");
  }
};

const debouncedShowNav = debounce(showNav);

getElementById("openMobileNav").addEventListener("click", () => {
  getElementById("mobileNavbar").classList.remove("-translate-y-full");
});

getElementById("closeMobileNav").addEventListener("click", () => {
  getElementById("mobileNavbar").classList.add("-translate-y-full");
});

document.querySelectorAll(".dark-toggle").forEach((element) => {
  element.addEventListener("click", () => {
    document.documentElement.classList.add("dark");
    console.log("to dark");
  });
});

document.querySelectorAll(".light-toggle").forEach((element) => {
  element.addEventListener("click", () => {
    document.documentElement.classList.remove("dark");
    console.log("to light");
  });
});