function check() {
  const expresion = formulario.email.value;
  let pattern = /\w@\w+[.]+\w{2}/;
  if (pattern.test(expresion) === true) {
    document.querySelector('#error').textContent = '';
    document.querySelector('#error-img').style.display = 'none';
  } else {
    document.querySelector('#error').textContent = 'Please provide a valid email';
    document.querySelector('#error-img').style.display = 'inline';
    document.querySelector('.email').style.outline = '0';
    document.querySelector('.email').style.border ='2px solid var(--soft-red)';
    document.querySelector('.email').style.opacity = '100%';
  }
  
}
