let iphoneShow = document.getElementById('iphonecont').getElementsByClassName('iphonebtn');
// let showCont1 = document.getElementById('cont');

let iphoneimg = document.getElementById('iphonedsimg');
let description = document.getElementById('description');
let units = document.getElementById('units');


            let img1 = document.getElementById('smconiimg1');
            let img2 = document.getElementById('smconiimg2');
            let img3 = document.getElementById('smconiimg3');
            let img4 = document.getElementById('smconiimg4');
let didd = document.getElementById('didd');

function showLight(a, b, c, d, e, f, g, h) {
    document.getElementById('proDisc').style.visibility = 'visible'
    //  showCont1.style.display = 'block';
     description.innerHTML = b;

    //  units.innerHTML = `${b} units letf`;

    let basicDis = document.getElementById('basicDis');
    
    let ab = `<ul>
                <li>Brand: ${a}</li>
                <li>Model: ${b}</li>
                <li>Type: ${c}</li>
                <li>RAM: ${d}</li>
                <li>ROM: ${e}</li>
                <li>Oprating system: ${f}</li>
                <li>Screen: ${g}</li>
               </ul>`;
               basicDis.innerHTML = ab;

               let fimgg1 = document.getElementById('fimgg1');
               let fimgg2 = document.getElementById('fimgg2');
               let fimgg3 = document.getElementById('fimgg3');
               let fimgg4 = document.getElementById('fimgg4');



            img1.setAttribute('src', fimgg1.getAttribute('value'));
            img2.setAttribute('src', fimgg2.getAttribute('value'));
            img3.setAttribute('src', fimgg3.getAttribute('value'));
            img4.setAttribute('src', fimgg4.getAttribute('value'));

            img1.setAttribute('value', fimgg1.getAttribute('value'));
            img2.setAttribute('value', fimgg2.getAttribute('value'));
            img3.setAttribute('value', fimgg3.getAttribute('value'));
            img4.setAttribute('value', fimgg4.getAttribute('value'));



            // console.log(String(h))


    // if (b <= 10) {
    //     units.style.color = '#fc5305'
    // }



}
img1.addEventListener('click', function (params) {

    didd.setAttribute('src', img1.getAttribute('value'))
    
    
})
img2.addEventListener('click', function (params) {
    
    didd.setAttribute('src', img2.getAttribute('value'))
    
    
})
img3.addEventListener('click', function (params) {
    
    didd.setAttribute('src', img3.getAttribute('value'))
    
    
})
img4.addEventListener('click', function (params) {
    
    didd.setAttribute('src', img4.getAttribute('value'))
    
    
})


function showCart(params) {
    document.getElementById('cart').style.visibility = 'visible';
    document.getElementById('cart').style.transform =  'translateY(10%)';
    document.getElementById('cart').style.transition = '1s';
    document.getElementById('cancleAlll').style.visibility = 'visible'

    // document.getElementById('cart').className = 'cartM'
}

function cancleCart(params) {
     document.getElementById('cart').style.visibility = 'hidden'
      document.getElementById('cart').style.transform =  'translateY(100%)';
    document.getElementById('cancleAlll').style.visibility = 'hidden'

    // document.getElementById('cart').style.transition = 'none';

}


document.getElementById('cancle').addEventListener('click', function name(params) {
    document.getElementById('proDisc').style.visibility = 'hidden'
});
let iphonebtn = document.getElementById('iphonedisimg')
let cartmini = document.getElementById('cartmini');
let addtoglespan = document.getElementById('addtogle');
let theDis = document.getElementById('theDisplay')

// function show(params) {
//     addtoglespan.style.visibility = 'visible'
// }
// function addtogle(p, f) {
// //    addtoglespan.innerHTML = q++;
//    let a = "<img>"
//    a.setAttribute('src',  )
//    theDis.appendChild(a)
// }
let theBtn = $(".mm");
let theprice = theBtn.prev();
let thetitle = theprice.prev();
let thediv = thetitle.prev();
let theImg = thediv.children();
let theDisplay = $(".theDisplay");
let theDivImg = $(".theDivImg");


