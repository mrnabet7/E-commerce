let productCounter = 0;
let cartitems;
let indexhtml;
// let cartison = 0;
let itemsCollection = []; 
let itemCatagory = [];
const archiveHtml = '<div id="latestproducts"> <h4>Latest products</h4> <div id="grid_section"> </div> </div>';

function loadProducts(catagory){
    let string;
    switch(catagory){
        case 'Home':
            for(var i = 1; i <= 20; i++){
                string += '<div class="product_card"> <img ' + 'src="assets/pro/Electronics/' + i + 'E.jpg' + '" width="261px" height="261px" alt="product"> <div class="product_card_name">' + i + '</div> <div class="product_card_review"> <div class="rating"> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> </div> </div> <div class="product_card_price">' + 74*i + ' ETB </div> <button class="add_to_cart" onclick="addtoCart(' + i + ', 1);">Add to cart</button></div>';
                // string = ""; 
            }
            document.getElementById("grid_section").innerHTML = string;
            break;
        case 'Electronics':
            for(var i = 1; i <= 20; i++){
                string += '<div class="product_card"> <img ' + 'src="assets/pro/Electronics/' + i + 'E.jpg' + '" width="261px" height="261px" alt="product"> <div class="product_card_name">' + i + '</div> <div class="product_card_review"> <div class="rating"> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> </div> </div> <div class="product_card_price">' + 74*i + ' ETB </div> <button class="add_to_cart" onclick="addtoCart(' + i + ', 1);">Add to cart</button></div>';
                // string = ""; 
            }
            document.getElementById("grid_section").innerHTML = string;
            break;
        case 'Fashion':
            for(var i = 1; i <= 20; i++){
                string += '<div class="product_card"> <img ' + 'src="assets/pro/Fashion/' + i + 'F.jpg' + '" width="261px" height="261px" alt="product"> <div class="product_card_name">' + i + '</div> <div class="product_card_review"> <div class="rating"> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> </div> </div> <div class="product_card_price">' + 74*i + ' ETB </div> <button class="add_to_cart" onclick="addtoCart(' + i + ', 2);">Add to cart</button></div>';
                // document.getElementById("grid_section").innerHTML += string;
                // string = ""; 
            }
            document.getElementById("grid_section").innerHTML = string;
            string = "";
            break;
        case 'Books':
            for(var i = 1; i <= 20; i++){
                string += '<div class="product_card"> <img ' + 'src="assets/pro/Books/' + i + 'B.jpg' + '" width="261px" height="261px" alt="product"> <div class="product_card_name">' + i + '</div> <div class="product_card_review"> <div class="rating"> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> </div> </div> <div class="product_card_price">' + 74*i + ' ETB </div> <button class="add_to_cart" onclick="addtoCart(' + i + ', 3);">Add to cart</button></div>';
                // document.getElementById("grid_section").innerHTML += string;
                // string = ""; 
            }
            document.getElementById("grid_section").innerHTML = string;
            break;
        case 'Music instruments':
            break;
        case 'Sports':
            for(var i = 1; i <= 20; i++){
                string += '<div class="product_card"> <img ' + 'src="assets/pro/Sports/' + i + 'S.jpg' + '" width="261px" height="261px" alt="product"> <div class="product_card_name">' + i + '</div> <div class="product_card_review"> <div class="rating"> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> <span></spa><img src="assets/icons/starIcon.png" width="40px" height="40px" alt="1"></span> </div> </div> <div class="product_card_price">' + 74*i + ' ETB </div> <button class="add_to_cart" onclick="addtoCart(' + i + ', 5);">Add to cart</button></div>';
                // document.getElementById("grid_section").innerHTML += string;
                // string = ""; 
            }
            document.getElementById("grid_section").innerHTML = string;
            break;
        case 'Auto parts & Accessories':
            break;
        case 'Insdustrial equipment':
            break;  
        case 'Collectibles & Art':
            break; 
        default:
            break;  
    }
}

function addtoCart(num, cata){
    document.getElementById("productCounter").textContent = ++productCounter;
    itemsCollection.push(num);
    let catagory;

    switch(cata){
        case 1:
            catagory = "Electronics";
            break;
        case 2:
            catagory = "Fashion";
            break;
        case 3:
            catagory = "Books";
            break;
        case 4:
            break;
        case 5:
           catagory = "Sports";
           break;
        default:
            break;
    }
    itemCatagory.push(catagory.charAt(0));
    cartitems += '<div class="cart_section"> <div class="cart_card"> <img src="assets/pro/' + catagory + '/' + num + catagory.charAt(0) + '.jpg' + '" width="200px" height="200px" alt="product"> <div class="product_cart_name">' + num + '</div> <div class="product_card_price">' + 74*num + ' ETB</div> <button id="cartBtn" onclick="deleteCartItem(' + '\'' + catagory.charAt(0) + '\'' + ');"></button> </div> </div>';    
}

