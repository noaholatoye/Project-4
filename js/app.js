
// Call the plugin
    lightbox.option({
      'resizeDuration': 700,
      'wrapAround': true,
      'showImageNumberLabel': false,
      'alwaysShowNavOnTouchDevices': true,
      'maxWidth': 200,


    });



// Add caption to image 

var image = document.getElementsByTagName('img')

image.addEventListener(‘click’, function(){

  const atr = $(‘img’);
  let div = $(‘<div>’).addClass(‘desc’);
  $(‘.gallery’).append(div);
  const $desc = $(‘.desc’);

  for (var i = 0; i < atr.length; i++) {
      let getAttr = atr[i].getAttribute(‘atr’);
      $($desc[i]).html(getAttr);
  }
});



document.addEventListener('click', function myFunction() {
//     // Declare variables
    var myInput, filter, img, alt, a;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("alt");
    li = ul.getElementsByTagName('a');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < a.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
});