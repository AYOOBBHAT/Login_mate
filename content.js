chrome.storage.local.get(null, (credentials) => {
  const site = window.location.hostname;

  if (credentials[site]) {
    const { email, password } = credentials[site];

    const isElementVisible = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.width > 0 &&
        rect.height > 0 &&
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const waitForElementVisibility = (element, callback) => {
      const checkVisibility = () => {
        if (isElementVisible(element)) {
          clearInterval(interval);
          callback();
        }
      };
      const interval = setInterval(checkVisibility, 100);
    };

    waitForElementVisibility(document.body, () => {
      const emailField = document.querySelector('input[type="email"], input[type="text"]');
      const passwordField = document.querySelector('input[type="password"]');
      const loginButton = document.querySelector('button[type="submit"], input[type="submit"]');

      if (emailField && passwordField && loginButton) {
        emailField.value = email;
        passwordField.value = password;
        setTimeout(() => {
          loginButton.click();
        }, 500);
      }
    });
  }
});
