const $bill = document.querySelector('.input-area-bill input')
const $tip = document.querySelectorAll('.tip-percent')
const $people = document.querySelector('.input-area-people input')
const $reset = document.querySelector('.reset-button')

let $tipAmount = document.querySelector('.tip-amount')
let $totalAmount = document.querySelector('.total-amount')

let bill = 0
let tip = 0
let people = 0

$bill.addEventListener('keyup', ()=>{
    bill = Number($bill.value)
    display()
})

$tip.forEach(function(elem){
    if(elem.tagName === "BUTTON"){
      elem.addEventListener('click', ()=>{
        tip = Number(elem.value)
        display()
      })
    } else {
      elem.addEventListener('focusin', ()=>{
        tip = Number(elem.value)
        display()
      })
      elem.addEventListener('keyup', ()=>{
        tip = Number(elem.value)
        display()
      })
    }
})

$people.addEventListener('keyup', ()=>{
  people = Number($people.value)
  display()
})

$reset.addEventListener('click', ()=>{
  bill = 0
  tip = 0
  people = 0
  $bill.value = ""
  $people.value = ""
  $tipAmount.textContent = '$' + tip.toFixed(2)
  $totalAmount.textContent = '$' + bill.toFixed(2)
})

function display(){

  if(people !== 0){
    let tipResult = (bill*tip/100)/people
    let totalResult = (bill + (tipResult)*people)/people
    console.log(tipResult, totalResult)
    $tipAmount.textContent = '$' + tipResult.toFixed(2)
    $totalAmount.textContent = '$' + totalResult.toFixed(2)
    $people.classList.remove("error-active")
    document.querySelector('.input-area-people legend span').style.visibility = "hidden"
  } else {
    $people.classList.add("error-active")
    document.querySelector('.input-area-people legend span').style.visibility = "visible"
  }
}



