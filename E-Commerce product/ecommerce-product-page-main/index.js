// --- Product Show Box Constants ---
const product_thumbnails = document.querySelector('.product-thumbnails');
const product_showbox = document.querySelector('.product-showbox');
const product_titleEl = document.querySelector('.product-title');

// --- Product Shopping Constants ---
const currentPriceEl = document.querySelector('.current-price');
const discountEl = document.querySelector('.discount-percent');
const originPriceEl = document.querySelector('.origin-price');

// --- Cart Preview Constants ---
const cartPreviewEl = document.querySelector('.cart-preview');
const previewCartEl = document.querySelector('.preview-body');

// --- Carousel Show Box ---
const carousel_thumbnails = document.querySelector('.carousel-thumbnails');
const carousel_showbox = document.querySelector('.carousel-showbox');

// --- Setting Product Price ---
const noOfItemsEl = document.querySelector('.num-products');
const reduceProduct = document.querySelector('.reduce-product');
const addProduct = document.querySelector('.add-product');
const cartItemBadge = document.querySelector('#no-items');
const addToCartBtn = document.querySelector('.add-to-cart-btn');

let product_title = "Fall Limited Edition Sneakers";
let product_price = 250;
let discount = 50;
let discount_price = product_price * discount/100;
let numberItems = 0;
// console.log(discount_price.toFixed(2));

product_titleEl.textContent = product_title;
currentPriceEl.innerHTML = `$${discount_price.toFixed(2)}`;
discountEl.innerHTML = `${discount}%`;
originPriceEl.innerHTML =  `$${product_price.toFixed(2)}`;

// --- Add to Cart Btn UX
noOfItemsEl.innerHTML = numberItems;
addToCartBtn.classList.add('disable-btn');
addToCartBtn.setAttribute('disabled','on');

// --- Number of Products Add/ Sub
addProduct.addEventListener('click', () => {
    numberItems = numberItems +1 ;
    noOfItemsEl.innerHTML = numberItems;
    if(numberItems > 0) {
        reduceProduct.removeAttribute('disabled');
        addToCartBtn.classList.remove('disable-btn');
        addToCartBtn.removeAttribute('disabled');
    }

    return numberItems;
})

reduceProduct.addEventListener('click', () => {
    numberItems = numberItems -1 ;
    noOfItemsEl.innerHTML = numberItems;

    if(numberItems == 0) {
        reduceProduct.setAttribute('disabled','on');
        addToCartBtn.classList.add('disable-btn');
        addToCartBtn.setAttribute('disabled','on');
    }

    return numberItems;
})

// --- Initialize Empty Cart at Start
function emptyCart() {
    previewCartEl.innerHTML = `
        <p>Your cart is empty.</p>
    `; 
}
emptyCart();


function cartItemDelete() {
    emptyCart();
    
    // --- Remove Cart Badge at item === 0
    cartItemBadge.classList.add('d-none');
}

// --- Setting according to number of items and calculate the total SUM
function SetPreviewCartEl () {
    previewCartEl.innerHTML = `
            <div class="cart-item">
                <img class="cart-item-img" src="./images/image-product-1-thumbnail.jpg" alt="cart-product-thumbnail"/>

                <div class="cart-item-des">
                    <p class="cart-item-title">${product_title}</p>
                    <p class="cart-cal-price">$${discount_price} x ${numberItems} <span class="cart-total-price">$${discount_price * numberItems}</span></p>
                </div>

                <button onClick="cartItemDelete()" class="cart-item-delete">
                    <img src="./images/icon-delete.svg" alt="cart item delete"/>
                </button>
            </div>
            <button class="cart-item-checkout">
                Checkout
            </button>
        `;
}


addToCartBtn.addEventListener('click', (items)=>{
    items = numberItems;
    
    if(items > 0) {
        cartItemBadge.classList.remove('d-none');
        cartItemBadge.innerHTML = items;

        SetPreviewCartEl();
    }else {
        cartItemBadge.classList.add('d-none');

        emptyCart();        
    }

    if(numberItems === 0) {
        emptyCart();
    }else {
        SetPreviewCartEl();
    }
})

// Nav Menu Toggle
const navMenuBtnEl = document.querySelector('.nav--menu');
const mdNavEl = document.querySelector('.md-nav');
const mdNavOverlay = document.querySelector('.md-nav-overlay');
const closeMenuBtn = document.querySelector('.close-menu-btn');

navMenuBtnEl.addEventListener('click', () => {
    mdNavEl.classList.toggle('hidden');
    mdNavOverlay.classList.toggle('hidden');

    mdNavEl.classList.toggle('active');
    mdNavOverlay.classList.toggle('active');
})

