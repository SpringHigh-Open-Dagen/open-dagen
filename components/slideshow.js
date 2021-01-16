class Slideshow extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <style>
        * {box-sizing:border-box}

        /* Slideshow container */
        .slideshow-container {
          width: 100%;
          height: 100%;
          position: relative;
          margin: auto;
        }

        .mySlides {
          display: none;
          width: 100%;
          height: 100%;
        }

        .mySlides img {
          width: 100%;
          height: 100%;
        }

        /* Next & previous buttons */
        .prev, .next {
          cursor: pointer;
          position: absolute;
          top: 50%;
          width: auto;
          margin-top: -22px;
          padding: 16px;
          color: white;
          font-weight: bold;
          font-size: 18px;
          transition: 0.6s ease;
          border-radius: 0 3px 3px 0;
          user-select: none;
        }

        /* Position the "previous button" to the left */
        .prev {
          left: 0;
          border-radius: 3px 0 0 3px;
        }

        /* Position the "next button" to the right */
        .next {
          right: 0;
          border-radius: 3px 0 0 3px;
        }

        /* On hover, add a black background color with a little bit see-through */
        .prev:hover, .next:hover {
          background-color: rgba(0,0,0,0.8);
        }

        /* Caption text */
        .text {
          color: #f2f2f2;
          font-size: 15px;
          padding: 8px 12px;
          position: absolute;
          bottom: 8px;
          width: 100%;
          text-align: center;
        }

        .text1 {
          color: #0a0000;
          font-size: 15px;
          padding: 8px 12px;
          position: absolute;
          bottom: 8px;
          width: 100%;
          text-align: center;
        }

        /* Number text (1/3 etc) */
        .numbertext {
          color: #0a0000;
          font-size: 12px;
          padding: 8px 12px;
          position: absolute;
          top: 0;
        }

        .active, .dot:hover {
          background-color: #717171;
        }

        /* Fading animation */
        .fade {
          -webkit-animation-name: fade;
          -webkit-animation-duration: 1.5s;
          animation-name: fade;
          animation-duration: 1.5s;
        }

        @-webkit-keyframes fade {
          from {opacity: .4}
          to {opacity: 1}
        }

        @keyframes fade {
          from {opacity: .4}
          to {opacity: 1}
        }
      </style>

      <!-- Slideshow container -->
      <div class="slideshow-container">
        <!-- Full-width images with number and caption text -->
        <div class="mySlides fade">
          <div class="numbertext">1 / 4</div>
          <img src="https://www.springhigh.nl/fileadmin/_processed_/9/1/csm_Website_1_597407e81e.jpg">
          <div class="text1">Caption Text</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">2 / 4</div>
          <img src="https://images1.persgroep.net/rcs/G48NhAo6vJV-lxck38kq5GYZwqk/diocontent/131148409/_crop/0/0/1580/893/_fitwidth/763?appId=93a17a8fd81db0de025c8abd1cca1279&quality=0.8">
          <div class="text">Caption Two</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">3 / 4</div>
          <img src="https://www.curriculum.nu/assets/uploads/2018/09/Spring-High-aan-de-slag-voor-Curriculum.nu_.png">
          <div class="text">Caption Three</div>
        </div>

        <div class="mySlides fade">
          <div class="numbertext">4 / 4</div>
          <img src="https://www.springhigh.nl/fileadmin/_processed_/1/8/csm_BI3C9848_397b9b8857.jpg">
          <div class="text">Caption four</div>
        </div>

        <!-- Next and previous buttons -->
        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
        <a class="next" onclick="plusSlides(1)">&#10095;</a>

      </div>
      <br>

      <div style="text-align:center">
        <span class="dot" onclick="currentSlide(1)"></span> 
        <span class="dot" onclick="currentSlide(2)"></span> 
        <span class="dot" onclick="currentSlide(3)"></span> 
      </div>
      `;
  }
}

customElements.define("sh-slideshow", Slideshow);

var slideIndex = 0;
revolveSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function revolveSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(revolveSlides, 5000); // Change image every 5 seconds
}

