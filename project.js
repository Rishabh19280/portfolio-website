const filterBtns = document.querySelectorAll(".filter-btn");

const cards = document.querySelectorAll(".project-card");

filterBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        filterBtns.forEach(item=>{
            item.classList.remove("active");
        });

        btn.classList.add("active");

        const filter = btn.dataset.filter;

        cards.forEach(card=>{

            if(
                filter === "all" ||card.dataset.category === filter
            ){
                card.style.display = "block";
            }
            else{
                card.style.display = "none";
            }

        });

    });

});

const popup =
document.querySelector(".popup");

const popupImg =
document.querySelector("#popup-img");

const viewBtns =
document.querySelectorAll(".view-btn");

viewBtns.forEach(btn=>{

    btn.addEventListener("click",()=>{

        popup.classList.add("active");

        popupImg.src =
        btn.dataset.img;

    });

});

document
.querySelector(".close-btn")
.addEventListener("click",()=>{

    popup.classList.remove("active");

});

popup.addEventListener("click",(e)=>{

    if(e.target === popup){

        popup.classList.remove("active");

    }

});

const menuToggle =
document.querySelector(".menu-toggle");

const nav =
document.querySelector("nav");

menuToggle.addEventListener("click",()=>{

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){
        menuToggle.innerHTML = "✕";
    }
    else{
        menuToggle.innerHTML = "☰";
    }

});