document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // 在這裡可以加入驗證用戶名和密碼的邏輯
        // 例如，您可以將它們與預定義的值進行比較，並導向不同的頁面或顯示錯誤消息。

        if (username === "0902" && password === "290661") {
            alert("登入成功！");
            window.location.href = "home copy 5.htm";
            // 在此處導向到其他頁面或執行其他操作
        } else {
            alert("用戶名或密碼錯誤。請再試一次。");
        }
    });
});
