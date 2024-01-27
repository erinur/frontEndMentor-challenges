function recorrerInputs() {

    let emailPattern = /\w@\w+[.]+\w{2}/;

    if (firstName.value === '') {
      firstNameError.style.display = 'flex';
      firstNameErrorimg.style.visibility = 'visible';
      firstName.style.border = '1px solid var(--red)';
      firstName.style.color = 'var(--red)';
      firstName.style.marginBottom = '-1.25rem';
      
    } else {
      firstNameError.style.display = 'none';
      firstNameErrorimg.style.visibility = 'hidden';
      firstName.style.border = '1px solid var(--grayish-blue)';
      firstName.style.color = 'var(--grayish-blue)';
      firstName.style.marginBottom = '0.125rem';
    }

    if (lastName.value === '') {
      lastNameError.style.display = 'flex';
      lastNameErrorimg.style.visibility = 'visible';
      lastName.style.border = '1px solid var(--red)';
      lastName.style.color = 'var(--red)';
      lastName.style.marginBottom = '-1.25rem';
    }else {
      lastNameError.style.display = 'none';
      lastNameErrorimg.style.visibility = 'hidden';
      lastName.style.border = '1px solid var(--grayish-blue)';
      lastName.style.color = 'var(--grayish-blue)';
      lastName.style.marginBottom = '0.125rem';
    }

    if (password.value === '') {
      passwordError.style.display = 'flex';
      passwordError.style.display = 'flex';
      passwordErrorimg.style.visibility = 'visible';
      password.style.border = '1px solid var(--red)';
      password.style.color = 'var(--red)';
      password.style.marginBottom = '-1.25rem';
    }else {
      passwordError.style.display = 'none';
      passwordErrorimg.style.visibility = 'hidden';
      password.style.border = '1px solid var(--grayish-blue)';
      password.style.color = 'var(--grayish-blue)';
      password.style.marginBottom = '0.125rem';
    }

    if (emailPattern.test(emailAddress.value) !== true) {
      emailAddressError.style.display = 'flex';
      emailAddressErrorimg.style.visibility = 'visible';
      emailAddress.style.border = '1px solid var(--red)';
      emailAddress.style.color = 'var(--red)';
      emailAddress.style.marginBottom = '-1.25rem';
    } else {
      emailAddressError.style.display = 'none';
      emailAddressErrorimg.style.visibility = 'hidden';
      emailAddress.style.border = '1px solid var(--grayish-blue)';
      emailAddress.style.color = 'var(--grayish-blue)';
      emailAddress.style.marginBottom = '0.125rem';
    }

}

    

  
  

