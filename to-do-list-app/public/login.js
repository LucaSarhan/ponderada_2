document.addEventListener('DOMContentLoaded', async function () {
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
      document.cookie = `token=${data.token}; path=/`; // Set token as cookie
      window.location.href = '/main'; // Redirect to the protected page
    } else {
      alert('Invalid credentials. Please try again.');
    }
  });
});