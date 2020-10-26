//constructor to create product object with the name, price, img and short description
function product(name, price, img, itemNum) {
     this.name = name;
     this.price = price;
     this.img = img;
     this.itemNum = itemNum;
};

function initCart() {
     var Cart = [];
     var test = localStorage.getItem("Cart");

     if (test !== null) {
          Cart = JSON.parse(localStorage.getItem("Cart"));
     } else {
          localStorage.setItem("Cart", JSON.stringify(Cart));
     }
}

function clearCart() {
     //remove all items from cart
     localStorage.removeItem("Cart");
     location.reload();
}

//when add to car button is pressed on product page, use add cart to grab all info of product and store into new product object and push into cart
$(".add2cart-btn").on("click", function () {
     initCart();

     var Cart = JSON.parse(localStorage.getItem("Cart"));
     var count = Cart.length;
     //will grab info needed for the product object from page
     var name = document.getElementById("product-name").innerHTML;
     var temp = document.getElementById("product-price").dataset.price;
     var img = document.getElementById("product-img").src;
     var price = parseFloat(temp);

     //get item from which add to cart button was clicked
     var item = new product(name, price, img, count);
     Cart.push(item);
     console.log("added item to list")
     localStorage.setItem("Cart", JSON.stringify(Cart));

});

//display everything in cart
//https://stackoverflow.com/questions/17773938/add-a-list-item-through-javascript
function listCart() {
     var Cart = JSON.parse(localStorage.getItem("Cart"));
     if (!Cart) {
          document.getElementById('total').innerHTML = "no item in cart";
          //hide or erase checkout button if no items
     } else {
          var total = 0;

          for (var i = 0; i < Cart.length; i++) {
               total += Cart[i].price;
               var list = document.getElementById('product-list');
               var entry = document.createElement('dt');
               entry.appendChild(document.createTextNode(Cart[i].name));
               list.appendChild(entry);

               var removeButton = document.createElement("button");
               removeButton.innerHTML = "Remove Item";
               var list = document.getElementById('product-price');
               var entry = document.createElement('dt');
               entry.appendChild(document.createTextNode(Cart[i].price.toFixed(2)));
               list.appendChild(entry);
               list.appendChild(removeButton);

               $("button").addClass("remove-btn");
               $("button").addClass("remove-btn" + i);
               for (j = i - 1; j >= 0; j--) {
                    $(".remove-btn" + j).removeClass("remove-btn" + i);
               }
               $(".checkout-button").removeClass("remove-btn");
               $(".clear-button").removeClass("remove-btn");
               $(".checkout-button").removeClass("remove-btn" + i);
               $(".clear-button").removeClass("remove-btn" + i);

               $(".remove-btn" + i).on("click", function (i) {
                    Cart.splice(i, 1);
                    localStorage.setItem("Cart", JSON.stringify(Cart));
                    location.reload();
               });
          }
          document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
     }
};
//validates credit card input
function validateCard(cardInput) {
     var re = /^(?:4[0-9]{12}(?:[0-9]{3})?| (?:5[1-5][0-9]{2} | 222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12} | 3[47][0-9]{13} | 3(?:0[0-5]|[68][0-9])[0-9]{11} | 6(?:011|5[0-9]{2})[0-9]{12} | (?:2131|1800|35\d{3})\d{11})$/;
     var OK = re.exec(cardInput);
     if (!OK) {
          alert(cardInput + "isn't a valid credit card number!");
          localStorage.removeItem("Customer");
     } else {
          location.href = "confirmation.html";
     }
}

//uses validateCard() and creates customer to be used in confirmation page
$(".checkout-button").on("click", function () {
     var email = document.getElementById('customer-email').value;
     var name = document.getElementById('customer-firstName').value + " " + document.getElementById('customer-lastName').value;
     var cardInput = document.getElementById('customer-creditCard').value;
     var address = document.getElementById('customer-address').value + " " + document.getElementById('customer-city').value + " " + document.getElementById('customer-province').value + " " + document.getElementById('customer-country').value + " " + document.getElementById('customer-pc').value;

     var CheckoutCustomer = {
          email: email,
          name: name,
          address: address
     };
     
     localStorage.setItem("Customer", JSON.stringify(CheckoutCustomer));
     validateCard(cardInput);
});

function showReceipt() {
     var Cart = JSON.parse(localStorage.getItem("Cart"));
     var Customer = JSON.parse(localStorage.getItem("Customer"));
     if (!Cart) {
          document.getElementById('total').innerHTML = "no item in cart";
     } else {

          document.getElementById("customer-name").innerHTML = Customer.name;
          document.getElementById("customer-email").innerHTML = Customer.email;
          document.getElementById("customer-address").innerHTML = Customer.address;

          var total = 0;

          for (var i = 0; i < Cart.length; i++) {
               total += Cart[i].price;
               //use cart.img and cart.price to display and some html to format
               var productList = document.getElementById('product-list');
               var productEntry = document.createElement('dt');
               productEntry.appendChild(document.createTextNode(Cart[i].name));
               productList.appendChild(productEntry);

               var priceList = document.getElementById('product-price');
               var priceEntry = document.createElement('dt');
               priceEntry.appendChild(document.createTextNode(Cart[i].price.toFixed(2)));
               priceList.appendChild(priceEntry);
          }
          document.getElementById('total').innerHTML = "Total: $" + total.toFixed(2);
     }
};

$(".startover-btn").on("click",function(){
     clearCart();
     localStorage.removeItem("Customer");
     location.href="index.html";

})