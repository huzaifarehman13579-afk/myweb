/* =================================
   VOLTIX ABOUT PAGE
================================= */


/* =========================
   MOBILE MENU
========================= */

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileNav =
    document.getElementById("mobileNav");


if (mobileMenu) {

    mobileMenu.addEventListener(
        "click",
        () => {

            mobileNav.classList.toggle("open");

        }
    );

}


/* =========================
   SEARCH
========================= */

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                const value =
                    searchInput.value.trim();

                if (value !== "") {

                    window.location.href =
                        "shop.html?search=" +
                        encodeURIComponent(value);

                }

            }

        }
    );

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".value-card, .why-card, .mission-card, .stat-box"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   ACTIVE MOBILE LINK
========================= */

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
   NAVBAR SCROLL EFFECT
========================= */

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(5,5,5,.92)";

            navbar.style.borderColor =
                "rgba(0,229,255,.12)";

        } else {

            navbar.style.background =
                "rgba(10,10,10,.78)";

            navbar.style.borderColor =
                "rgba(255,255,255,.09)";

        }

    }
);