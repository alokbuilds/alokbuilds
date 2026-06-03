/* =========================================
            MOBILE NAVBAR
========================================= */

const menuToggle =
document.getElementById(
    "menu-toggle"
);

const navLinks =
document.getElementById(
    "nav-links"
);

if(menuToggle){

    menuToggle.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "active"
            );

        }
    );

}


/* =========================================
            ACTIVE LINK
========================================= */

const links =
document.querySelectorAll(
    ".nav-links a"
);

links.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            links.forEach(l =>

                l.classList.remove(
                    "active"
                )

            );

            link.classList.add(
                "active"
            );

        }
    );

});


/* =========================================
            NAVBAR SHADOW
========================================= */

window.addEventListener(
    "scroll",
    () => {

        const navbar =
        document.querySelector(
            ".navbar"
        );

        if(
            window.scrollY > 50
        ){

            navbar.classList.add(
                "scrolled"
            );

        }else{

            navbar.classList.remove(
                "scrolled"
            );

        }

    }
);