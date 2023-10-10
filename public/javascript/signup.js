const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const user = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const isAdmin = false
  
    if (user && email && password) {
      const response = await fetch('/api/user', {
        method: 'POST',
        body: JSON.stringify({ user, email, password, isAdmin }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/admin');
      } else {
        alert(response.statusText);
      }
    }
  };
  

document.querySelector('.signupbutton').addEventListener('click', signupFormHandler);
