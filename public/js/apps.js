var apiKey = 'nntbe78g2yfwq7wcwbzgpm2w';

$( document ).ready( function () {

  // button search and populates image block with search text
  $( '#searchBtn' ).click( function () {
    var textInput = $( '#input' ).val();

    // AJAX request to gettyimages api
    $.ajax('https://api.gettyimages.com/v3/search/images?phrase=' + textInput, {
      headers : {
        'Api-Key': apiKey,
      },
      method : 'GET'
    }).done( function( data ) {
      console.log(data);

      var images = data.images;

      //append each images data
      images.forEach(function(img){

        var imgUri = img.display_sizes[0].uri;

        //creating img script for each photo url
        var contentBlock = $( '<img>', {
          src : imgUri,
          class : 'contentImg'
        });

        $( '.images' ).append( contentBlock );

      }); // end forEach
    }); // end AJAX
  }); // end #searchBtn.click()
}); // end .ready