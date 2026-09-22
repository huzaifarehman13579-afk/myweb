/* ==========================================
   VOLTIX NEW ARRIVALS
   JAVASCRIPT
========================================== */


/* =========================
   CART
========================= */

let cart = JSON.parse(localStorage.getItem("voltixCart")) || [];

const cartBtn = document.getElementById("cartBtn");
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");


function saveCart() {

    localStorage.setItem(
        "voltixCart",
        JSON.stringify(cart)
    );

}


function updateCart() {

    cartCount.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <div class="empty-cart">
                <span>🛒</span>
                <p>Your cart is empty.</p>
            </div>
        `;

        cartTotal.textContent = "Rs. 0";

        return;
    }


    let total = 0;


    cartItems.innerHTML = cart.map((item, index) => {

        total += Number(item.price);

        return `
            <div class="cart-item">

                <div class="cart-item-info">

                    <h4>
                        ${item.name}
                    </h4>

                    <span>
                        Rs. ${Number(item.price).toLocaleString()}
                    </span>

                </div>

                <button
                    class="remove-item"
                    onclick="removeCartItem(${index})">

                    ×

                </button>

            </div>
        `;

    }).join("");


    cartTotal.textContent =
        "Rs. " + total.toLocaleString();

}


function addToCart(name, price) {

    cart.push({
        name: name,
        price: Number(price)
    });

    saveCart();

    updateCart();

    showToast(
        `${name} added to cart`
    );

}


function removeCartItem(index) {

    cart.splice(index, 1);

    saveCart();

    updateCart();

}


document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        const name =
            button.dataset.name;

        const price =
            button.dataset.price;

        addToCart(name, price);

    });

});


/* =========================
   OPEN CART
========================= */

cartBtn.addEventListener("click", () => {

    cartDrawer.classList.add("open");

    cartOverlay.classList.add("open");

});


function closeCartDrawer() {

    cartDrawer.classList.remove("open");

    cartOverlay.classList.remove("open");

}


closeCart.addEventListener(
    "click",
    closeCartDrawer
);

cartOverlay.addEventListener(
    "click",
    closeCartDrawer
);


/* =========================
   WISHLIST
========================= */

const hearts =
    document.querySelectorAll(".heart");


hearts.forEach(heart => {

    heart.addEventListener("click", () => {

        heart.classList.toggle("liked");

        if (
            heart.classList.contains("liked")
        ) {

            heart.textContent = "♥";

            showToast(
                "Added to wishlist"
            );

        } else {

            heart.textContent = "♡";

            showToast(
                "Removed from wishlist"
            );

        }

    });

});


/* =========================
   FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const products =
    document.querySelectorAll(".new-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        products.forEach(product => {

            const category =
                product.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                product.classList.remove("hide");

            } else {

                product.classList.add("hide");

            }

        });

    });

});


/* =========================
   SEARCH
========================= */

const searchInput =
    document.getElementById("searchInput");


searchInput.addEventListener(
    "input",
    () => {

        const search =
            searchInput.value
                .toLowerCase()
                .trim();


        products.forEach(product => {

            const name =
                product
                    .querySelector("h3")
                    .textContent
                    .toLowerCase();


            const description =
                product
                    .querySelector("p")
                    .textContent
                    .toLowerCase();


            if (
                name.includes(search) ||
                description.includes(search)
            ) {

                product.classList.remove("hide");

            } else {

                product.classList.add("hide");

            }

        });

    }
);


/* =========================
   COUNTDOWN
========================= */

const launchDate =
    new Date();

launchDate.setDate(
    launchDate.getDate() + 7
);


function updateCountdown() {

    const now =
        new Date().getTime();

    const distance =
        launchDate.getTime() - now;


    if (distance <= 0) {

        document.getElementById("days").textContent = "00";
        document.getElementById("hours").textContent = "00";
        document.getElementById("minutes").textContent = "00";
        document.getElementById("seconds").textContent = "00";

        return;

    }


    const days =
        Math.floor(
            distance /
            (1000 * 60 * 60 * 24)
        );


    const hours =
        Math.floor(
            (distance %
                (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );


    const minutes =
        Math.floor(
            (distance %
                (1000 * 60 * 60)) /
            (1000 * 60)
        );


    const seconds =
        Math.floor(
            (distance %
                (1000 * 60)) /
            1000
        );


    document.getElementById("days")
        .textContent =
        String(days).padStart(2, "0");


    document.getElementById("hours")
        .textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes")
        .textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds")
        .textContent =
        String(seconds).padStart(2, "0");

}


updateCountdown();

setInterval(
    updateCountdown,
    1000
);


/* =========================
   TOAST
========================= */

const toast =
    document.getElementById("toast");


let toastTimer;


function showToast(message) {

    toast.querySelector("p")
        .textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

}


/* =========================
   NEWSLETTER
========================= */

const newsletterForm =
    document.getElementById(
        "newsletterForm"
    );


newsletterForm.addEventListener(
    "submit",
    event => {

        event.preventDefault();

        showToast(
            "You're subscribed to VOLTIX!"
        );

        newsletterForm.reset();

    }
);


/* =========================
   MOBILE MENU
========================= */

const mobileMenu =
    document.getElementById(
        "mobileMenu"
    );

const mobileNav =
    document.getElementById(
        "mobileNav"
    );


mobileMenu.addEventListener(
    "click",
    () => {

        mobileNav.classList.toggle(
            "open"
        );

    }
);


document
    .querySelectorAll(".mobile-nav a")
    .forEach(link => {

        link.addEventListener(
            "click",
            () => {

                mobileNav.classList.remove(
                    "open"
                );

            }
        );

    });


/* =========================
   WISHLIST NAV BUTTON
========================= */

const wishlistBtn =
    document.getElementById(
        "wishlistBtn"
    );


wishlistBtn.addEventListener(
    "click",
    () => {

        const liked =
            document.querySelectorAll(
                ".heart.liked"
            ).length;

        if (liked > 0) {

            showToast(
                `${liked} item(s) in wishlist`
            );

        } else {

            showToast(
                "Your wishlist is empty"
            );

        }

    }
);


/* =========================
   CHECKOUT
========================= */

const checkoutBtn =
    document.querySelector(
        ".checkout-btn"
    );


checkoutBtn.addEventListener(
    "click",
    () => {

        if (cart.length === 0) {

            showToast(
                "Your cart is empty"
            );

            return;
        }

        showToast(
            "Checkout system coming soon"
        );

    }
);


/* =========================
   INITIAL LOAD
========================= */

updateCart();