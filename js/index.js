//constructor to create product object with the name, price, img and short description
function product(name, price,img,itemNum){
     this.name = name;
     this.price = price;
     this.img = img;
     this.itemNum = itemNum;
};

function initCart(){
     var Cart=[];
     var test =localStorage.getItem("Cart"); 

     if(test !== null){
          Cart = JSON.parse(localStorage.getItem("Cart")); 
     }else{
          localStorage.setItem("Cart",JSON.stringify(Cart));
     }
}

function clearCart(){
     //remove all items from cart
     localStorage.removeItem("Cart");
     location.reload();
}

//when add to car button is pressed on product page, use add cart to grab all info of product and store into new product object and push into cart
$(".add2cart-btn").on("click", function(){
     initCart();

     var Cart = JSON.parse(localStorage.getItem("Cart"));
     var count = Cart.length;
     //will grab info needed for the product object from page
     var name = document.getElementById("product-name").innerHTML;
     var temp = document.getElementById("product-price").dataset.price;
     var img = document.getElementById("product-img").src;
     var price = parseFloat(temp);

     //get item from which add to cart button was clicked
     var item = new product(name,price,img,count);
     Cart.push(item);
     console.log("added item to list")
     localStorage.setItem("Cart",JSON.stringify(Cart));
     
});

//display everything in cart
//https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript
function listCart(){
     var Cart = JSON.parse(localStorage.getItem("Cart"));
     if (!Cart){
          document.getElementById('total').innerHTML =  "no item in cart";
     }else{
          var total = 0;
          
          for(var i = 0; i < Cart.length; i++){
               total += Cart[i].price;
               //use cart.img and cart.price to display and some html to format
               var list = document.getElementById('product-list');
               var entry = document.createElement('dt');
               entry.appendChild(document.createTextNode(Cart[i].name));
               list.appendChild(entry);

               var removeButton = document.createElement("button");
               removeButton.innerHTML= "Remove Item";
               var list = document.getElementById('product-price');
               var entry = document.createElement('dt');
               entry.appendChild(document.createTextNode(Cart[i].price.toFixed(2)));
               list.appendChild(entry);
               list.appendChild(removeButton);

               $("button").addClass("remove-btn"+i);
               for(j=i-1;j>=0;j--){
                    $(".remove-btn"+j).removeClass("remove-btn"+i);
               }
               $(".checkout-button").removeClass("remove-btn"+i);
               $(".clear-button").removeClass("remove-btn"+i);

               $(".remove-btn"+i).on("click",function(i){
                    Cart.splice(i,1);
                    localStorage.setItem("Cart",JSON.stringify(Cart));
                    location.reload();
               });
          }
          document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
     }
};


$(".checkout-button").on("click",function(){
     
});
