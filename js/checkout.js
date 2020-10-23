//constructor to create product object with the name, price, img and short description
function product(name, price,img,info){
     this.name = name;
     this.price = price;
     this.imgUrl = img;
     this.info = info;
}

//will grab info needed for the product object from page
var name = document.getElementById("product name");
var price = document.getElementById("product price");
var img = document.getElementById("product img");
var info = document.getElementById("product info");

//creation of cart array to hold productsß
var Cart = [
     //creation of products
     new product("iphone", 1200,"some img", "cool phone"),
     new product("note20 ultra", 1400, "some other img", "big phone")
];

//when add to car button is pressed on product page, use add cart to grab all info of product and store into new product object and push into cart
$("add-to-cart-button").on("click", function addCart(Cart){
     //get item from which add to cart button was clicked
     var item = new product("note20", 1000, "some other img", "shit phone");
     Cart.push(item);
})

//display everything in cart
function listCart(Cart){
     for(var i = 0; i < Cart.length(); i++){
          //use cart.imgUrl and cart.price to display and some html to format

     }
}

//calculate total of everything in cart
function calcTotal(Cart){
     var total = 0;
     for(var i = 0; i < Cart.length(); i++){
          total += Cart.price[i];
     }
     return total;
}

$("checkout-button").on("click",function(){
     
});