theBtn.on('click', function (a) {
    let b  = theImg.getAttribute('src');
    theDivImg.setAttribute('src', b);
});




$(".iphonedisImmg").on("click", function (p) {
 let a = p.target;
 let b = a.getAttribute("src");
 let c = $(".disImmg");
 let f = c.attr("src", b);



//  console.log()
});






// $(".mm").on('click', function (u) {
    
// })


// add to cart
//  const cart = {};
//         function addToCart(productName, productPrice) {
 

 

//             if (cart[productName]) {
//                 cart[productName].quantity += 1;
//                 cart[productName].totalPrice += productPrice;
//             } else {
//                 cart[productName] = {
//                     quantity: 1,
//                     totalPrice: productPrice

//                 };  

                
//             }
//             console.log()
// //  let evaluateNo = eval( cart['iPhone 15', 'iPhone 1', 'iPhone x'].totalPrice);
// // document.getElementById('checkbtn').innerHTML = `CHECKOUT $${evaluateNo}`
// // console.log(cart)
//            updateCartDisplay()
//         }
//         function updateCartDisplay() {
//             const cartList = document.getElementById('cartmini');
//             cartList.innerHTML = ' ';
//             for (let product in cart) {
//                 const listItem = document.createElement('li');
//                 listItem.innerText = `${product} - Quantity: ${cart[product].quantity} - Total Price: $${cart[product].totalPrice.toFixed(2)}`;
//                 cartList.appendChild(listItem);
//             // return (cart[product].totalPrice.toFixed(2));


              

//                 // let addNo = document.createElement('span');
//                 // let disNo = document.createElement('span');
//                 // let subNo = document.createElement('span');
//                 // disNo.innerHTML = `${cart[product].quantity}`
//                 // addNo.innerHTML = '+'
//                 // subNo.innerHTML = '-'

               
//                 // listItem.appendChild(addNo)
//                 //  listItem.appendChild(disNo);
//                 // listItem.appendChild(subNo)

            
//             }
//         }


          // Cart state
        let cart = [];

        // Add item to cart
            // let q = 1;

        function addToCart(id, name, price) {
        // addtoglespan.innerHTML = q++;

  

            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity++;
        // addtoglespan.innerHTML = q--;

            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
     renderCart();
        }

        // Change quantity (increment/decrement)
        function changeQty(id, delta) {
            const item = cart.find(item => item.id === id);
            if (item) {
                item.quantity += delta;
                if (item.quantity <= 0) {
                    cart = cart.filter(item => item.id !== id);
                }
            }
            renderCart();
        }

        // Update the cart display and total price
            const totalPriceContainer = document.getElementById('checkbtn');
        function renderCart() {
            const cartItemsContainer = document.getElementById('cartmini');
            cartItemsContainer.innerHTML = '';
            
            let total = 0;
            let total2 = 0;
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Cart is empty</p>';
            } else {
                cart.forEach(item => {
                    total += item.price * item.quantity;
                    total2 += item.quantity;
                    cartItemsContainer.innerHTML += `
                        <div class="cart-item">
                            <span class="productName">${item.name} ($${item.price})</span>
                            <div class="thebtn">
                                <span class="qty-btn" onclick="changeQty(${item.id}, -1)">-</span>
                                <span id="togleshw">${item.quantity}</span>
                                <span class="qty-btn" onclick="changeQty(${item.id}, 1)">+</span>
                            </div>
                        </div>
                    `;
                    // console.log(total)   
                    if (total2) {
  setTimeout(() => {
      addtoglespan.style.visibility = 'visible'
  }, 100);
  setInterval(() => {
 addtoglespan.style.visibility = 'hidden'
  }, 1500);
   
 }
                       addtoglespan.innerHTML = total2;
                       

                }
            );
            }
            // totalPriceContainer.innerText = `Checkout: $${total.toFixed(2)}`;
        }

