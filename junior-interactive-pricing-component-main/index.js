$('.slider').on('input', function(){
  previews($('.slider')[0].value)
  price($('.slider')[0].value)
})

function previews(i){
  const previews = ['10K', '50K', '100K', '500K', '1M']
  $('.pageviews').text(previews[i] + ' Pageviews')
}

function price(i){
  const price = [8, 12, 16, 24, 36]
  if($('.flipswitch-cb')[0].checked){
    $('.price').text('$' + (price[i]*12*0.75).toFixed(2))
  } else {
    $('.price').text('$' + price[i].toFixed(2))
  }
}

$('.flipswitch-cb').on('click', function(){
  if($(this)[0].checked){
    price($('.slider')[0].value)
  } else {
    price($('.slider')[0].value)
  }
})

previews(2)
price(2)

$( '.slider' ).on( 'input', function( ) {
  $( this ).css( 'background', 'linear-gradient(to right, var(--soft-cyan) 0%, var(--soft-cyan) '+(this.value*25) +'%, var(--light-grayish-blue-slider) ' + (this.value*25) + '%, var(--light-grayish-blue-slider) 100%)' );
} );

$('.flipswitch-inner').on('mouseenter', function(){
  $(this).addClass('hover')
})

$('.flipswitch-inner').on('mouseleave', function(){
  $(this).removeClass('hover')
})