closeMenuBtn.addEventListener('click', () => {

    mdNavEl.classList.toggle('hidden');
    mdNavOverlay.classList.toggle('hidden');

    mdNavEl.classList.toggle('active');
    mdNavOverlay.classList.toggle('active');

    
})

mdNavOverlay.addEventListener('click', () => {
    mdNavEl.classList.toggle('hidden');
    mdNavOverlay.classList.toggle('hidden');

    mdNavEl.classList.toggle('active');
    mdNavOverlay.classList.toggle('active');
})
// Cart Toggle Event
const cartBtn = document.querySelector('.nav--cart');

cartBtn.addEventListener('click', () => {
    cartPreviewEl.classList.toggle('active');
    cartPreviewEl.classList.toggle('hidden');

    // if(numberItems === 0) {
    //     previewCartEl.innerHTML = `
    //         <p>Your cart is empty.</p>
    //     `;
    // }
})

// --- Show Box and Carousel Thumbnail initializer ---
for(let i = 1; i < 5; i++){
    product_thumbnails.innerHTML += `
    <div 
        style="background-image: url(./images/image-product-${i}-thumbnail.jpg);" 
        class="thumbnail-item"
    >  
    </div>`;

    carousel_thumbnails.innerHTML += `
    <div 
        style="background-image: url(./images/image-product-${i}-thumbnail.jpg);" 
        class="carousel-item"
    >  
    </div>`;

}

// --- Implementation for Show Box and Carousel Selecting Thumbnails ---

product_thumbnails.firstElementChild.classList.add('thumbnail-active');
carousel_thumbnails.firstElementChild.classList.add('carousel-active');

let thumbnail_items = Array.from(document.getElementsByClassName('thumbnail-item'));
let carousel_items = Array.from(document.getElementsByClassName('carousel-item'));

