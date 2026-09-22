const products = document.querySelectorAll(".product-card");
const categories = document.querySelectorAll(".category");

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const sortSelect = document.getElementById("sortSelect");

const noProducts = document.getElementById("noProducts");

const cartBtn = document.getElementById("cartBtn");
const cartOverlay = document.getElementById("cartOverlay");
const closeCart = document.getElementById("closeCart");

const cartItems = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const cartTotal = document.getElementById("cartTotal");

const toast = document.getElementById("toast");

let cart = [];
let selectedCategory = "All";


/* SEARCH + FILTER */

function filterProducts() {

    const searchValue = searchInput.value.toLowerCase().trim();

    let visibleProducts = [];

    products.forEach(product => {

        const name = product.dataset.name.toLowerCase();
        const category = product.dataset.category;

        const matchesSearch =
            name.includes(searchValue);

        const matchesCategory =
            selectedCategory === "All" ||
            category === selectedCategory;

        if (matchesSearch && matchesCategory) {

            product.style.display = "block";
            visibleProducts.push(product);

        } else {

            product.style.display = "none";

        }

    });

    noProducts.style.display =
        visibleProducts.length === 0
            ? "block"
            : "none";
}


searchInput.addEventListener("input", filterProducts);

searchBtn.addEventListener("click", filterProducts);


/* CATEGORY */

categories.forEach(button => {

    button.addEventListener("click", () => {

        categories.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        selectedCategory =
            button.dataset.category;

        filterProducts();

    });

});


/* SORT */

sortSelect.addEventListener("change", () => {

    const grid =
        document.getElementById("productGrid");

    const productArray =
        Array.from(products);

    const type = sortSelect.value;

    if (type === "low") {

        productArray.sort(
            (a,b) =>
            Number(a.dataset.price) -
            Number(b.dataset.price)
        );

    }

    if (type === "high") {

        productArray.sort(
            (a,b) =>
            Number(b.dataset.price) -
            Number(a.dataset.price)
        );

    }

    if (type === "name") {

        productArray.sort(
            (a,b) =>
            a.dataset.name.localeCompare(
                b.dataset.name
            )
        );

    }

    productArray.forEach(product =>
        grid.appendChild(product)
    );

});


/* CART */

document.querySelectorAll(".add-cart")
.forEach(button => {

    button.addEventListener("click", () => {

        const card =
            button.closest(".product-card");

        const product = {

            name: card.dataset.name,

            price:
                Number(card.dataset.price)

        };

        cart.push(product);

        updateCart();

        showToast(
            `${product.name} added to cart ✓`
        );

    });

});


function updateCart() {

    cartCount.textContent = cart.length;

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML =
            `<p class="empty-cart">
                Your cart is empty.
            </p>`;

        cartTotal.textContent = "Rs. 0";

        return;
    }

    let total = 0;

    cart.forEach((item,index) => {

        total += item.price;

        const div =
            document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `

            <div>
                <h4>${item.name}</h4>
                <span>Rs. ${item.price.toLocaleString()}</span>
            </div>

            <button
                class="remove-item"
                onclick="removeItem(${index})">
                ✕
            </button>

        `;

        cartItems.appendChild(div);

    });

    cartTotal.textContent =
        `Rs. ${total.toLocaleString()}`;

}


function removeItem(index) {

    cart.splice(index,1);

    updateCart();

}


/* OPEN CART */

cartBtn.addEventListener("click", () => {

    cartOverlay.classList.add("show");

});


/* CLOSE CART */

closeCart.addEventListener("click", () => {

    cartOverlay.classList.remove("show");

});


cartOverlay.addEventListener("click", e => {

    if (e.target === cartOverlay) {

        cartOverlay.classList.remove("show");

    }

});


/* WISHLIST */

document.querySelectorAll(".heart")
.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("liked");

        button.textContent =
            button.classList.contains("liked")
                ? "♥"
                : "♡";

    });

});


/* TOAST */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);

}


/* CHECKOUT */

document.querySelector(".checkout-btn")
.addEventListener("click", () => {

    if (cart.length === 0) {

        showToast("Your cart is empty!");

        return;

    }

    showToast(
        "Checkout system coming soon!"
    );

});