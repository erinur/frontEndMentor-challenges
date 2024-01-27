function check() {
  let width = document.getElementById('main').clientWidth;
  console.log(width);
  const expresion = document.querySelector('#content-form-email').value;
  let pattern = /\w@\w+[.]+\w{2}/;
  if (pattern.test(expresion) !== true) {
    document.querySelector('#content-form-error').style.visibility = 'visible';
    document.querySelector('#content-form-email').style.border = '1px solid var(--tomato)';
    document.querySelector('#content-form-email').style.color = 'var(--tomato)';
    document.querySelector('#content-form-email').style.backgroundColor = 'var(--tomato-ligth)';
  } else {
    document.getElementById('container').innerHTML = '<div id="response"><img id="response-img" src="./assets/images/icon-success.svg" alt=""><h1>Thank for subscribing!</h1><p>A confirmation email have been sent to <span>' + expresion + '</span>. Please open it and click the button inside to confirm your subscription</p><input type="button" value="Dismiss message" onclick="location.reload()"></div>'
    if (width > 575) {
      document.getElementById('container').style.width = '31rem';
      document.getElementById('container').style.height = '32rem'
    } else {
      console.log('mas pequeño')
    }
  }
}