const API = 'https://api.adviceslip.com/advice/'
const button = document.querySelector('.container-quotes-base-button')
let random

function randomNum(){
  random = Math.floor(Math.random() * 220)
}

function callAPI(){
  randomNum()
  d3.json(API + random, function(data){
    console.log(data.slip.advice.length)
    if(data.slip.advice.length <100){
      d3.select(".container-quotes-box-id")
      .text('Advice #' + data.slip.id)
    d3.select(".container-quotes-box-text")
      .text(data.slip.advice)
    } else {
      callAPI()
    }
  })
}

button.addEventListener('click', function(){
  callAPI()
})