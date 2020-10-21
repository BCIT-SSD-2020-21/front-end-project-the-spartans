//jquery keyup() method

//search function with just javascript
//https://stackoverflow.com/questions/14031369/how-to-implement-search-function-using-javascript-or-jquery
/*
HTML:
<div> <input type="text" id="search-criteria"/>
<input type="button" id="search" value="search" onClick="tes();"/> </div>
<fieldset>
<legend>Invite Facebook Friend</legend>

<div class="fbbox">
<img src="images/User.png" class="fbimg" />
<div class="fix"><label for="check-2" class="left"> James </label></div>
<input type="checkbox" name="fb" id="check-1" value="action" class="leftcx"/>
</div>

<div class="fbbox">
<img src="images/User.png" class="fbimg" />
<div class="fix"><label for="check-2" class="left">Alan </label></div>
<input type="checkbox" name="fb" id="check-2" value="comedy" class="leftcx"/>
</div>

<div class="fbbox">
<img src="images/User.png" class="fbimg" />
<div class="fix"><label for="check-3" class="left"> Mathew </label></div>
<input type="checkbox" name="fb" id="check-3" value="epic" class="leftcx"/>
</div>

JQUERY:
OPTION 1:
$("#search-criteria").on("keyup", function() {
     var g = $(this).val().toLowerCase();
     $(".fbbox .fix label").each(function() {
         var s = $(this).text().toLowerCase();
         $(this).closest('.fbbox')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
     });
 });​

  $(document).ready(function(){

   var search = $("#search-criteria");
   var items  = $(".fbbox");

   $("#search").on("click", function(e){

        var v = search.val().toLowerCase();
       if(v == "") { 
           items.show();
           return;
       }
        $.each(items, function(){
            var it = $(this);
            var lb = it.find("label").text().toLowerCase();
            if(lb.indexOf(v) == -1) 
                 it.hide();
        });
    });        
});​

OPTION 2:
var text ="some name";
var search = "some";

if (text.indexOf(search)!=-1) {

    // do someting with found item

}
 */