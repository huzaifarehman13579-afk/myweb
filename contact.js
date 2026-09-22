document.addEventListener("DOMContentLoaded", () => {

    /* ================= MOBILE MENU ================= */

    const menuBtn = document.getElementById("menuBtn");
    const mobileNav = document.getElementById("mobileNav");

    menuBtn.addEventListener("click", () => {

        mobileNav.classList.toggle("show");

        if (mobileNav.classList.contains("show")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    /* ================= MOBILE NAV CLOSE ================= */

    const mobileLinks = document.querySelectorAll(".mobile-nav a");

    mobileLinks.forEach(link => {

        link.addEventListener("click", () => {

            mobileNav.classList.remove("show");

            menuBtn.textContent = "☰";

        });

    });


    /* ================= SEARCH ================= */

    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");

    function performSearch() {

        const searchValue = searchInput.value.trim();

        if (searchValue !== "") {

            window.location.href =
                "shop.html?search=" +
                encodeURIComponent(searchValue);

        }

    }

    searchBtn.addEventListener("click", performSearch);

    searchInput.addEventListener("keydown", (event) => {

        if (event.key === "Enter") {
            performSearch();
        }

    });


    /* ================= WISHLIST ================= */

    const wishlistBtn = document.getElementById("wishlistBtn");

    wishlistBtn.addEventListener("click", () => {

        showToast("Wishlist opened ❤️");

    });


    /* ================= CART ================= */

    const cartBtn = document.getElementById("cartBtn");

    cartBtn.addEventListener("click", () => {

        showToast("Your cart is currently empty 🛒");

    });


    /* ================= CONTACT FORM ================= */

    const contactForm = document.getElementById("contactForm");

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const subject =
            document.getElementById("subject").value.trim();

        const message =
            document.getElementById("message").value.trim();


        if (!name || !email || !subject || !message) {

            showToast("Please fill all fields.");

            return;

        }


        showToast("Message sent successfully! ⚡");

        contactForm.reset();

    });


    /* ================= FAQ ================= */

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    faqQuestions.forEach(question => {

        question.addEventListener("click", () => {

            const faqItem =
                question.parentElement;

            const answer =
                faqItem.querySelector(".faq-answer");


            document.querySelectorAll(".faq-item")
                .forEach(item => {

                    if (item !== faqItem) {

                        item.classList.remove("active");

                        item.querySelector(".faq-answer")
                            .style.maxHeight = null;

                    }

                });


            faqItem.classList.toggle("active");


            if (faqItem.classList.contains("active")) {

                answer.style.maxHeight =
                    answer.scrollHeight + "px";

            } else {

                answer.style.maxHeight = null;

            }

        });

    });


    /* ================= TOAST ================= */

    function showToast(message) {

        const toast =
            document.getElementById("toast");

        toast.textContent = message;

        toast.classList.add("show");


        setTimeout(() => {

            toast.classList.remove("show");

        }, 2500);

    }


    /* ================= NAVBAR SCROLL ================= */

    const navbar =
        document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5,5,5,.94)";

            navbar.style.borderColor =
                "rgba(0,229,255,.12)";

        } else {

            navbar.style.background =
                "rgba(10,10,10,.78)";

            navbar.style.borderColor =
                "rgba(255,255,255,.1)";

        }

    });

});