function canclecheck(params) {
    document.getElementById('check-box2').style.visibility = 'hidden';
    document.getElementById('ship-Delivery').style.visibility = 'hidden';
    document.getElementById('Pickup-Delivery').style.visibility = 'hidden';


    // document.getElementById('ondel').style.visibility = 'hidden';

}
function buyNow(a, b, c) {
    document.getElementById('check-box2').style.visibility = 'visible';
    document.getElementById('ship-Delivery').style.visibility = 'visible';

    document.getElementById('productNname').value = b, c;
    document.getElementById('productNname1').value = b, c;

    //  document.getElementById('proname').innerHTML = b;

    // document.getElementById('oderSummary').innerHTML = ``;
    // document.getElementById('oderSummary').innerHTML = ``;
    document.getElementById('oderSummary').innerHTML = `
   <div> <p> ${b} </p>  <p> Shipping</p>   <h3> Total</h3> </div>
    <div class="moveotw"> <p>${c}</p> <p>Enter shipping address</p> <h3>${c}</h3></div>`;
    // document.getElementById('oderSummary').innerHTML = `<p><Total N${c}/p>`;
     
    document.getElementById('oderSummary1').innerHTML = ` <p> ${b} </p> <p>${c}</p>`

}

   
// function checkstr(params) {
//     let ss = Number(totalPriceContainer.innerHTML.slice(11));
  
//     if (ss >  0 || ss != '') {
//     document.getElementsByClassName('check-box')[0].style.visibility = 'visible'
//     }
// }
let ssalert = document.getElementById('salert');
function checkFin(params) {
   setTimeout(() => {
      ssalert.style.visibility = 'visible'
  }, 100);
  setInterval(() => {
 ssalert.style.visibility = 'hidden'
  }, 3000);
   
}
function showNotify(params) {
    let notify = document.getElementById('notify1').style.visibility = 'visible';
    let message = document.getElementsByClassName('message')[0].style.visibility = 'hidden'

}
function cancleNot(params) {
    let notify = document.getElementById('notify1').style.visibility = 'hidden';
    let message = document.getElementsByClassName('message')[0].style.visibility = 'visible';


}
    let tex = document.getElementById('inp');

function sendInp(params) {
    let thetxs = document.createElement('input');
    thetxs.setAttribute('type', 'hidden')
    thetxs.setAttribute('name', 'message')

    let thetx = document.createElement('div');
    thetx.className = 'messal'
    thetxs.value = tex.value;
   thetx.innerHTML = `<span class="texx">${tex.value}</span>`;

 let b = document.getElementById('notil');
 let z = document.getElementById('valueInputer');

tex.value = ""

// let emptyval = tex.value = "";

z.appendChild(thetxs);
 b.appendChild(thetx);

//  if (emptyval) {
// let tht = thetx.innerHTML = `<p class="texx">pleas input something valid</p>`;
// b.appendChild(tht);
// console.log('hfhfd');
//  }
}

// function showOn(params) {
//     document.getElementById('ondel').style.visibility = 'visible';
// }

function cancleService(params) {
    document.getElementById('service-box').style.visibility = 'hidden';
    // document.getElementById('ondel').style.visibility = 'hidden';

}


function showservice() {
   document.getElementsByClassName('service-box')[0].style.visibility = 'visible';
    // console.log('all')
}


function showMenu(params) {
     document.getElementById('menu').style.visibility = 'visible';
    document.getElementById('menu').style.transform =  'translateY(10%)';
    document.getElementById('menu').style.transition = '1s';

    document.getElementById('menu2').style.marginLeft = '0';
    document.getElementById('menu1').style.marginLeft = '0';
    document.getElementById('menu3').style.marginLeft = '0';
    document.getElementById('menu4').style.marginLeft = '0';
    document.getElementById('menu5').style.marginLeft = '0';

document.getElementById('menu1').style.transition = '1.5s';
document.getElementById('menu2').style.transition = '1.5s';
document.getElementById('menu3').style.transition = '1.5s';
document.getElementById('menu4').style.transition = '1.5s';
document.getElementById('menu5').style.transition = '1.5s';


document.getElementById('menu1').style.transitionDelay = '.5s'
document.getElementById('menu2').style.transitionDelay = '.5s'
document.getElementById('menu3').style.transitionDelay = '.5s'
document.getElementById('menu4').style.transitionDelay = '.5s'
document.getElementById('menu5').style.transitionDelay = '.5s'

    document.getElementById('cancleAlll').style.visibility = 'visible'



}

