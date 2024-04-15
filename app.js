function createAccount() {
    const username = document.getElementById("newUsername").value;
    const password = encrypt(document.getElementById("newPassword").value);

    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const existingUser = existingAccounts.find(account => account.username === username);

    if (existingUser) {
        alert("Username already exists. Please choose a different one.");
    } else {
        const accountData = {
            username: username,
            password: password,
        };

        existingAccounts.push(accountData);
        localStorage.setItem("accounts", JSON.stringify(existingAccounts));
        showLoginView();
        alert("Account created successfully! You can now log in.");
    }
}

function saveAccount() {
    const username = document.getElementById("username").value;
    const password = encrypt(document.getElementById("password").value);

    const existingAccounts = JSON.parse(localStorage.getItem("accounts")) || [];
    const existingUser = existingAccounts.find(account => account.username === username);

    if (existingUser) {
        alert("Username already exists. Please choose a different one.");
    } else {
        const accountData = {
            username: username,
            password: password,
        };

        existingAccounts.push(accountData);
        localStorage.setItem("accounts", JSON.stringify(existingAccounts));
        loadPasswords(); // After saving an account, update the password list
        alert("Account saved successfully!");
        updatePasswordStrengthMeter(password);
    }
}
