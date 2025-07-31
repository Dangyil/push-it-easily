 // Select inputs
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('email');
    const password = document.getElementById('password');

    // Select error spans
    const firstNameError = document.getElementById('firstNameError');
    const lastNameError = document.getElementById('lastNameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');
    
    // select error icons
    const firstNameIcon = document.getElementById('firstNameIcon');
    const lastNameIcon = document.getElementById('lastNameIcon');
    const emailIcon = document.getElementById('emailIcon');
    const passwordIcon = document.getElementById('passwordIcon');
    
    // Email pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // select target for submit button
const submitButton = document.querySelector('button[type="submit"]');

// Function to update the submit button state
function updateButtonState() {
  const hasError =
    firstNameError.textContent ||
    lastNameError.textContent ||
    emailError.textContent ||
    passwordError.textContent ||
    firstName.value.trim() === '' ||
    lastName.value.trim() === '' ||
    email.value.trim() === '' ||
    password.value === '';

  submitButton.disabled = hasError;
}

    // First name validation
    firstName.addEventListener('input', () => {
      const value = firstName.value.trim();
      if (value === '') {
        firstNameError.textContent = 'First name cannot be empty.';
        firstName.classList.add('input-error');
        firstNameIcon.style.display = 'inline-block';
        } else {
        firstNameError.textContent = '';
        firstName.classList.remove('input-error');
        firstNameIcon.style.display = 'none';
        }
         updateButtonState(); // Update button state after validation
    });

    // Last name validation
    lastName.addEventListener('input', () => {
      const value = lastName.value.trim();
      if (value === '') {
        lastNameError.textContent = 'Last name cannot be empty.';
        lastName.classList.add('input-error');
        lastNameIcon.style.display = 'inline-block';
        } else {
        lastNameError.textContent = '';
        lastName.classList.remove('input-error');
        lastNameIcon.style.display = 'none';
        }
         updateButtonState(); // Update button state after validation
    });

    // Email validation
    email.addEventListener('input', () => {
      const value = email.value.trim();
      if (value === '') {
        emailError.textContent = 'Email cannot be empty.';
        email.classList.add('input-error');
        emailIcon.style.display = 'inline-block';
      } else if (!emailPattern.test(value)) {
        emailError.textContent = 'Looks like this is not an email.';
        email.classList.add('input-error');
        emailIcon.style.display = 'none';
      } else {
        emailError.textContent = '';
        email.classList.remove('input-error');
        emailIcon.style.display = 'none';
      }
      updateButtonState(); // Update button state after validation
    });

    // Password validation
    password.addEventListener('input', () => {
      const value = password.value;
      if (value === '') {
        passwordError.textContent = 'Password cannot be empty.';
        password.classList.add('input-error');
        passwordIcon.style.display = 'inline-block';
      } else if (value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        password.classList.add('input-error');
        passwordIcon.style.display = 'none';
      } else {
        passwordError.textContent = '';
        password.classList.remove('input-error');
        passwordIcon.style.display = 'none';
      }
       updateButtonState(); // Update button state after validation
    });

    // Final check on submit
    document.getElementById('myForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent actual form submission

      // Trigger validation
      firstName.dispatchEvent(new Event('input'));
      lastName.dispatchEvent(new Event('input'));
      email.dispatchEvent(new Event('input'));
      password.dispatchEvent(new Event('input'));

      // Check if all are valid
      if (
        !firstNameError.textContent &&
        !lastNameError.textContent &&
        !emailError.textContent &&
        !passwordError.textContent
      ) {
        alert("Form submitted successfully!");
        this.reset(); // Reset the form
        firstNameError.textContent = '';
        lastNameError.textContent = '';
        emailError.textContent = '';
        passwordError.textContent = '';
      }
    });

    
