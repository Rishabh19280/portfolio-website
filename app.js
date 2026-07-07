// navbar
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === "#" + entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  {
    threshold: 0.5,
  },
);

sections.forEach((section) => {
  observer.observe(section);
});
// navbar end
// skill animation 
const circles = document.querySelectorAll(".circle");

const circleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const circle = entry.target;
            const target = parseInt(
                circle.style.getPropertyValue('--percent')
            );

            const text = circle.querySelector("span");

            let current = 0;

            const interval = setInterval(() => {

                if (current >= target) {
                    clearInterval(interval);
                } else {

                    current++;

                    circle.style.background =
                    `conic-gradient(
                        #f5c400 ${current}%,
                        #2f2f2f 0%
                    )`;

                    text.textContent = current + "%";
                }

            }, 20);

            circleObserver.unobserve(circle);
        }

    });
}, {
    threshold: 1
});

circles.forEach(circle => {
    circleObserver.observe(circle);
});

// skill animation end


// contact start
const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        formData.append("form-name", "contact");

        await fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams(formData).toString(),
        });

        alert("Message Sent Successfully!");
        form.reset();
    });
}
// contact end
// navbar responsive start
const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".nav-link");
const menuIcon = document.querySelector(".menu-toggle span");

if (menuToggle && mobileMenu && menuIcon) {

    menuToggle.addEventListener("click", () => {
        mobileMenu.classList.toggle("active");

        if (mobileMenu.classList.contains("active")) {
            menuIcon.innerHTML = "✕";
        } else {
            menuIcon.innerHTML = "☰";
        }
    });

    document.querySelectorAll(".nav-link a").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("active");
            menuIcon.innerHTML = "☰";
        });
    });

}
// navbar responsive end

