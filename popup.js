
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('credentialsForm');

  form.addEventListener('submit', function(event) {
    
    event.preventDefault();

    
    const email = form.elements.email.value;
    const username = form.elements.username.value;
    const password = form.elements.password.value;

    
    chrome.storage.local.set({ [window.location.hostname]: { email, username, password } }, function() {
      
      alert('Credentials saved successfully!');

      
      form.reset();
    });
  });
});

  