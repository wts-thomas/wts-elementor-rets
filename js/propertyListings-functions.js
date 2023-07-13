jQuery(document).ready(function($) {
   if ($('.es-listing__meta-area').length > 0) {
       $('.es-listing__meta span b').each(function() {
           var value = $(this).text().trim();
           var formattedValue = parseInt(value).toLocaleString();
           $(this).text(formattedValue);
       });
   }
});