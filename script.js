tailwind.config = {
  theme: {
    screens: {
      mobile: "240px",
      // => @media (min-width: 640px) { ... }

      tablet: "640px",
      // => @media (min-width: 1024px) { ... }

      desktop: "1000px",
      // => @media (min-width: 1280px) { ... }
    },
    fontSize: {
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
    },
    extend: {
      colors: {
        clifford: "#da373d",
        mainWhite: "#ffffff",
        headerBg: "#023047",
        homeBg: "#dee2e6",
        mainRed: "#ef0827",
        mainBlack: "#000",
        mainBlue: "#45567d",
        mainGray: " #303841",
      },
    },
  },
};

/**** home Page code  start** */

//display navbar model
const navLinks = document.querySelector(".nav-links");
const model = document.querySelector(".model");
const btnmodel = document.querySelector(".btnmodel");
btnmodel.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

/***  slider coded*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/***** product data */
/*** home product date ***/
const homeProductData = [
  {
    id: 1,
    image: "/images/t-shirt5.png",
    name: "product name",
    price: 12,
  },
  {
    id: 2,
    image: "./images/girl2.png",
    name: "product name",
    price: 22,
  },
  {
    id: 3,
    image: "./images/suit1.png",
    name: "product name",
    price: 15,
  },
  {
    id: 4,
    image: "./images/t-shirt2.png",
    name: "product name",
    price: 12,
  },
  {
    id: 5,
    image: "./images/t-shirt5.png",
    name: "product name",
    price: 12,
  },
  {
    id: 6,
    image: "./images/t-shirt3.png",
    name: "product name",
    price: 32,
  },
  {
    id: 7,
    image: "./images/suit4.png",
    name: "product name",
    price: 23,
  },
  {
    id: 8,
    image: "./images/t-shirt7.png",
    name: "product name",
    price: 12,
  },
  {
    id: 9,
    image: "./images/suit2.png",
    name: "product name",
    price: 23,
  },
  {
    id: 10,
    image: "./images/t-shirt3.png",
    name: "product name",
    price: 23,
  },
];
/*** displaying products items */
homeProductData.map(({ id, name, price, image }) => {

  const products = document.querySelector(".products");

  const ProductTamplate = `
  <div class=" flex flex-col gap-2  items-center bg-homeBg m-2 p-2 rounded" key={id}>
                <img src=${image} alt="" class="desktop:w-52 h-52 , mobile:w-32"/>
                <h4>${name}</h4>
                <p>$ ${price}</p>
                <button class="cartBtn bg-headerBg p-2 text-mainWhite rounded">Add to cart</button>
              </div>
`;
  products.innerHTML += ProductTamplate;
});


/*** updating the add button and cart***/
let cartcount = 0;

const cartBtn = document.querySelectorAll(".cartBtn");
cartBtn.forEach((cartt) => {
  cartt.addEventListener("click", (e) => {
    const targetEl = e.target;
    const cart = document.querySelector(".cart-items");
    if (targetEl.classList.contains("added")) {
      targetEl.classList.remove("added");
      targetEl.style.background = "#023047";
      targetEl.classList.add("remove");
      targetEl.innerHTML = "Add to cart";
      cartcount--;
    } else {
      targetEl.classList.add("added");
      targetEl.classList.remove("remove");
      targetEl.style.background = "red";
      targetEl.innerText = "Remove from cart";
      cartcount++;
    }
    cart.innerHTML = cartcount.toString();
  });
});
