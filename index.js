$(".card").on("click",function(){
     //what happens when we click
});

$(".card").on("mouseEnter", function(){
     //what happens when the mouse goes on top of said object
});

$(".card").on("mouseOut",function(){
     //undo what happens when mouse goes on top of said object
});

function product(name, price,img,info){
     this.name = name;
     this.price = price;
     this.imgUrl = img;
     this.info = info;
}
//grabbing img from html look up image object for more info
//https://stackoverflow.com/questions/38003222/javascript-adding-images-to-objects-via-object-literal-notation

var x = document.getElementById("myImg");

var Cart = [
     new product("iphone", 1200,"some img", "cool phone"),
     new product("note20 ultra", 1400, "some other img", "big phone")
];

function addCart(Cart){
     //get item from which add to cart button was clicked
     var item = new product("note20", 1000, "some other img", "shit phone");
     Cart.push(item);
}

function listCart(Cart){
     for(var i = 0; i < Cart.length(); i++){
          //use cart.imgUrl and cart.price to display and some html to format
     }
}

function calcTotal(Cart){
     var total = 0;
     for(var i = 0; i < Cart.length(); i++){
          total += Cart.price[i];
     }
     return total;
}


$("checkout button").on("click",function(){
     
});

$("search button").on("click",function(){

});

$("login button").on("click",function(){

});

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