function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  // ↓ ここがパスワード！ここを書き換える！
  if (input === "rps801") {
    document.getElementById("protected-content").style.display = "none";
    document.getElementById("secret-content").style.display = "block";
  } else {
    document.getElementById("error").style.display = "block";
  }
}
