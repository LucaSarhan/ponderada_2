document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('loginForm');
  const usernameInput = document.getElementById('usernameInput');
  const passwordInput = document.getElementById('passwordInput');

  loginForm.addEventListener('submit', async function (event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    const response = await fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem('token', data.token);
      window.location.href = '/main.html'; // Redirect to a protected page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
});