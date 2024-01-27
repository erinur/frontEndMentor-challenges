const navigationPart = document.querySelector('#nav-menu')
const navigationBarr = '<ul>\
                          <a href="#">Home</a>\
                          <a href="#">New</a>\
                          <a href="#">Popular</a>\
                          <a href="#">Trending</a>\
                          <a href="#">Categories</a>\
                        </ul>'

const navMenuOpened = ' <img src="./assets/images/icon-menu-close.svg" alt="">\
                        <ul>\
                          <a href="#">Home</a>\
                          <a href="#">New</a>\
                          <a href="#">Popular</a>\
                          <a href="#">Trending</a>\
                          <a href="#">Categories</a>\
                        </ul>'

const navMenuClosed = ' <img src="./assets/images/icon-menu.svg" alt="">'

function navigationMenu() {
  navigationPart.innerHTML = navMenuClosed
  document.querySelector('.opacity').style.visibility = 'hidden'
  navigationPart.onclick = menuState;
  function menuState () {
    if(navigationPart.innerHTML === navMenuClosed) {
      navigationPart.innerHTML = navMenuOpened
      document.querySelector('.opacity').style.visibility = 'visible'
    } else {
      navigationPart.innerHTML = navMenuClosed
      document.querySelector('.opacity').style.visibility = 'hidden'
    }
  }
}

window.onresize = displayBarrOrMenu;
window.onload = displayBarrOrMenu;

function displayBarrOrMenu() {
  let myWidth = window.innerWidth
  if(myWidth < 1080){
    navigationMenu()
  } else {
    navigationPart.innerHTML = navigationBarr
    navigationPart.onclick = navigationBarr;
  }
}







