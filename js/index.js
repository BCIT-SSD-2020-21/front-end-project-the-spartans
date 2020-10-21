Cart = [];

//constructor to create product object with the name, price, img and short description
function product(name, price,img,){
     this.name = name;
     this.price = price;
     this.imgUrl = img;
}

//creation of cart array to hold products
     Cart.push(new product("iphone", 1200,"some img"))
     Cart.push(new product("note20 ultra", 1400, "some other img"))

//when add to car button is pressed on product page, use add cart to grab all info of product and store into new product object and push into cart
$(".add2cart-btn").on("click", function addCart(Cart){
     //will grab info needed for the product object from page
     var name = document.getElementById("product-name").innerHTML;
     var price = document.getElementById("product-price").innerHTML;
     var img = document.getElementById("product-img").src;
     
     //get item from which add to cart button was clicked
     var item = new product(name,price,img);
     Cart.push(item);
     console.log("Item info be: "+item.name+" "+item.price+", "+item.img)
})