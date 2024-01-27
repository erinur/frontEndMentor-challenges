let x=0;

function overShare() {
  if (x===0) {
    document.querySelector('#share-icon-off').style.zIndex = '-1';
    document.querySelector('#share-icon-on').style.zIndex = '2';
    document.querySelector('#share-box').style.zIndex = '1';
    x = x + 1;
  } else {
     x=0;
     document.querySelector('#share-icon-off').style.zIndex = '1';
      document.querySelector('#share-icon-on').style.zIndex = '-1';
      document.querySelector('#share-box').style.zIndex = '-1';
  }
  console.log(x);
}




