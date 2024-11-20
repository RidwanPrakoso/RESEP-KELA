// Event handler untuk tombol login
const loginButton = document.getElementById("loginButton");
loginButton.addEventListener("click", function () {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
        // Redirect ke halaman login success
        window.location.href = "../main.html"; // Ganti dengan halaman tujuan login
    } else {
        alert("Harap isi Email dan Password untuk Login!");
    }
});

// Event handler untuk tombol sign up
const signupButton = document.getElementById("signupButton");
signupButton.addEventListener("click", function () {
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const phone = document.getElementById("signupPhone").value;
    const password = document.getElementById("signupPassword").value;

    if (username && email && phone && password) {
        // Redirect ke halaman sign up success
        window.location.href = "../main.html"; // Ganti dengan halaman tujuan sign up
    } else {
        alert("Harap isi semua data untuk Sign Up!");
    }
});
