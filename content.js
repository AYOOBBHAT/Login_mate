chrome.storage.local.get(null, (credentials) => {
    const site = window.location.hostname;
  
    if (credentials[site]) {
      const { username, password } = credentials[site];
  
      const usernameField = document.querySelector('input[type="email"], input[type="text"]');
      const passwordField = document.querySelector('input[type="password"]');
      const loginButton = document.querySelector('button[type="submit"], input[type="submit"]');
  
      if (usernameField && passwordField && loginButton) {
        usernameField.value = username;
        passwordField.value = password;
        setTimeout(() => {
          loginButton.click();
        }, 500); 
      }
    }
  });
  