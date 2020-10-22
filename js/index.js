//constructor to create product object with the name, price, img and short description
function product(name, price,img,){
     this.name = name;
     this.price = price;
     this.img = img;
};

Cart =[
];

localStorage.setItem("Cart",JSON.stringify(Cart));

//when add to car button is pressed on product page, use add cart to grab all info of product and store into new product object and push into cart
$(".add2cart-btn").on("click", function addCart(){
     var Cart = JSON.parse(localStorage.getItem("Cart"));
     //will grab info needed for the product object from page
     var name = document.getElementById("product-name").innerHTML;
     var price = document.getElementById("product-price").innerHTML;
     var img = document.getElementById("product-img").src;
     //get item from which add to cart button was clicked
     var item = new product(name,price,img);
     Cart.push(item);
     localStorage.setItem("Cart",JSON.stringify(Cart));
});

//display everything in cart
function listCart(Cart){
     for(var i = 0; i < Cart.length(); i++){
          //use cart.imgUrl and cart.price to display and some html to format

     }
};

//calculate total of everything in cart
function calcTotal(Cart){
     var total = 0;
     for(var i = 0; i < Cart.length(); i++){
          total += Cart.price[i];
     }
     return total;
};

$("checkout-button").on("click",function(){
     
});
