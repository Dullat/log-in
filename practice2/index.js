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

const validateInputs = () => {
  let uName = userName.value.trim()
  let uPass = password.value.trim()

  if (uName === "") {
    setError(userName, "name is require")
  }
}
