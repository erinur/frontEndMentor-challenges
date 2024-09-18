import {emptyResult, completeResult} from './results-component.js'



const $mortageAmount = document.querySelector('.mortage-amount div')
const $mortageAmountInput = document.querySelector('.mortage-amount div input')

$mortageAmountInput.addEventListener('keyup', function(){
  if($mortageAmountInput.value.search(/[^\d+\,?\d+]/g) !== -1){
    $mortageAmount.style.borderColor = 'red'
  } else {
    $mortageAmount.style.borderColor = 'inherit'
  }
})

$mortageAmountInput.addEventListener('keyup', function(){
  const value = $mortageAmountInput.value.split(',').join('')
  const cache = new Intl.NumberFormat("en-EN").format(Number(value))
  document.querySelector('.mortage-amount div input').value = cache
})

const $mortageTerm = document.querySelector('.mortage-term div')
const $mortageTermInput = document.querySelector('.mortage-term div input')

$mortageTermInput.addEventListener('keyup', function(){
  if($mortageTermInput.value.search(/\D/g) !== -1){
    $mortageTerm.style.borderColor = 'red'
  } else {
    $mortageTerm.style.borderColor = 'inherit'
  }
})

const $mortageInterest = document.querySelector('.interest-rate div')
const $mortageInterestInput = document.querySelector('.interest-rate div input')

$mortageInterestInput.addEventListener('keyup', function(){
  if($mortageInterestInput.value.search(/[^\d+\.?\d+]/g) !== -1){
    $mortageInterest.style.borderColor = 'red'
  } else {
    $mortageInterest.style.borderColor = 'inherit'
  }
})

document.querySelector('#data-result').innerHTML = emptyResult

document.querySelector('.mortage-type').addEventListener('change',function(){
  if(document.querySelector('#mortage-type-repayment').checked === true){
    document.querySelector('.mortage-type-repayment').style.border = '1px solid var(--lime)'
    document.querySelector('.mortage-type-repayment').style.backgroundColor = 'var(--lime-light)'
    document.querySelector('.mortage-type-interest').style.border = '1px solid var(--slate-700)'
    document.querySelector('.mortage-type-interest').style.backgroundColor = 'inherit'
  } else {
    document.querySelector('.mortage-type-interest').style.border = '1px solid var(--lime)'
    document.querySelector('.mortage-type-interest').style.backgroundColor = 'var(--lime-light)'
    document.querySelector('.mortage-type-repayment').style.border = '1px solid var(--slate-700)'
    document.querySelector('.mortage-type-repayment').style.backgroundColor = 'inherit'
  }
})

const $mortageType = [document.querySelector('#mortage-type-repayment'), document.querySelector('#mortage-type-interest')]

const $button = document.querySelector('button')


$button.addEventListener('click', function(){

  const completeForm = 
  {
    $mortageAmount: false,
    $mortageTerm: false,
    $mortageInterest: false,
    $mortageType: false
  }
  let formComplete  = false

    if($mortageAmountInput.value === "" & $mortageAmountInput.value.search(/\D/g) !== -1){
      $mortageAmount.style.borderColor = 'red'
      $mortageAmount.append()
    } else {
      $mortageAmount.style.borderColor = 'inherit'
      completeForm.$mortageAmount = true
    }

    if($mortageTermInput.value === "" & $mortageTermInput.value.search(/\D/g) !== -1){
      $mortageTerm.style.borderColor = 'red'
    } else {
      $mortageTerm.style.borderColor = 'inherit'
      completeForm.$mortageTerm = true
    }

    if($mortageInterestInput.value === "" & $mortageInterestInput.value.search(/[^\d+\.?\d+]/g) !== -1){
      $mortageInterest.style.borderColor = 'red'
    } else {
      $mortageInterest.style.borderColor = 'inherit'
      completeForm.$mortageInterest = true
    }

    if($mortageType.map(elem => elem.checked).includes(true)){
      completeForm.$mortageType = true
    }
    
    formComplete  = (Object.values(completeForm).filter(elem => elem === false).length) === 0

    resultDiv(formComplete)
  })

function resultDiv(formComplete){
  const amount = Number($mortageAmountInput.value.split(',').join(''))
  const term = Number($mortageTermInput.value.split(',').join(''))*12
  const interest = Number($mortageInterestInput.value.split(',').join(''))/(100*12)

  if(document.querySelector('#mortage-type-repayment').checked === true) {
    repayment(formComplete, amount, term, interest)
  }
  if(document.querySelector('#mortage-type-interest').checked === true){
    onlyInterest(formComplete, amount, term, interest)
  }  
}

function repayment(status, p, n, i) {
  if(status === true) {
    const monthlyPayment = p * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1)
    document.querySelector('#data-result').innerHTML = completeResult
    document.querySelector('monthlyPayment').innerHTML = numConvert(monthlyPayment.toFixed(2))
    document.querySelector('totalPayment').innerHTML = numConvert((monthlyPayment * n).toFixed(2))
  } else {
    document.querySelector('#data-result').innerHTML = emptyResult
  }
}

function onlyInterest(status, p, n, i){
  if(status === true) {
    const monthlyPayment = ((n * i)*p)/n
    document.querySelector('#data-result').innerHTML = completeResult
    document.querySelector('monthlyPayment').innerHTML = numConvert(monthlyPayment.toFixed(2))
    document.querySelector('totalPayment').innerHTML = numConvert(Number(p) + Number(monthlyPayment * n))
  } else {
    document.querySelector('#data-result').innerHTML = emptyResult
  }
}

function numConvert(num){
  return new Intl.NumberFormat("en-EN", {style: "currency", currency: "GBP"}).format(num)
}

document.querySelector('.data-entry-clear').addEventListener('click', clear)

function clear (){
  $mortageAmountInput.value = ''
  $mortageAmount.style.borderColor = 'inherit'
  $mortageTermInput.value = ''
  $mortageTerm.style.borderColor = 'inherit'
  $mortageInterestInput.value = ''
  $mortageInterest.style.borderColor = 'inherit'
  document.querySelector('#mortage-type-repayment').checked = false
  document.querySelector('#mortage-type-interest').checked = false
  document.querySelector('.mortage-type-repayment').style.borderColor = 'inherit'
  document.querySelector('.mortage-type-repayment').style.borderColor = 'inherit'
  document.querySelector('.mortage-type-interest').style.borderColor = 'inherit'
  document.querySelector('.mortage-type-repayment').style.backgroundColor = 'inherit'
  document.querySelector('.mortage-type-interest').style.backgroundColor = 'inherit'
  document.querySelector('#data-result').innerHTML = emptyResult
}
