const userName = document.querySelector(".user-name")
const password = document.querySelector(".password")
const form = document.querySelector("form")
const btn = document.querySelector("button")
const errorDiv = document.querySelector(".error")

form.addEventListener("submit", (e) => {
  e.preventDefault()
  validateInputs()
})

function setError(element, message) {
  errorDiv.textContent = message
}

function validateEmailOrUsername(input) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const usernameRegex = /^[a-zA-Z0-9_]{3,20}$/

  return emailRegex.test(input) || usernameRegex.test(input)
}

function validatePassword(input) {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/

  return passwordRegex.test(input)
}

const validateInputs = () => {
  let uName = userName.value.trim()
  let uPass = password.value.trim()

  if (uName === "") {
    setError(userName, "name is require")
  } else if (!validateEmailOrUsername(uName)) {
    setError(userName, "enter valid user or email")
  }

  if (uPass === "") {
    setError(userName, "pass is require")
  } else if (!validatePassword(uPass)) {
    setError(uPass, "enter valid passeord format")
  }
}
