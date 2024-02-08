import {switchButton} from './components/switchButton.js'
import {box} from './components/box.js'


$(document).ready(function() {
  const cardsContent = [
    {
    type: 'basic',
    Yearprice: 199.99,
    Monthprice: 19.99,
    capacity: '500 GB',
    users: 2,
    sendUp: 3
    },
    {
    type: 'professional',
    Yearprice: 249.99,
    Monthprice: 24.99,
    capacity: '1 TB',
    users: 5,
    sendUp: 10
    },
    {
    type: 'basic',
    Yearprice: 399.99,
    Monthprice: 39.99,
    capacity: '2 TB',
    users: 10,
    sendUp: 20
    }
  ]

  function princingComponentHeader(){

    const changePrice  = (status) => {
      if (status ===  'active') {
        cardsContent.map((elem, id)=>(
          $(`#card${id} h1`).html(`<span>$</span>${elem.Monthprice}`)
        ))
      } else {
        cardsContent.map((elem, id)=>(
          $(`#card${id} h1`).html(`<span>$</span>${elem.Yearprice}`)
        ))
      }
    }

    const switchComponentBoxUpCSS = {
      display: 'grid',
      placeContent: 'center', 
      fontSize: '22px'
    }
    const switchComponentBoxDownCSS = {
      display: 'flex',
      flexDirection: 'row', 
      alignItems: 'center'
    }

    box('pricing-component-header', 'switch-component-box-up', switchComponentBoxUpCSS)
    $('.switch-component-box-up').html('<h2>Our Pricing</h2>')
    box('pricing-component-header', 'switch-component-box-down', switchComponentBoxDownCSS)
    $('.switch-component-box-down').append('<p>Annually</p>')
    switchButton('switch-component-box-down', changePrice)
    $('.switch-component-box-down').append('<p>Monthly</p>')
  }

  function princingComponentBody(){
    const pricingCards = cardsContent.map((elem, id)=>(
      `
      <div id="card${id}" class="product-card">
        <h3 class="product-type">${elem.type}</h3>
        <h1 class="product-price"><span>$</span>${elem.Yearprice}</h1>
        <hr/>
        <p class="product-max-capacity">${elem.capacity} Storage</p>
        <hr/>
        <p class="product-max-users">${elem.users} Users Allowed</p>
        <hr/>
        <p class="product-max-sendUp">Send up tp ${elem.sendUp} GB</p>
        <hr/>
        <button class="product-button" type="button">LEARN MORE</button>
      <div>
      `
    ))
  
    $('.pricing-component-body').append(pricingCards)
    $('.product-type').css('text-transform', 'capitalize')
    $('#card1').addClass('active')
  }
  
  princingComponentHeader()
  princingComponentBody()
})