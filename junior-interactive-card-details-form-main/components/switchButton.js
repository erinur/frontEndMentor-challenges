export function switchButton(parent, className, action, attrib) {
  let status = 'inactive'
  
  const html = 
  `
  <div class="${className}">
    <div class="${className}-switchButton"></div>
  </div>
  `
  const root = $(`.${parent}`).append(html)

  const switchButtonCSS = attrib.switchButton

  const innerCSS = attrib.innerSwitchButton

  const switchButton = $(`.${className}`)
  const inner = $(`.${className}-switchButton`)

  switchButton.css(switchButtonCSS)
  inner.css(innerCSS)

  switchButton.click(function(){
    if(status === 'inactive') {
      status = 'active'
      inner.animate({'left': attrib.traslation}, 500)
      action(status)
    } else {
      status = 'inactive'
      inner.animate({'left': '4px'}, 500)
      action(status)
    }
  })
}