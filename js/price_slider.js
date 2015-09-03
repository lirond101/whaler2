     $(document).ready(function() {
          $("#slider").slider({
              range: "min",
              animate: true,
              value:1,
              min: 10,
              max: 1000,
              step: 10,
              slide: function(event, ui) {
                update(1,ui.value); //changed
              }
          });
          update();
          });
          function update(slider,val) {
        //changed. Now, directly take value from ui.value. if not set (initial, will use current value.)
        var $amount = slider == 1?val:$("#amount").val();
               
         $( "#amount" ).val($amount);
         $( "#amount-label" ).text($amount);

         $('#slider a').html('<label>'+$amount+'</label>');
}