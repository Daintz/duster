let language = '';

document.addEventListener('DOMContentLoaded', () => {
  "use strict";


  setTimeout(() => {
    let boxone = document.querySelector('.boxone');
    let whatsapp = document.querySelector('.whatsapp');
    let p = document.createElement('p');
    boxone.style.height = "160px";
    p.className = "popap";
    p.textContent = ""
    if (language === '') {
      p.textContent = "No te quedes con las ganas de viajar, contactame ahora mismo";
      console.log(language);
    } else if (language === 'english') {
      p.textContent = "Do not stay with the desire to travel, contact me right now";
      console.log(language);
    }
    whatsapp.insertAdjacentElement('beforebegin', p);
    boxone.classList.add("boxone", "resp");
  }, 20000);

  /**
   * Preloader
   */
  const preloader = document.querySelector('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove();
    });
  }

  /**
   * Sticky header on scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    document.addEventListener('scroll', () => {
      window.scrollY > 100 ? selectHeader.classList.add('sticked') : selectHeader.classList.remove('sticked');
    });
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = document.querySelectorAll('#navbar a');

  function navbarlinksActive() {
    navbarlinks.forEach(navbarlink => {

      if (!navbarlink.hash) return;

      let section = document.querySelector(navbarlink.hash);
      if (!section) return;

      let position = window.scrollY + 200;

      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active');
      } else {
        navbarlink.classList.remove('active');
      }
    })
  }
  window.addEventListener('load', navbarlinksActive);
  document.addEventListener('scroll', navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll('#navbar a').forEach(navbarlink => {

    if (!navbarlink.hash) return;

    let section = document.querySelector(navbarlink.hash);
    if (!section) return;

    navbarlink.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });

  /**
   * Toggle mobile nav dropdowns
   */
  const navDropdowns = document.querySelectorAll('.navbar .dropdown > a');

  navDropdowns.forEach(el => {
    el.addEventListener('click', function(event) {
      if (document.querySelector('.mobile-nav-active')) {
        event.preventDefault();
        this.classList.toggle('active');
        this.nextElementSibling.classList.toggle('dropdown-active');

        let dropDownIndicator = this.querySelector('.dropdown-indicator');
        dropDownIndicator.classList.toggle('bi-chevron-up');
        dropDownIndicator.classList.toggle('bi-chevron-down');
      }
    })
  });

  /**
   * Scroll top button
   */
  const scrollTop = document.querySelector('.scroll-top');
  if (scrollTop) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: '.glightbox'
  });

  /**
   * Initiate pURE cOUNTER
   */
  new PureCounter();

  /**
   * Init swiper slider with 1 slide at once in desktop view
   */
  new Swiper('.slides-1', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

  /**
   * Init swiper slider with 3 slides at once in desktop view
   */
  new Swiper('.slides-3', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 40
      },

      1200: {
        slidesPerView: 3,
      }
    }
  });

  /**
   * Gallery Slider
   */
  new Swiper('.gallery-slider', {
    speed: 400,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll function and init
   */
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', () => {
    aos_init();
  });

});

   /**
   * Languages
   */
  function english() {
    language = 'english';
    console.log(language);
    const br = document.createElement('br');
    const welcome = document.querySelector('#navbar ul li:nth-child(1) a');
    const trips = document.querySelector('#navbar ul li:nth-child(2) a');
    const car = document.querySelector('#navbar ul li:nth-child(3) a');
    const photos = document.querySelector('#navbar ul li:nth-child(4) a');
    const changeidiom = document.querySelector('#navbar ul li:nth-child(5) a');
    const spanish = document.querySelector('#navbar ul li:nth-child(5) ul li:nth-child(1) a');
    const english = document.querySelector('#navbar ul li:nth-child(5) ul li:nth-child(2) a');
    const idiom = document.querySelector('#navbar ul li:nth-child(5) ul li:nth-child(4) a');
    const welcomemessage = document.querySelector('.btn-book-a-table');
    const mainmessage = document.querySelector('#hero div div div h2');
    const mainmessagetwo = document.querySelector('#hero div div div p');
    const contactme = document.querySelector('#hero div div div div a');
    const watchvideo = document.querySelector('#hero div div div div a:nth-child(2) span');
    const travel = document.querySelector('#travel div div:nth-child(1) h2');
    const titletravel = document.querySelector('#travel div div:nth-child(1) p');
    const about = document.querySelector('#about div div:nth-child(1) h2');
    const aboutitle = document.querySelector('#about div div:nth-child(1) p');
    const cardtitleone = document.querySelector('#about div div:nth-child(2) div div h4');
    const cardtitleone_ = document.querySelector('#about div div:nth-child(2) div div span');
    const cardtext = document.querySelector('#about div div:nth-child(2) div div p');
    const cardtitletwo = document.querySelector('#comfort div div:nth-child(2) h4');
    const cardtitletwo_ = document.querySelector('#comfort div div:nth-child(2) span');
    const cardtitletwotext = document.querySelector('#comfort div div:nth-child(2) p');
    const cardtitlethree = document.querySelector('#about div div:nth-child(3) div div:nth-child(2) h4');
    const cardtitlethree_ = document.querySelector('#about div div:nth-child(3) div div:nth-child(2) span');
    const cardtitlethreetext = document.querySelector('#about div div:nth-child(3) div div:nth-child(2) p');
    const events = document.querySelector('#events div div h2');
    const eventstitle = document.querySelector('#events div div p');
    const footerLocationH4 = document.querySelector('#footer div div div div h4');
    const footerLocationP = document.querySelector('#footer div div div div p');
    const footerReservationH4 = document.querySelector('#reservation div h4');
    const footerReservationP = document.querySelector('#reservation div p');
    const footerScheduleH4 = document.querySelector('#footer div div div:nth-child(3) div h4');
    const footerScheduleP = document.querySelector('#footer div div div:nth-child(3) div p');
    const footerWspH4 = document.querySelector('#footer div div div:nth-child(4) h4');
    const footerCopyright = document.querySelector('#footer .container:nth-child(2) div');
    const popap = document.querySelector('.popap');
    if (popap) {
      popap.textContent = "Do not stay with the desire to travel, contact me right now";
    }
    welcome.textContent = "Welcome";
    trips.textContent = "Trips";
    car.textContent = "Car";
    photos.textContent = "Photos";
    changeidiom.textContent = "Languages";
    spanish.textContent = "Spanish";
    english.textContent = "English";
    idiom.textContent = "Change the language of the page";
    welcomemessage.textContent = "Contact me";
    mainmessage.textContent = `Welcome, I am available for your adventure!`;
    mainmessagetwo.textContent = `On this page you know more in detail what sites I can offer you for the city of Medellin personalized or any place you need.`;
    contactme.textContent = "Contact me";
    watchvideo.textContent = "Watch video";
    travel.textContent = "Trips";
    titletravel.textContent = "The most touristic places in Medellin";
    about.textContent = "Car";
    aboutitle.textContent = "Information about the car";
    cardtitleone.textContent = "Security";
    cardtitleone_.textContent = "The best security for you";
    cardtext.textContent = "“The Duster vehicle, with its test released in August 2021, has the same active and passive safety content as the vehicle that obtained four stars in adult protection and 3 stars in child protection, in tests carried out by the same institution. in 2019.”";
    cardtitletwo.textContent = "Comfort";
    cardtitletwo_.textContent = "Comfort is paramount";
    cardtitletwotext.textContent = "Start enjoying all the comfort thanks to its ample interior space, since it has a trunk of up to 475 liters, ideal for accommodating the luggage you need: adventure or a family trip. You can even achieve up to 1,636 liters of storage in the rear with the 1/3 and 2/3 folding seats*. In addition, its ABS brakes, driver and passenger airbags, as well as its 4x4 technology** will keep you and your your family safe at all times. Definitely, the Renault DUSTER offers you everything you need to start enjoying life your way.";
    cardtitlethree.textContent = "Baggage";
    cardtitlethree_.textContent = "Trolley capacity";
    cardtitlethreetext.textContent = "The Renault Duster is the pure expression of comfort. Practical and functional, its cabin can hold up to 5 people and provides the largest capacity in its segment: 475 L. of space in the trunk. With the rear seat folded, the available space reaches 1636 L.";
    events.textContent = "Photos";
    eventstitle.textContent = "Travel photos";
    footerLocationH4.textContent = "Location";
    footerLocationP.innerHTML = `Medellin, Antioquia.<br>Colombia.<br>`;
    footerReservationH4.textContent = `Reservations`;
    footerReservationP.innerHTML = `<strong>Number:</strong> +57 324 683 0741<br><strong>Email:</strong> leonardolopez603@hotmail.com<br>`;
    footerScheduleH4.textContent = `Available schedule`;
    footerScheduleP.innerHTML = `<strong>Monday to Sunday</strong><br>`;
    footerWspH4.textContent = `Contact me`;
    footerCopyright.innerHTML = `&copy; Copyright <strong><span>Leonardo Lopez</span></strong>. All rights reserved`;
  }

  function spanish() {
    location.reload();
  }
