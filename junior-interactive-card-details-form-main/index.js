import {switchButton} from './components/switchButton.js'
import {box} from './components/box.js'
import {changeCardName, changeCardNumber, changeInputNumber,changeExpiryMonth, changeExpiryYear, changeInputCSV, checkInputs} from './components/functions.js'

$(document).ready(function() {


  box('root', 'container')
  box('container', 'containerLeft')
  box('container', 'containerRight1')

  //
  //card Front design
  //
  
  box('containerLeft', 'cardFront')
  //Card Logo

  box('cardFront', 'cardLogo')
  const cardLogoSVG = 
  `
  <img src="./images/card-logo.svg" alt=""></img>
  `
  $('.cardLogo').append(cardLogoSVG)

  //Card data

  box('cardFront', 'cardData')

  //Card number
  
  box('cardData', 'cardNumber')
  const cardNumber = 
  `
  0000 0000 0000 0000
  `
  $('.cardNumber').append(cardNumber)

  //Card name and expipry
  
  box('cardData', 'cardNameExpiry')
  const cardNameExpiry = 
  `
  <p class="cardName">Jane Appleseed</p>
  <p class="cardExpiry"><span class="monthExpiry">00</span>/<span class="yearExpiry">00</span></p>
  `
  $('.cardNameExpiry').append(cardNameExpiry)

  //
  //card Back design
  //
  
  box('containerLeft', 'cardBack')

  //Card CSV
  
  box('cardBack', 'cardCSV')
  const cardCSV = 
  `
  000
  `
  $('.cardCSV').append(cardCSV)

  //
  //Alternative view on right side
  //

  box('containerRight1', 'dataOnRight')
  const dataInput =
  `
  <div class='dataInput'>
    <div>
      <p class='nameTitle title'>Cardholder Name</p>
      <input class='nameInput input' type='text' placeholder='e.g. Jane Appleseed'>
      <p class='nameInputError error'></p>
    </div>
    <div>
      <p class='numberTitle title'>Card Number</p>
      <input class='numberInput input' type='text' placeholder='e.g. 1234 5678 9123 0000'>
      <p class='numberInputError error'></p>
    </div>
    <div class='dateAndCSVInput'>
      <div class='dateInput'>
        <p class='dateTitle title'>Exp. Date (MM/YY)</p>
        <div>
          <input class='monthInput input' type='text' placeholder='MM'>
          <input class='yearInput input' type='text' placeholder='YY'>
        </div>
        <p class='dateInputError error'></p>
      </div>
      <div>
        <p class='CSVTitle title'>CVC</p>
        <input class='CSVInput input' type='text' placeholder='e.g. 123'>
        <p class='CSVInputError error'></p>
      </div>
    </div>
    <button class='confirmButton'>Confirm</button>
  </div>
  `
  const thanksAndContinue = 
  `
  <div class='thanksAndContinue'>
    <img src='./images/icon-complete.svg' alt=''></img>
    <h1>Thank you!</h1>
    <p>We've added your card details</p>
    <button class='continueButton'>Continue</button>
  </div>
  `

  function continueButton(){
    $('.dataOnRight').html(dataInput)
    $('.dateAndCSVInput').css({display: 'flex', flexDirection: 'row', gap: '20px'})
    $('.dateInput').css({display: 'flex', flexDirection: 'column', width: '330px'})
    $('.dateInput div').css({display: 'flex', flexDirection: 'row', gap: '10px'})
    $('button').on('mouseover', function(){
      $('button').css({cursor: 'pointer'})
    })
    $('input').on('mouseover', function(){
      $('input').css({cursor: 'pointer'})
    })
    
    $('.confirmButton').on('click', function(){

      if (checkInputs().includes(false) !== true){
        confirmButton()
      }

    })
  
  }
  
  function confirmButton(){
    
    $('.dataOnRight').html(thanksAndContinue)
    $('.thanksAndContinue').css({
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: 'var(--very-dark-violet)'
    })
    $('.thanksAndContinue h1').css({
      width: '100%',
      textTransform: 'uppercase',
      color: 'var(--very-dark-violet)',
      textAlign: 'center',
      marginTop: '32px',
      marginBottom: '12px',
      fontSize: '27px',
      fontWeight: '500'
    })
    $('.thanksAndContinue p').css({
      width: '100%',
      color: 'var(--dark-grayish-violet)',
      textAlign: 'center'
    })
    $('.thanksAndContinue button').css({
    width: '100%',
    height: '54px',
    backgroundColor: 'var(--very-dark-violet)',
    color: 'var(--white)',
    border: 'none',
    borderRadius: '8px',
    marginTop: '44px',
    zIndex: '2'
    })
    $('.continueButton').on('click', function(){
      continueButton()
      $('button').on('mouseover', function(){
        $('button').css({cursor: 'pointer'})
      })
    })
  }

  continueButton()
  
  $('.nameInput').on('keyup', function(){
    changeCardName(this)
  })

  $('.numberInput').on('keyup', function(){
    console.log('ok')
    changeCardNumber(this)
    changeInputNumber(this)
  })
  $('.numberInput').on('keypress', function(){
    changeCardNumber(this)
    changeInputNumber(this)
  })

  $('.monthInput').on('keyup', function(){
      changeExpiryMonth(this)
  })
  $('.monthInput').on('keypress', function(){
    changeExpiryMonth(this)
  })

  $('.yearInput').on('keyup', function(){
    changeExpiryYear(this)
  })
  $('.yearInput').on('keypress', function(){
    changeExpiryYear(this)
  })

  $('.CSVInput').on('keyup', function(){
    changeInputCSV(this)
  })
  $('.CSVInput').on('keypress', function(){
    changeInputCSV(this)
  })

  box('container', 'attribution')

  const attributionContent =
  `
  'Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
  Coded by <a href="#">Your Name Here</a>.'
  `
  $('.attribution').html(attributionContent)


})