export function changeCardName(x){
  let cardName = x.value
  if(cardName.length<30){
    $('.cardName').text(cardName)
    x.value = x.value.slice(0, 29)
  } else {
    x.value = x.value.slice(0, 29)
  }
}

export function changeCardNumber(x){
  let cardNumber = x.value
  cardNumber = cardNumber.replace(/\D/g, '').split('')
  if(cardNumber.length<=16){
    for(let i=0; i<cardNumber.length;i++){
      if((i+1)%4===0){
        cardNumber[i]=cardNumber[i]+' '
      }
    }
    cardNumber = cardNumber.join('')
    $('.cardNumber').text(cardNumber)
  }
}
export function changeInputNumber(x){
  let onlyNumbers = x.value.replace(/\W/g, '').split('')
  if(onlyNumbers.length<=16){
    let checkSpace = (x.value.length+1)%5
    if(checkSpace === 0 && onlyNumbers.length<=16){
      x.value = x.value + ' '
      x.value = x.value.slice(0, 19)
    }
    
  } else {
    x.value = x.value.slice(0, 19)
  }
}

export function changeExpiryMonth(x){
  let expiryMonth = x.value
  if(expiryMonth.length<3){
    $('.monthExpiry').text(expiryMonth)
    x.value = x.value.slice(0, 2)
  } else {
    x.value = x.value.slice(0, 2)
  }
}
export function changeExpiryYear(x){
  let expiryYear = x.value
  if(expiryYear.length<3){
    $('.yearExpiry').text(expiryYear)
    x.value = x.value.slice(0, 2)
  } else {
    x.value = x.value.slice(0, 2)
  }
}
export function changeInputCSV(x){
  let csv = x.value
  if(csv.length<4){
      x.value = x.value.slice(0, 3)
      $('.cardCSV').text(csv)      
  } else {
    x.value = x.value.slice(0, 3)
  }
}

const noError = "";
const noBlank = "Can't be blank";
const numberError = "Wrong format, numbers only";
const lengthError = `It must have a minimun length: `
const hidden = {
  visibility: 'hidden',
}
const visible = {
  visibility: 'visible',
}

export function checkInputs(){
  resetCSSInputs()
  const checkStatus = [false, false, false, false, false];
  checkCardName(checkStatus)
  checkCardNumber(checkStatus)
  checkExpiryMonth(checkStatus)
  checkExpiryYear(checkStatus)
  checkCSV(checkStatus)
  console.log(checkStatus)
 return (checkStatus)
}

function resetCSSInputs(){
  $('.nameInputError').text(noError)
  $('.nameInputError').css(hidden)
  $('.nameInput').css('border', 'var(--light-grayish-violet)')
  $('.numberInputError').text(noError)
  $('.numberInputError').css(hidden)
  $('.numberInput').css('border', 'var(--light-grayish-violet)')
  $('.dateInputError').text(noError)
  $('.dateInputError').css(hidden)
  $('.yearInput').css('border', 'var(--light-grayish-violet)')
  $('.monthInput').css('border', 'var(--light-grayish-violet)')
  $('.CSVInputError').text(noError)
  $('.CSVInputError').css(hidden)
  $('.CSVInput').css('border', 'var(--light-grayish-violet)')
}

function checkCardName(checkStatus) {
  if($('.nameInput')[0].value !== '') {
    checkStatus[0] = true;
  } else {
    checkStatus[0] = false;
    $('.nameInputError').text(noBlank)
    $('.nameInputError').css(visible)
    $('.nameInput').css('border', '1px solid red')
  }
}

function checkCardNumber(checkStatus) {
  const minLength = 16;
  const regexp1 = /\D/;
  const regexp2 = /\d{16}/;
  const regexp3 = /\W/;
  const cardNumber = $('.numberInput')[0].value.split(regexp3).join('');
  if(regexp2.test(cardNumber)) {
    checkStatus[1] = true;
  } else if(cardNumber === ''){
    checkStatus[1] = false;
    $('.numberInputError').text(noBlank)
    $('.numberInputError').css(visible)
    $('.numberInput').css('border', '1px solid red')
  } else if(regexp1.test(cardNumber)) {
    checkStatus[1] = false;
    $('.numberInputError').text(numberError)
    $('.numberInputError').css(visible)
    $('.numberInput').css('border', '1px solid red')
  } else if(cardNumber.length < minLength) {
    checkStatus[1] = false;
    $('.numberInputError').text(lengthError + minLength)
    $('.numberInputError').css(visible)
    $('.numberInput').css('border', '1px solid red')
  }
}

function checkExpiryMonth(checkStatus) {
  const regexp1 = /\D/;
  const monthInput = $('.monthInput')[0].value
  if(monthInput > 0 && monthInput < 12){
    checkStatus[2] = true;
  }  if(monthInput === ''){
    checkStatus[2] = false;
    $('.dateInputError').text(noBlank)
    $('.dateInputError').css(visible)
    $('.monthInput').css('border', '1px solid red')
  } else if(regexp1.test(monthInput)) {
    checkStatus[2] = false;
    $('.dateInputError').text(numberError)
    $('.dateInputError').css(visible)
    $('.monthInput').css('border', '1px solid red')
  }
}

function checkExpiryYear(checkStatus) {
  const regexp1 = /\D/;
  const yearInput = $('.yearInput')[0].value
  if(yearInput > 0 && yearInput < 99){
    checkStatus[3] = true;
  } else if(yearInput === ''){
    checkStatus[3] = false;
    $('.dateInputError').text(noBlank)
    $('.dateInputError').css(visible)
    $('.yearInput').css('border', '1px solid red')
  } else if(regexp1.test(yearInput)) {
    checkStatus[3] = false;
    $('.dateInputError').text(numberError)
    $('.dateInputError').css(visible)
    $('.yearInput').css('border', '1px solid red')
  }
}

function checkCSV(checkStatus) {
  const minLength = 3;
  const regexp1 = /\D/;
  const regexp2 = /\d{3}/;
  const regexp3 = /\W/;
  const CSVInput = $('.CSVInput')[0].value;
  if(regexp2.test(CSVInput)){
    checkStatus[4] = true;
  } else if(CSVInput === ''){
    checkStatus[4] = false;
    $('.CSVInputError').text(noBlank)
    $('.CSVInputError').css(visible)
    $('.CSVInput').css('border', '1px solid red')
  } else if(regexp1.test(CSVInput)) {
    checkStatus[4] = false;
    $('.CSVInputError').text(numberError)
    $('.CSVInputError').css(visible)
    $('.CSVInput').css('border', '1px solid red')
  } else if(CSVInput.length < minLength) {
    checkStatus[4] = false;
    $('.CSVInputError').text(lengthError + minLength)
    $('.CSVInputError').css(visible)
    $('.CSVInput').css('border', '1px solid red')
  }

  

}