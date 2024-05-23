document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.getElementById('credentialsForm');
  

    form.addEventListener('submit', function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the values from the form fields
      const email = form.elements.email.value;
      const username = form.elements.username.value;
      const password = form.elements.password.value;
  
      
      chrome.storage.local.set({ [window.location.hostname]: { email, username, password } }, function() {
        
        alert('Credentials saved successfully!');
        
        
        form.reset();
      });
    });
  });
  