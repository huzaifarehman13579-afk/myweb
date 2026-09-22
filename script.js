/* ================= PRODUCT DATA ================= */

const products = [
    {
        name: "Voltix 65W Fast Charger",
        category: "Chargers",
        price: 3499
    },
    {
        name: "AirBeat Pro Earbuds",
        category: "Earbuds",
        price: 5999
    },
    {
        name: "Voltix Ultra Headphones",
        category: "Headphones",
        price: 8499
    },
    {
        name: "Type-C Power Cable",
        category: "Cables",
        price: 1299
    }
];


/* ================= CART ================= */

let cart = [];


/* ================= ELEMENTS ================= */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const productCards = document.querySelectorAll(".product-card");

const cartBtn = document.getElementById("cartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

const noResults = document.getElementById("noResults");


/* ================= SEARCH ================= */

function searchProducts() {

    const searchValue = searchInput.value
        .toLowerCase()
        .trim();

    let found = false;

    productCards.forEach(card => {

        const name = card.dataset.name.toLowerCase();
        const category = card.dataset.category.toLowerCase();

        if (
            name.includes(searchValue) ||
            category.includes(searchValue)
        ) {

            card.style.display = "";
            found = true;

        } else {

            card.style.display = "none";

        }

    });

    if (!found) {
        noResults.classList.add("show");
    } else {
        noResults.classList.remove("show");
    }
}


searchInput.addEventListener("input", searchProducts);

searchBtn.addEventListener("click", searchProducts);


/* ================= CATEGORY FILTER ================= */

document.querySelectorAll(".category-card").forEach(category => {

    category.addEventListener("click", () => {

        const selectedCategory = category.dataset.category
            .toLowerCase();

        searchInput.value = selectedCategory;

        searchProducts();

        document.getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

});


/* ================= VIEW ALL ================= */

document.getElementById("viewAllBtn")
    .addEventListener("click", () => {

        searchInput.value = "";

        productCards.forEach(card => {
            card.style.display = "";
        });

        noResults.classList.remove("show");

        document.getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    });


/* ================= ADD TO CART ================= */

document.querySelectorAll(".add-cart").forEach((button, index) => {

    button.addEventListener("click", () => {

        const card = button.closest(".product-card");

        const product = {
            name: card.dataset.name,
            price: products[index].price
        };

        cart.push(product);

        updateCart();

        button.textContent = "Added ✓";

        setTimeout(() => {
            button.textContent = "Add to Cart";
        }, 1000);

    });

});


/* ================= UPDATE CART ================= */

function updateCart() {

    cartCount.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">Your cart is empty.</p>`;

        cartTotal.textContent = "Rs. 0";

        return;
    }


    cartItems.innerHTML = "";

    let total = 0;


    cart.forEach((item, index) => {

        total += item.price;

        const itemElement = document.createElement("div");

        itemElement.className = "cart-item";

        itemElement.innerHTML = `

            <div>
                <h4>${item.name}</h4>
                <p>Rs. ${item.price.toLocaleString()}</p>
            </div>

            <button
                class="remove-item"
                onclick="removeFromCart(${index})">
                ✕
            </button>

        `;

        cartItems.appendChild(itemElement);

    });


    cartTotal.textContent =
        `Rs. ${total.toLocaleString()}`;

}


/* ================= REMOVE FROM CART ================= */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


/* ================= OPEN CART ================= */

cartBtn.addEventListener("click", () => {

    cartOverlay.classList.add("show");

});


/* ================= CLOSE CART ================= */

closeCart.addEventListener("click", () => {

    cartOverlay.classList.remove("show");

});


cartOverlay.addEventListener("click", event => {

    if (event.target === cartOverlay) {

        cartOverlay.classList.remove("show");

    }

});


/* ================= WISHLIST ================= */

document.querySelectorAll(".heart").forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("liked");

        if (button.classList.contains("liked")) {

            button.textContent = "♥";

        } else {

            button.textContent = "♡";

        }

    });

});


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {

    const nav = document.querySelector(".nav-links");

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.position = "absolute";
        nav.style.top = "85px";
        nav.style.left = "10px";
        nav.style.right = "10px";

        nav.style.padding = "25px";

        nav.style.flexDirection = "column";

        nav.style.background = "rgba(10,10,10,.95)";

        nav.style.borderRadius = "20px";

        nav.style.border =
            "1px solid rgba(255,255,255,.1)";

    }

});


/* ================= CHECKOUT ================= */

document.querySelector(".checkout-btn")
    .addEventListener("click", () => {

        if (cart.length === 0) {

            alert("Your cart is empty!");

            return;

        }

        alert(
            "Checkout system will be connected on the next page."
        );

    });