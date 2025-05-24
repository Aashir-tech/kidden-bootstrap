$(document).ready(function () {
  // Handle navbar background on scroll
  $(window).scroll(function () {
    if ($(this).scrollTop() > 10) {
      $("#main-navbar").addClass("scrolled");
    } else {
      $("#main-navbar").removeClass("scrolled");
    }
  });

 


  // Check initial scroll position
  if ($(window).scrollTop() > 10) {
    $("#main-navbar").addClass("scrolled");
  }

  // Handle mobile menu button click
  $("#mobile-menu-btn").click(function () {
    if ($(window).width() < 768) {
      $("#left-sidebar").addClass("show");
    } else {
      $("#right-sidebar").addClass("show");
    }
  });

  // Handle close buttons
  $("#close-right-sidebar").click(function () {
    $("#right-sidebar").removeClass("show");
  });

  $("#close-left-sidebar").click(function () {
    $("#left-sidebar").removeClass("show");
  });

  // Handle mobile dropdown toggles
  $(".mobile-nav-item > div").click(function () {
    // Toggle the plus/minus icon
    const toggleIcon = $(this).find(".toggle-icon");
    if (toggleIcon.text() === "+") {
      toggleIcon.text("-");
    } else {
      toggleIcon.text("+");
    }
  });

  // Close sidebars when clicking outside
  $(document).click(function (event) {
    if (!$(event.target).closest("#right-sidebar, #mobile-menu-btn").length) {
      $("#right-sidebar").removeClass("show");
    }

    if (!$(event.target).closest("#left-sidebar, #mobile-menu-btn").length) {
      $("#left-sidebar").removeClass("show");
    }
  });

  // Prevent sidebar closing when clicking inside the sidebar
  $(".sidebar").click(function (event) {
    event.stopPropagation();
  });

  // Handle window resize
  $(window).resize(function () {
    // Close any open sidebars on resize
    $(".sidebar").removeClass("show");
  });
});

$(document).ready(function () {
  $(".nav-item.dropdown").on("mouseenter", function () {
    $(this).addClass("show");
    $(this).find(".dropdown-menu").addClass("show");
    $(this).find(".nav-link").attr("aria-expanded", "true");
  });

  $(".nav-item.dropdown").on("mouseleave", function () {
    $(this).removeClass("show");
    $(this).find(".dropdown-menu").removeClass("show");
    $(this).find(".nav-link").attr("aria-expanded", "false");
  });
});

const cards = [
  {
    title: "Kids Play Group",
    description:
      "Kindergarten is an educational environment designed for young children, typically age...",
    post: "images/posts/post-1.jpg",
    age: "Age 3-4 Year",
    iconBg: "images/programs/yellow-icon-cloud.svg",
    cloudBg: "images/programs/yellow-bg.svg",
  },
  {
    title: "Nursery Preschool",
    description:
      "Kindergarten is an educational environment designed for young children, typically age...",
    post: "images/posts/post-1.jpg",
    age: "Age 3-4 Year",
    iconBg: "images/programs/blue-icon-cloud.svg",
    cloudBg: "images/programs/blue-bg.svg",
  },
  {
    title: "Toddler Learning",
    description: "Kindergarten is an educational environment designed for young children, typically age...",
    post: "images/posts/post-3.jpg",
    age: "Age 3-5 Year",
    iconBg: "images/programs/red-icon-cloud.svg",
    cloudBg: "images/programs/red-bg.svg"
  },
  {
    title: "Physical Development",
    description: "Kindergarten is an educational environment designed for young children, typically age...",
    post: "images/posts/post-4.jpg",
    age: "Age 4-6 Year",
    iconBg: "images/programs/green-icon-cloud.svg",
    cloudBg: "images/programs/green-bg.svg"
  },
  {
    title: "Speech Correction",
    description: "Kindergarten is an educational environment designed for young children, typically age...",
    post: "images/posts/post-5.jpg",
    age: "Age 2-4 Year",
    iconBg: "images/programs/yellow-icon-cloud.svg",
    cloudBg: "images/programs/yellow-bg.svg"
  },
  {
    title: "Drawing and Colors",
    description: "Kindergarten is an educational environment designed for young children, typically age...",
    post: "images/posts/post-6.jpg",
    age: "Age 3-5 Year",
    iconBg: "images/programs/blue-icon-cloud.svg",
    cloudBg: "images/programs/blue-bg.svg",
  },
  {
    title: "Discipline Program",
    description: "Kindergarten is an educational environment designed for young children, typically age...",
    post: "images/posts/post-7.jpg",
    age: "Age 2-4 Year",
      iconBg: "images/programs/red-icon-cloud.svg",
    cloudBg: "images/programs/red-bg.svg"
  },
  {
    title: "Junior Nursery",
    description: "Kindergarten is an educational environment designed for young children, typically age...",
    post: "images/posts/post-8.jpg",
    age: "Age 3-5 Year",
     iconBg: "images/programs/green-icon-cloud.svg",
    cloudBg: "images/programs/green-bg.svg"
  }
];

