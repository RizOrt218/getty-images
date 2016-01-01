var apiKey = 'nntbe78g2yfwq7wcwbzgpm2w';

$( document ).ready( function () {

  $( '#searchBtn' ).click( function () {
    var textInput = $( '#input' ).val();

    $.ajax('https://api.gettyimages.com/v3/search/images?phrase=' + textInput, {
      headers : {
        'Api-Key': apiKey,
      },
      method : 'GET'
    }).done( function( data ) {
      console.log(data);

      var images = data.images;

      images.forEach(function(img){

        var imgUri = img.display_sizes[0].uri;

        var contentBlock = $( '<img>', {
          src : imgUri,
          class : 'contentImg'
        });

        $( '.container' ).append( contentBlock );

      }); // end forEach
    }); // end AJAX
  }); // end #searchBtn.click()
}); // end .ready