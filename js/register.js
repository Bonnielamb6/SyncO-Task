import {
    signUp
} from "./firebase.js";

document.addEventListener('DOMContentLoaded', function () {
    const registerButton = document.getElementById('submit');

    registerButton.addEventListener('click', async (event) => {
        event.preventDefault();

        await signup();
    });
});

async function signup() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const username = document.getElementById('username').value;
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const userType = document.getElementById('userType').value;

    const objUser = {
        email,
        password,
        username,
        firstName,
        lastName,
        userType
    };

    await signUp(objUser);
}