/* =====================================================
   PORTFOLIO JAVASCRIPT
===================================================== */


/* =====================================================
   CONTACT FORM
===================================================== */

const contactForm = document.getElementById("contactForm");

const submitBtn = document.getElementById("submitBtn");

const formStatus = document.getElementById("formStatus");


if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();


        /* Disable button */

        submitBtn.disabled = true;

        submitBtn.innerHTML = "Sending...";


        /* Clear old message */

        formStatus.textContent = "";

        formStatus.style.color = "";


        /* Get form data */

        const formData = new FormData(contactForm);


        try {

            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",

                    body: formData,

                    headers: {
                        "Accept": "application/json"
                    }
                }
            );


            if (response.ok) {

                /* SUCCESS */

                formStatus.textContent =
                    "✓ Message sent successfully! I'll get back to you soon.";

                formStatus.style.color = "#20d5f5";


                /* Clear form */

                contactForm.reset();

            } else {

                /* SERVER ERROR */

                const data = await response.json();

                if (data.errors) {

                    formStatus.textContent =
                        data.errors
                            .map(error => error.message)
                            .join(", ");

                } else {

                    formStatus.textContent =
                        "Something went wrong. Please try again.";

                }

                formStatus.style.color = "#ff6b6b";
            }


        } catch (error) {

            console.error(error);

            formStatus.textContent =
                "Unable to send message. Please check your internet connection.";

            formStatus.style.color = "#ff6b6b";

        }


        /* Enable button */

        submitBtn.disabled = false;

        submitBtn.innerHTML =
            'Send Message <span>→</span>';

    });

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", function () {

    let currentSection = "";


    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =====================================================
   SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .skill-card, .project-card, .stat-card, .education-card, .timeline-content"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-element"
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {

    element.classList.add("reveal-element");

    revealObserver.observe(element);

});


/* =====================================================
   ADDITIONAL DYNAMIC CSS
===================================================== */

const revealStyle =
    document.createElement("style");


revealStyle.textContent = `

    .reveal-element {
        opacity: 0;
        transform: translateY(25px);
        transition:
            opacity 0.7s ease,
            transform 0.7s ease;
    }

    .show-element {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-links a.active {
        color: #20d5f5;
    }

`;


document.head.appendChild(revealStyle);


/* =====================================================
   CONSOLE MESSAGE
===================================================== */

console.log(
    "%cWelcome to Thangavel's Portfolio 🚀",
    "color:#20d5f5;font-size:18px;font-weight:bold;"
);

console.log(
    "Built with HTML, CSS and JavaScript."
);