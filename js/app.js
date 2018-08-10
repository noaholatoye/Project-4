lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false,
<<<<<<< HEAD
    'maxWidth': 700,
  })


  // Declare variables
var myInput, filter, img, alt, a;
input = document.getElementById('myInput');
filter = input.value.toUpperCase();
image = document.getElementsByTagName('img');
alt = document.querySelectorAll('[alt]');

console.log(image);


// Loop through all list items, and hide those who don't match the search query
input.addEventListener('input', () => {

    for (i = 0; i < image.length; i++) {
        if(image[i].alt.toUpperCase() === input.value.toUpperCase()){
            image[i].style.display = "block";
            console.log("Shown -->", image[i])
        } else if(input.value == ""){
            for (i = 0; i < image.length; i++) {
                image[i].style.display = "block";
            }
        } else{
            image[i].style.display = "none";
            console.log("Hidden -->", image[i])
        }
}});



=======
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
>>>>>>> 051a77e6b75083d8ea3ef2d28844cb1baf6f8ef3
