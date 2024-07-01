export function box(parent, className) {
  
  const html = 
  `
  <div class="${className}"></div>
  `
  const root = $(`.${parent}`).append(html)

  const box = $(`.${className}`)
}