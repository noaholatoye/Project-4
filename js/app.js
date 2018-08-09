lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'maxWidth': 1000,
  })



  document.addEventListener('click', function myFunction() {
    // Declare variables
            var myInput, filter, img, alt, a;
            input = document.getElementById('myInput');
            filter = input.value.toUpperCase();
            alt = document.getElementByTagName("alt");
            li = document.getElementsByTagName('a');
        
            // Loop through all list items, and hide those who don't match the search query
            for (i = 0; i < a.length; i++) {
                a = li[i].getElementsByTagName("li")[0];
                if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
                } else {
                    a[i].style.display = "none";
                }
            }
        })