function cartBtnOnclick(){
    if(productCounter <= 0){
        alert("Empty cart!");
        loadCatagory('Home');
    }else{
        let price = 0;
        for(let i = 0; i < itemsCollection.length; i++){
            price += 74 * itemsCollection[i]; 
        }
        document.getElementById("main_dashboard").innerHTML = '<div id="the_main_div"> <div> <h4>Total Price</h4><h4>' + price + ' ETB</h4> <button id="checkout">Proceed To Checkout</button> </div> <div> <h2>Shopping Cart</h2> <div id="cartitem_list_card">' + cartitems + '</div> </div> </div>';
    }
}

function loadCatagory(catagory){
    switch(catagory){
        case 'Home':
            document.getElementById('main_dashboard').innerHTML = archiveHtml;
            loadProducts('Home');
            break;
        case 'Electronics':
            document.getElementById('main_dashboard').innerHTML = archiveHtml;
            loadProducts('Electronics');
            break;
        case 'Fashion':
            document.getElementById('main_dashboard').innerHTML = archiveHtml;
            loadProducts('Fashion');
            break;
        case 'Books':
            document.getElementById('main_dashboard').innerHTML = archiveHtml;
            loadProducts('Books');
            break;
        case 'Music instruments':
            loadProducts('Music instruments');
            break;
        case 'Sports':
            document.getElementById('main_dashboard').innerHTML = archiveHtml;
            loadProducts('Sports');
            break;
        case 'Auto parts & Accessories':
            loadProducts('Auto parts & Accessories');
            break;
        case 'Insdustrial equipment':
            loadProducts('Insdustrial equipment');
            break;
        case 'Collectibles & Art':
            loadProducts('Collectibles & Art');
            break; 
        default:
            break;  
    }
}

function deleteCartItem(cat){
    document.getElementById("productCounter").textContent = --productCounter;
    let indexofdeleteitem = itemCatagory.indexOf(cat);
    itemsCollection.splice(indexofdeleteitem, 1);
    itemCatagory.splice(indexofdeleteitem, 1);
    let j = 0;
    let k;
    cartitems = "";

    for(let i = 0; i < itemsCollection.length; i++){
        j = itemsCollection[i];
        k = whatCAT(itemCatagory[i]);
        cartitems += '<div class="cart_section"> <div class="cart_card"> <img src="assets/pro/' + k + '/' + j + k.charAt(0) + '.jpg " width="200px" height="200px" alt="product"> <div class="product_cart_name">' + cat + '</div> <div class="product_card_price">' + 74*j + ' ETB</div> <button id="cartBtn" onclick="deleteCartItem(' + '\'' + itemCatagory[i] + '\'' + ')"></button> </div> </div>';
    }
    cartBtnOnclick();
}


function whatCAT(num){
    switch(num){
        case 'E':
            catagory = "Electronics";
            return catagory;
            break;
        case 'F':
            catagory = "Fashion";
            return catagory;
            break;
        case 'B':
            catagory = "Books";
            return catagory;
            break;
        case 4:
            break;
        case 'S':
           catagory = "Sports";
           return catagory;
           break;
        default:
            break;
    }
}
// Cart card
{/* <div class="cart_section">
                <div class="cart_card">
                    <img width="280px" height="280px" alt="product">
                    <div class="product_cart_name"> </div>
                    <div class="product_card_price"></div> 
                    <button id="cartBtn" onclic="delCart_item()"></button>
                </div> 
            </div> */}

// Product card
{/* <div class="grid_section">
                <div class="product_card">
                    <img width="280px" height="280px" alt="product">
                    <div class="product_card_name"> </div>
                    <div class="product_card_review">
                        <div class="rating">
                            <spa></spa><img width="20px" height="20px" alt="1"></span>
                            <span>
                                <img width="20px" height="20px" alt="1">
                            </span>
                            <span>
                                <img width="20px" height="20px" alt="1">
                            </span>
                            <span>
                                <img width="20px" height="20px" alt="1">
                            </span>
                            <span>
                                <img width="20px" height="20px" alt="1">
                            </span>
                        </div> </div> <div class="product_card_price"></div> </div> </div> */}
