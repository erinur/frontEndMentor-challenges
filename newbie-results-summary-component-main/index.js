$(document).ready(function(){
  $.getJSON('./data.json', function (json) {
    const id = $('.results')
    const category = $('.result-icon p')
    const icon = $('.result-icon img')
    const score = $('.result-partial')

    id.displayData = function () {
      for(let i=0;i<id.length;i++){
        const j = this[i].attributes.id.nodeValue

        category[i].innerHTML = json[j].category
        icon[i].setAttribute('src', json[j].icon)
        icon[i].setAttribute('alt', '')
        score[i].innerHTML = json[j].score + '<span> / 100</span>'
      }
    };
    id.displayData()
    

  })
})