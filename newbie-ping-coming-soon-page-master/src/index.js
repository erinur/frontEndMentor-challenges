function check() {
  const expresion = formulario.email.value;
  let pattern = /\w@\w+[.]+\w{2}/;
  if (pattern.test(expresion) === true) {
    document.querySelector('#error').textContent = ''
    document.querySelector('#formulario .email').style.border = '1px solid var(--gray)';
  } else {
    document.querySelector('#error').textContent = 'Please provide a valid email address';
    document.querySelector('#formulario .email').style.border = '1px solid var(--light-red)';
  }
  
}