thumbnail_items.forEach(item=> {
    
    item.addEventListener('click', function(e){
        let getItemBgImg = e.target.style.backgroundImage.slice(5, -16).replace(/"/g, "");
        let genShowboxBg = getItemBgImg+ '.jpg';

        thumbnail_items.forEach(itemClass => {
            itemClass.classList.value = 'thumbnail-item';
        })

        product_showbox.style.backgroundImage = `url(${genShowboxBg})`;

        console.log(genShowboxBg);
        e.target.classList.add('thumbnail-active');
    })
}) 

carousel_items.forEach(item=> {
    
    item.addEventListener('click', function(e){
        let getItemBgImg = e.target.style.backgroundImage.slice(5, -16).replace(/"/g, "");
        let genShowboxBg = getItemBgImg+ '.jpg';

        carousel_items.forEach(itemClass => {
            itemClass.classList.value = 'carousel-item';
        })

        carousel_showbox.style.backgroundImage = `url(${genShowboxBg})`;

        // console.log(genShowboxBg);
        e.target.classList.add('carousel-active');
    })
}) 

// --- Carousel Arrows Events ---

const prevBtnEl = document.querySelector('.prev-btn');
const nextBtnEl = document.querySelector('.next-btn');
const md_prevBtnEl = document.querySelector('.md-prev-btn');
const md_nextBtnEl = document.querySelector('.md-next-btn');

prevBtnEl.addEventListener('click', function(){
    // console.log("prev-clicked");

    let i = 0;
    let getCarouPrevChild;
    let wanted = 0;

    carousel_items.some(item=> {
        i= i+1;
        // console.log(`SOME plus ${i}`);
        
        if(item.classList.contains('carousel-active')){
            wanted = wanted +i;
            // console.log(`Find in SOME ${i} .`);
            // console.log(wanted);
        }
        
    });

    if(wanted === 1 || wanted === 7){
        wanted= 4;
        getCarouPrevChild = carousel_items[wanted-1].style.backgroundImage.slice(5, -16).replace(/"/g, "");

        carousel_items.forEach(itemClass => {
            itemClass.classList.value = 'carousel-item';
        });

        // console.log(`Prev First ${i-1}`);

        carousel_items[wanted-1].classList.add('carousel-active');
    }else {
        getCarouPrevChild = carousel_items[wanted-2].style.backgroundImage.slice(5, -16).replace(/"/g, "");

        carousel_items.forEach(itemClass => {
            itemClass.classList.value = 'carousel-item';
        });
        
        // console.log(`Prev Second ${i-2}`);

        carousel_items[wanted-2].classList.add('carousel-active');
    }

    carousel_showbox.style.backgroundImage = `url(${getCarouPrevChild}.jpg)`;
    // console.log(getCarouPrevChild);
})

md_prevBtnEl.addEventListener('click' , function(){
    console.log("MD Prev Clicked");

    let i = 0;
    let getCarouPrevChild;
    let wanted = 0;

    thumbnail_items.some(item=> {
        i= i+1;
        // console.log(`SOME plus ${i}`);
        
        if(item.classList.contains('thumbnail-active')){
            wanted = wanted +i;
            // console.log(`Find in SOME ${i} .`);
            // console.log(wanted);
        }
        
    });

    if(wanted === 1 || wanted === 7){
        wanted= 4;
        getCarouPrevChild = thumbnail_items[wanted-1].style.backgroundImage.slice(5, -16).replace(/"/g, "");

        thumbnail_items.forEach(itemClass => {
            itemClass.classList.value = 'thumbnail-item';
        });

        // console.log(`Prev First ${i-1}`);

        thumbnail_items[wanted-1].classList.add('thumbnail-active');
    }else {
        getCarouPrevChild = thumbnail_items[wanted-2].style.backgroundImage.slice(5, -16).replace(/"/g, "");

        thumbnail_items.forEach(itemClass => {
            itemClass.classList.value = 'thumbnail-item';
        });
        
        // console.log(`Prev Second ${i-2}`);

        thumbnail_items[wanted-2].classList.add('thumbnail-active');
    }

    product_showbox.style.backgroundImage = `url(${getCarouPrevChild}.jpg)`;
    // console.log(getCarouPrevChild);
})



nextBtnEl.addEventListener('click', function(){
    // console.log("next-clicked");

    let i = 0;
    let getCarouNextChild;
    let wanted = 0;

    carousel_items.some(item=> {
        i= i+1;
        // console.log(`SOME plus ${i}`);

        if(item.classList.contains('carousel-active')){
            wanted = wanted +i;
            // console.log(`Find in SOME ${i} .`);
            // console.log(wanted);
        }
        
    });

    if(wanted === 4){
        wanted= 0;
        getCarouNextChild = carousel_items[wanted].style.backgroundImage.slice(5, -16).replace(/"/g, "");

        carousel_items.forEach(itemClass => {
            itemClass.classList.value = 'carousel-item';
        });

        // console.log(`Next First ${i}`);
        carousel_items[wanted].classList.add('carousel-active');

    }else {
        getCarouNextChild = carousel_items[wanted].style.backgroundImage.slice(5, -16).replace(/"/g, "");

        carousel_items.forEach(itemClass => {
            itemClass.classList.value = 'carousel-item';
        });
        
        // console.log(`Next Second ${i}`);
        carousel_items[wanted].classList.add('carousel-active');
    }

    carousel_showbox.style.backgroundImage = `url(${getCarouNextChild}.jpg)`;
    // console.log(getCarouNextChild);
})

md_nextBtnEl.addEventListener('click' , function(){
    console.log("MD Next Clicked");

    let i = 0;
    let getCarouNextChild;
    let wanted = 0;

    thumbnail_items.some(item=> {
        i= i+1;
        // console.log(`SOME plus ${i}`);

        if(item.classList.contains('thumbnail-active')){
            wanted = wanted +i;
            // console.log(`Find in SOME ${i} .`);
            // console.log(wanted);
        }
        
    });

    if(wanted === 4){
        wanted= 0;
        getCarouNextChild = thumbnail_items[wanted].style.backgroundImage.slice(5, -16).replace(/"/g, "");

        thumbnail_items.forEach(itemClass => {
            itemClass.classList.value = 'thumbnail-item';
        });

        // console.log(`Next First ${i}`);
        thumbnail_items[wanted].classList.add('thumbnail-active');

    }else {
        getCarouNextChild = thumbnail_items[wanted].style.backgroundImage.slice(5, -16).replace(/"/g, "");

        thumbnail_items.forEach(itemClass => {
            itemClass.classList.value = 'thumbnail-item';
        });
        
        // console.log(`Next Second ${i}`);
        thumbnail_items[wanted].classList.add('thumbnail-active');
    }

    product_showbox.style.backgroundImage = `url(${getCarouNextChild}.jpg)`;
})

// Carousel Overlay Close / Toggle Event

const closeCarouselEl = document.querySelector('.close-carousel-btn');
const carouselOverlayEl = document.querySelector('.product-carousel-overlay');


closeCarouselEl.addEventListener('click', () => {
    carouselOverlayEl.classList.add('d-none');
})

document.querySelector('.max-showbox').addEventListener('click', () => {

    if(window.innerWidth > 768) {
        carouselOverlayEl.classList.remove('d-none');
    }
    
});