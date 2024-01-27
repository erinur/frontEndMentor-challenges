const accordion_box = document.querySelectorAll(".accordion-box")

const img = document.querySelectorAll(".accordion-box img")
img.forEach(function(elem){
  elem.src = './assets/images/icon-plus.svg'
})

document.querySelector('.active img').src = './assets/images/icon-minus.svg'

accordion_box.forEach(function($panel){
  $panel.addEventListener(
    'click', function(){
      removeActiveClasses()
      $panel.classList.add('active')
      $panel.children[0].children[1].src = './assets/images/icon-minus.svg'
    }
  )
})

function removeActiveClasses(){
  accordion_box.forEach(function($panel){
    $panel.classList.remove('active')
    $panel.children[0].children[1].src = './assets/images/icon-plus.svg'
  })
}