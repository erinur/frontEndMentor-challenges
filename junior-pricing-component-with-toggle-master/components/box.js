export function box(parent, className, attrib) {
  
  const html = 
  `
  <div class="${className}"></div>
  `
  const root = $(`.${parent}`).append(html)

  const boxCSS = attrib

  const box = $(`.${className}`)
  box.css(boxCSS)
}