document.getElementById('saveBtn').addEventListener('click', () => {
    const site = document.getElementById('site').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    if (site && username && password) {
      chrome.storage.local.set({ [site]: { username, password } }, () => {
        alert('Credentials saved!');
      });
    } else {
      alert('Please fill all fields.');
    }
  });
  