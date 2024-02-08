export function switchButton(parent, action) {
  let status = 'inactive'
  
  const html = 
  `
  <div class="switchButton">
    <div class="inner-switchButton"></div>
  </div>
  `
  const root = $(`.${parent}`).append(html)

  const switchButtonCSS = {
    position: 'relative',
    display: 'block',
    width: '56px',
    height: '32px',
    margin: '32px',
    cursor: 'pointer',
    borderRadius: '32px',
    padding: '4px',
    backgroundColor:' #ccc'
  }

  const innerCSS = {
    position: 'absolute',
    top: '4px',
    left: '4px',
    height: '24px',
    width: '24px',
    borderRadius: '50%',
    backgroundColor: 'white'
  }

  const switchButton = $('.switchButton')
  const inner = $('.inner-switchButton')

  switchButton.css(switchButtonCSS)
  inner.css(innerCSS)

  switchButton.click(function(){
    if(status === 'inactive') {
      status = 'active'
      inner.animate({'left': '28px'}, 500)
      action(status)
    } else {
      status = 'inactive'
      inner.animate({'left': '4px'}, 500)
      action(status)
    }
  })
}