function checkPassword(id) {
  const password = document.getElementById(`passwordInput-${id}`).value;
  const protectedContent = document.getElementById(`protectedContent-${id}`);
  const errorMessage = document.getElementById(`errorMessage-${id}`);
  const passwordDiv = document.getElementById(`passwordProtected-${id}`);

  if (password === 'rps801') { // パスワードをここに設定
    protectedContent.style.display = 'block';
    errorMessage.textContent = '';

    // 入力欄・ボタンなどを非表示にする
    const inputArea = passwordDiv.querySelectorAll('input, button, p');
    inputArea.forEach(el => el.style.display = 'none');
  } else {
    errorMessage.textContent = 'パスワードが違います';
  }
}
