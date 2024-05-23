chrome.storage.local.get(null, (credentials) => {
    const site = window.location.hostname;
  
    if (credentials[site]) {
      const { username, password } = credentials[site];
  
      // Function to check if an element is visible on the page
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
  
      // Function to wait for an element to become visible
      const waitForElementVisibility = (element, callback) => {
        const checkVisibility = () => {
          if (isElementVisible(element)) {
            clearInterval(interval);
            callback();
          }
        };
        const interval = setInterval(checkVisibility, 100);
      };
  
      // Autofill the form when the username and password fields become visible
      waitForElementVisibility(document.body, () => {
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
      });
    }
  });
  