function cancleMenu(params) {
    document.getElementById('menu').style.visibility = 'hidden';
    document.getElementById('menu').style.transform =  'translateY(100%)';
    document.getElementById('menu').style.transition = '1s';
    document.getElementById('cancleAlll').style.visibility = 'hidden';


    document.getElementById('menu1').style.marginLeft = '5rem';
     document.getElementById('menu2').style.marginLeft = '4rem';
    document.getElementById('menu3').style.marginLeft = '3rem';
    document.getElementById('menu4').style.marginLeft = '2rem';
    document.getElementById('menu5').style.marginLeft = '1rem';

}


function showPage1(params) {
    document.getElementById('page-1').style.display = 'block';
    document.getElementById('page-2').style.display = 'none';
    document.getElementById('page-3').style.display = 'none';

    // for the ssp
    document.getElementById('ssp1').style.background = '#fff';
    document.getElementById('ssp2').style.background = '#000';
    document.getElementById('ssp3').style.background = '#000';

     // for the ssp
    document.getElementById('ssp1').style.color = '#000';
    document.getElementById('ssp2').style.color = '#fff';
    document.getElementById('ssp3').style.color = '#fff';

    




}
function showPage2(params) {
    document.getElementById('page-1').style.display = 'none';
    document.getElementById('page-2').style.display = 'block';
    document.getElementById('page-3').style.display = 'none';

     // for the ssp
     document.getElementById('ssp1').style.background = '#000';
     document.getElementById('ssp2').style.background = '#fff';
    document.getElementById('ssp3').style.background = '#000';

    document.getElementById('ssp1').style.color = '#fff';
    document.getElementById('ssp2').style.color = '#000';
    document.getElementById('ssp3').style.color = '#fff';

}
function showPage3(params) {
    document.getElementById('page-1').style.display = 'none';
    document.getElementById('page-2').style.display = 'none';
    document.getElementById('page-3').style.display = 'block';

     // for the ssp
     document.getElementById('ssp1').style.background = '#000';
     document.getElementById('ssp2').style.background = '#000';
     document.getElementById('ssp3').style.background = '#fff';

     document.getElementById('ssp1').style.color = '#fff';
     document.getElementById('ssp2').style.color = '#fff';
     document.getElementById('ssp3').style.color = '#000';
}


function showShip(params) {
    document.getElementById('ship-Delivery').style.visibility = 'visible';
    document.getElementById('Pickup-Delivery').style.visibility = 'hidden';

     document.getElementById('btnchg1').style.background = '#fff';
    // document.getElementById('.btnchg1').style.boxShadow = '1px 1px 6px 1px #000';

    document.getElementById('btnchg2').style.background = 'none';
    // document.getElementById('.btnchg2').style.boxShadow = 'none';

}

function showPickup(params) {
    document.getElementById('Pickup-Delivery').style.visibility = 'visible';
    document.getElementById('ship-Delivery').style.visibility = 'hidden';
    document.getElementById('btnchg2').style.background = '#fff';
    // document.getElementById('.btnchg2').style.boxShadow = '1px 1px 6px 1px #000';

    document.getElementById('btnchg1').style.background = 'none';
    // document.getElementById('.btnchg1').style.boxShadow = 'none';

}

function paysystem(params) {
    document.getElementById('acc').style.visibility = 'visible';
}



console.log(document.getElementsByTagName('section'))



window.addEventListener('load', function (params) {
    this.document.getElementById('showFullDis').style.visibility = 'hidden'
})


// let color11 = document.querySelectorAll('color1')[0];

// function color1f() {
//    let i  = h.target;
//    let z = i.getAttribute('style')

//    console.log(z.slice(11))
// }