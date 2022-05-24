//jquery

var folder = "images/";

$.ajax({
    url : folder,
    success: function (data) {
        $(data).find("a").attr("href", function (i, val) {
            if( val.match(/\.(jpe?g|png|gif)$/) ) {
                $("body").append( "<img src='"+ folder + val +"'>" );
            }
        });
    }
});

(function( $ ){
    $.fn.appendPhotos = function() {
        alert('hello world');
        return this;





    };
})( jQuery );

//$('#my_div').myfunction();
