function checkPassword(id) {
  const correctPassword = "rps801"; // 各記事で動的に変えてもOK
  const input = document.getElementById("passwordInput-" + id).value;
  const error = document.getElementById("errorMessage-" + id);
  const content = document.getElementById("protectedContent-" + id);

  if (input === correctPassword) {
    content.style.display = "block";
    error.textContent = "";
  } else {
    error.textContent = "パスワードが違います。";
  }
}