//   
// 
// 

const testimonials = [
    {
        name : "Fiorella Ibáñez",
        title : "Pharmacist",
        image : "images/teachers/teacher-2.jpg"
    },
    {
        name : "Abraham McGraw",
        title : "Journalist",
        image : "images/teachers/teacher-3.jpg"
    },
    {
        name : "Scott Gonzalez",
        title : "Businessman",
        image : "images/teachers/teacher-4.jpg"
    },
    {
        name : "Stephen Miller",
        title : "Engineer",
        image : "images/teachers/teacher-1.jpg"
    }
]

let currentIndex = 0;
let cardsPerView = 3;

function updateCardsPerView() {
  const width = window.innerWidth;
  if (width < 640) {
    cardsPerView = 1;
  } else if (width < 768) {
    cardsPerView = 2;
  } else {
    cardsPerView = 3;
  }
  renderCards();
}

function renderCards() {
  $("#programCarousel").html("");
  cards.forEach((card) => {
    const cardHtml = `
        <div class="card-slide">
          <div class=" h-50 rounded-4  position-relative">
            <img src="${card.post}" class="card-img-top rounded-4" alt="${card.title} style="object-fit: contain;
    width: 300px;
    height: 235px;">
            <img src="${card.iconBg}" style="z-index: 1;
    position: absolute;
    top: 4rem;
    left: 6rem;" width="150"/>
            <div class="position-absolute p-3 w-100 h-50" style="top:4rem; left:0.5rem;">
                
                <img src="${card.cloudBg}" />
                <p class = "position-absolute fs-5 fw-semibold text-light" style="left:7rem; top:1rem; z-index:2;">${card.age}</p>
            </div>
            <div class="position-absolute mt-4 pt-5 z-1" style="    top: 7rem;
    left: 0rem;
    text-align: center;
    padding: 20px;">
              <div>
                <h5 class="card-title fs-4 fw-bold pt-1">${card.title}</h5>
              <p class="fs-5 px-3 pt-3">${card.description}</p>
              </div>
            </div>
          </div>
        </div>`;
    $("#programCarousel").append(cardHtml);
  });


  $("#testimonialCarousel").html("");
  testimonials.forEach((t) => {
    const testimonialHTML = `
        <div class="testimonial-card">
                    <img src="images/testimonial/testimonial-shape-blue.png" alt="Testimonial background" class="testimonial-shape">
                    <div class="testimonial-content">
                        <img src="${t.image}" alt="${t.name}" class="testimonial-image">
                        <h3 class="testimonial-name">${t.name}</h3>
                        <p class="testimonial-title">${t.title}</p>
                        <p class="testimonial-text">
                            love this kindergarten! The teachers are incredibly caring and patient, creating a warm and welcoming environment for the children. The curriculum is well-rounded.
                        </p>
                    </div>
                </div>`;
    $("#testimonialCarousel").append(testimonialHTML);
  });

  updateCarouselTransform();
  updateCarouselTestimonialTransform();
}

function updateCarouselTransform() {
  const percent = currentIndex * (100 / cardsPerView);
  $("#programCarousel").css("transform", `translateX(-${percent}%)`);

}

function updateCarouselTestimonialTransform() {
    const percent = currentIndex * (100 / cardsPerView);
    $("#testimonialCarousel").css("transform", `translateX(-${percent}%)`);

}


$("#prevBtn").click(function () {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - cardsPerView;
  }
  updateCarouselTransform();
});


$("#nextBtn").click(function () {
    if (currentIndex + cardsPerView < cards.length) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      console.log("Running")
  updateCarouselTransform();
});


$("#prevBtnTestimonial").click(function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = testimonials.length - cardsPerView;
    }
    updateCarouselTestimonialTransform();
  });

$("#nextBtnTestimonial").click(function () {
    if (currentIndex + cardsPerView < testimonials.length) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      console.log("Running")
      updateCarouselTestimonialTransform();

});

// nextBtnTestimonial

$(window).on("resize", updateCardsPerView);

$(document).ready(() => {
  updateCardsPerView();
});
