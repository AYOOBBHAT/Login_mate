document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('addCredentialsForm');
  const websiteList = document.getElementById('websiteList');

  
  chrome.storage.local.get(null, function(data) {
    for (const website in data) {
      createWebsiteButton(website, data[website]);
    }
  });

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const website = document.getElementById('websiteInput').value;
    const websiteName = document.getElementById('websiteName').value;
    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    
    chrome.storage.local.set({ [website]: { websiteName, email, password } }, function() {
      alert('Credentials saved successfully!');
      createWebsiteButton(website, { websiteName, email, password });
      form.reset();
    });
  });

  function createWebsiteButton(website, credentials) {
    const listItem = document.createElement('li');
    const button = document.createElement('button');
    button.textContent = credentials.websiteName;
    button.addEventListener('click', function() {
      
      chrome.tabs.create({ url: website });
    });
    listItem.appendChild(button);
    websiteList.appendChild(listItem);
  }
});
