const BODY = document.querySelector("body")
const TITLE_LIGHT = document.querySelector("#light")
const TITLE_DARK = document.querySelector("#dark")
const SLIDER = document.querySelector(".slider")
const DARK_THEME_BUTTON = document.querySelector("#themeButton")
const SUN = document.querySelector("#sun")
const MOON = document.querySelector("#moon")
const LIGHT = "#d5c4a1"
const DARK = "#3c3836"
const INACTIVE = "#7c6f64"
let flag = false

DARK_THEME_BUTTON.onclick = function() {
  if (flag) {
    BODY.style.background = LIGHT
    BODY.style.color = DARK
    SLIDER.style.background = DARK
    MOON.style.color = INACTIVE
    SUN.style.color = DARK
    TITLE_DARK.style.opacity = 0
    TITLE_DARK.style.padding = "32px 0 0 0"
    TITLE_LIGHT.style.opacity = 100
    TITLE_LIGHT.style.padding = "96px 0 0 0"
    flag = false
  }
  else {
    BODY.style.background = DARK
    BODY.style.color = LIGHT
    SLIDER.style.background = LIGHT
    SUN.style.color = INACTIVE
    MOON.style.color = DARK
    TITLE_LIGHT.style.opacity = 0
    TITLE_LIGHT.style.padding = "0 0 32px 0"
    TITLE_DARK.style.opacity = 100
    TITLE_DARK.style.padding = "0 0 96px 0"
    flag = true
  }
}