//constructor to create product object with the name, price, img and short description
function product(name, price,img,){
     this.name = name;
     this.price = price;
     this.img = img;
};

Cart =[
     new product("iphone", 1200, "no img"),
     new product("galaxy s20", 1000, "no img")
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

//calculate total of everything in cart
function calcTotal(){
     var Cart = JSON.parse(localStorage.getItem("Cart"));
     var total = 0;
     for(var i = 0; i < Cart.length; i++){
          total += Cart[i].price;
     }
     return total;
};

//display everything in cart
//https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript
function listCart(){
     var Cart = JSON.parse(localStorage.getItem("Cart"));
     for(var i = 0; i < Cart.length; i++){
          //use cart.imgUrl and cart.price to display and some html to format
          var list = document.getElementById('product-list');
          var entry = document.createElement('li');
          entry.appendChild(document.createTextNode(Cart[i].name));
          list.appendChild(entry);

          var list = document.getElementById('product-price');
          var entry = document.createElement('li');
          entry.appendChild(document.createTextNode(Cart[i].price));
          list.appendChild(entry);
     }
     
     document.getElementById('total').innerHTML = "Total: $" + calcTotal();

};



$(".cart-btn").on("click", listCart());

$("checkout-button").on("click",function(){
     
});
