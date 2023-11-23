import {
    signIn
} from "./firebase.js";

document.addEventListener('DOMContentLoaded', function () {
    const loginButton = document.getElementById('signIn');

    loginButton.addEventListener('click', async (event) => {
        event.preventDefault();

        await signin();
    });
});

async function signin() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    await signIn(email, password);
}