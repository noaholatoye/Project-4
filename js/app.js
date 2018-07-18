
// Call the plugin
    lightbox.option({
      'resizeDuration': 200,
      'wrapAround': true,
      'showImageNumberLabel': false,
      'alwaysShowNavOnTouchDevices': true,
      'maxWidth': 200,


    });

    // Embed tittle to image 

    const atr = $('img');
    let div = $('<div>').addClass('desc');
    $('.gallery').append(div);
    const $desc = $('.desc');

    for (var i = 0; i < atr.length; i++) {
    	let getAttr = atr[i].getAttribute('atr');
    	$($desc[i]).html(getAttr);
    }



// const atr = $('img');
// let div = $("<div>").addClass('olo');

//   $('.gallery').append(div); 

// const $text = $('.olo');   

//   for(let i = 0; i < atr.length; i++) {
//     let getAtr = atr[i].getAttribute('alt');
//       $($text[i]).html(getAtr);
//     }


function myFunction() {
    // Declare variables
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
}