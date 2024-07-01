export function accordion(parent, className, attrib, num) {
  const accordionCSS = attrib.accordion
  const accordionLineCSS = attrib.accordionLine
  const accordionActiveLineCSS = attrib.accordionActiveLine

  const html = 
  `
  <div class="${className}"></div>
  `
  $(`.${parent}`).append(html)
  const accordion = $(`.${className}`)
 
  for(let i = 0; i< num; i++){
    accordion.append(`<div id="${className}Line${i+1}" class="${className}Line"></div>`)
  }

  const accordionLine = $(`.${className}Line`)

  accordion.css(accordionCSS)
  accordionLine.css(accordionLineCSS)
  
  const defaultActive = $(`#${className}Line${1}`)
  defaultActive.addClass('active')
  $('.active').css(accordionActiveLineCSS)


  accordionLine.each(function(id, line){
    $(line).on('click', function(){
      removeActive(line)
      $(line).addClass('active')
      $('.active').css(accordionActiveLineCSS)
    })
  })

  function removeActive(line){
    accordionLine.each(function(id, elem){
      $(elem).removeClass('active')
      $(elem).css(attrib.accordionLine)
    })
  }

}