let loginForm = document.getElementById('login-form')

export let username = ""

loginForm.addEventListener("submit", (e) => {
    e.preventDefault()

    username = document.getElementById("username-input").value

    location.href('/chat.html')
})