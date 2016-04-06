var apiKey = 'nntbe78g2yfwq7wcwbzgpm2w';

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

      var images = data.images;

      //append each images data
      images.forEach(function(data){

        var imgUri = data.display_sizes[0].uri;
        var caption = data.caption;
        var title = data.title;

        // console.log("CAPTION", caption);
        // console.log("TITLE", title);

        //creating img script for each photo url
        var contentBlock = $( '<img>', {
          src : imgUri,
          class : 'contentImg',
          href : imgUri
        });

        var titleContent = $('<p/>', {
          class : 'title'
        }).append( title );

        var captionCont = $('<p/>', {
          class : 'caption'
        }).append( caption );

        var galleryItem = $('<div/>', {
          class : 'galleryItem'
        }).append(contentBlock, titleContent, captionCont);

        $( '.containerImg' ).append( galleryItem );

      }); // end forEach
    }); // end AJAX
  }); // end #searchBtn.click()
