var audio=document.getElementById("audioPlayer"),loader=document.getElementById("preloader");function settingtoggle(){document.getElementById("setting-container").classList.toggle("settingactivate"),document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow"),document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow")}function playpause(){!1==document.getElementById("switchforsound").checked?audio.pause():audio.play()}function visualmode(){document.body.classList.toggle("light-mode"),document.querySelectorAll(".needtobeinvert").forEach(function(e){e.classList.toggle("invertapplied")})}window.addEventListener("load",function(){loader.style.display="none",document.querySelector(".hey").classList.add("popup")});let emptyArea=document.getElementById("emptyarea"),mobileTogglemenu=document.getElementById("mobiletogglemenu");function hamburgerMenu(){document.body.classList.toggle("stopscrolling"),document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu"),document.getElementById("burger-bar1").classList.toggle("hamburger-animation1"),document.getElementById("burger-bar2").classList.toggle("hamburger-animation2"),document.getElementById("burger-bar3").classList.toggle("hamburger-animation3")}function hidemenubyli(){document.body.classList.toggle("stopscrolling"),document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu"),document.getElementById("burger-bar1").classList.remove("hamburger-animation1"),document.getElementById("burger-bar2").classList.remove("hamburger-animation2"),document.getElementById("burger-bar3").classList.remove("hamburger-animation3")}const sections=document.querySelectorAll("section"),navLi=document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),mobilenavLi=document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");window.addEventListener("scroll",()=>{let e="";sections.forEach(t=>{let o=t.offsetTop;t.clientHeight,pageYOffset>=o-200&&(e=t.getAttribute("id"))}),mobilenavLi.forEach(t=>{t.classList.remove("activeThismobiletab"),t.classList.contains(e)&&t.classList.add("activeThismobiletab")}),navLi.forEach(t=>{t.classList.remove("activeThistab"),t.classList.contains(e)&&t.classList.add("activeThistab")})}),console.log("%c Designed and Developed by Herish Chaniyara. ","background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;");let mybutton=document.getElementById("backtotopbutton");function scrollFunction(){document.body.scrollTop>400||document.documentElement.scrollTop>400?mybutton.style.display="block":mybutton.style.display="none"}function scrolltoTopfunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()},document.addEventListener("contextmenu",function(e){"IMG"===e.target.nodeName&&e.preventDefault()},!1);let Pupils=document.getElementsByClassName("footer-pupil"),pupilsArr=Array.from(Pupils),pupilStartPoint=-10,pupilRangeX=20,pupilRangeY=15,mouseXStartPoint=0,mouseXEndPoint=window.innerWidth,currentXPosition=0,fracXValue=0,mouseYEndPoint=window.innerHeight,currentYPosition=0,fracYValue=0,mouseXRange=mouseXEndPoint-mouseXStartPoint;const mouseMove=e=>{fracXValue=(currentXPosition=e.clientX-mouseXStartPoint)/mouseXRange,fracYValue=(currentYPosition=e.clientY)/mouseYEndPoint;let t=pupilStartPoint+fracXValue*pupilRangeX,o=pupilStartPoint+fracYValue*pupilRangeY;pupilsArr.forEach(e=>{e.style.transform=`translate(${t}px, ${o}px)`})},windowResize=e=>{mouseXEndPoint=window.innerWidth,mouseYEndPoint=window.innerHeight,mouseXRange=mouseXEndPoint-mouseXStartPoint};window.addEventListener("mousemove",mouseMove),window.addEventListener("resize",windowResize);

        var aText = [
            "There are only 10 types",
            "of people in the world:",
            "Those who understand binary,",
            "and those who don't",
        ];
        var iSpeed = 100; // time delay of print out
        var iIndex = 0; // start printing array at this position
        var iArrLength = aText[0].length; // the length of the text array
        var iScrollAt = 20; // start scrolling up at this many lines

        var iTextPos = 0; // initialize text position
        var sContents = ''; // initialize contents variable
        var iRow; // initialize current row

        function typewriter() {
            sContents = ' ';
            iRow = Math.max(0, iIndex - iScrollAt);
            var destination = document.getElementById("typedtext");

            while (iRow < iIndex) {
                sContents += aText[iRow++] + '<br />';
            }
            destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
            if (iTextPos++ == iArrLength) {
                iTextPos = 0;
                iIndex++;
                if (iIndex != aText.length) {
                    iArrLength = aText[iIndex].length;
                    setTimeout(typewriter, 500);
                } else {
                    // Restart after 10 seconds when all texts have been typed
                    setTimeout(function() {
                        iIndex = 0;
                        iArrLength = aText[0].length;
                        typewriter();
                    }, 5000);
                }
            } else {
                setTimeout(typewriter, iSpeed);
            }
        }

        typewriter();
// Tech Stack Carousel
class TechStackCarousel {
    constructor() {
        this.wrapper = document.getElementById('techStackWrapper');
        this.prevBtn = document.getElementById('techPrev');
        this.nextBtn = document.getElementById('techNext');
        this.indicators = document.getElementById('techIndicators');
        this.items = this.wrapper.querySelectorAll('.tech-stack-box');
        this.itemsPerView = this.getItemsPerView();
        this.currentIndex = 0;
        this.totalSlides = Math.ceil(this.items.length / this.itemsPerView);

        this.init();
    }

    getItemsPerView() {
        const screenWidth = window.innerWidth;
        if (screenWidth < 576) return 2;
        if (screenWidth < 768) return 3;
        if (screenWidth < 992) return 4;
        if (screenWidth < 1200) return 5;
        return 6;
    }

    init() {
        this.createIndicators();
        this.bindEvents();
        this.updateCarousel();
        this.startAutoScroll();
    }

    createIndicators() {
        this.indicators.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = `indicator ${i === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => this.goToSlide(i));
            this.indicators.appendChild(indicator);
        }
    }

    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Pause auto-scroll on hover
        this.wrapper.addEventListener('mouseenter', () => this.stopAutoScroll());
        this.wrapper.addEventListener('mouseleave', () => this.startAutoScroll());

        // Handle resize
        window.addEventListener('resize', () => {
            this.itemsPerView = this.getItemsPerView();
            this.totalSlides = Math.ceil(this.items.length / this.itemsPerView);
            this.currentIndex = Math.min(this.currentIndex, this.totalSlides - 1);
            this.createIndicators();
            this.updateCarousel();
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    updateCarousel() {
        const itemWidth = this.items[0].offsetWidth + 32; // 32px for gap
        const translateX = -this.currentIndex * itemWidth * this.itemsPerView;

        this.wrapper.style.transform = `translateX(${translateX}px)`;

        // Update indicators
        this.indicators.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });

        // Update buttons
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.totalSlides - 1;
    }

    startAutoScroll() {
        this.autoScrollInterval = setInterval(() => {
            this.next();
        }, 3000);
    }

    stopAutoScroll() {
        clearInterval(this.autoScrollInterval);
    }
}

// Projects Carousel
class ProjectsCarousel {
    constructor() {
        this.wrapper = document.getElementById('projectBoxesDiv');
        this.prevBtn = document.getElementById('projectPrev');
        this.nextBtn = document.getElementById('projectNext');
        this.indicators = document.getElementById('projectIndicators');
        this.items = this.wrapper.querySelectorAll('.project-box-wrapper');
        this.currentIndex = 0;
        this.totalSlides = this.items.length;

        this.init();
    }

    init() {
        if (this.totalSlides <= 1) {
            this.hideNavigation();
            return;
        }

        this.createIndicators();
        this.bindEvents();
        this.updateCarousel();
        this.startAutoScroll(); // Start auto-scrolling
    }

    hideNavigation() {
        this.prevBtn.style.display = 'none';
        this.nextBtn.style.display = 'none';
        this.indicators.style.display = 'none';
    }

    createIndicators() {
        this.indicators.innerHTML = '';
        for (let i = 0; i < this.totalSlides; i++) {
            const indicator = document.createElement('div');
            indicator.className = `indicator ${i === 0 ? 'active' : ''}`;
            indicator.addEventListener('click', () => this.goToSlide(i));
            this.indicators.appendChild(indicator);
        }
    }

    bindEvents() {
        this.prevBtn.addEventListener('click', () => this.prev());
        this.nextBtn.addEventListener('click', () => this.next());

        // Pause auto-scroll on hover
        this.wrapper.addEventListener('mouseenter', () => this.stopAutoScroll());
        this.wrapper.addEventListener('mouseleave', () => this.startAutoScroll());

        // Touch/swipe support for mobile
        let startY = 0;
        let endY = 0;

        this.wrapper.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
        });

        this.wrapper.addEventListener('touchend', (e) => {
            endY = e.changedTouches[0].clientY;
            const diff = startY - endY;

            if (Math.abs(diff) > 50) {
                if (diff > 0) {
                    this.next();
                } else {
                    this.prev();
                }
            }
        });
    }

    next() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
        this.updateCarousel();
    }

    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
        this.updateCarousel();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
    }

    updateCarousel() {
        const itemHeight = this.items[0].offsetHeight + 32; // 32px for gap
        const translateY = -this.currentIndex * itemHeight;

        this.wrapper.style.transform = `translateY(${translateY}px)`;

        // Update indicators
        this.indicators.querySelectorAll('.indicator').forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });

        // Update buttons
        this.prevBtn.disabled = this.currentIndex === 0;
        this.nextBtn.disabled = this.currentIndex === this.totalSlides - 1;
    }

    startAutoScroll() {
        this.autoScrollInterval = setInterval(() => {
            this.next();
        }, 3000); // Scroll every 3 seconds, matching TechStackCarousel
    }

    stopAutoScroll() {
        clearInterval(this.autoScrollInterval);
    }
}

// Initialize carousels when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Wait for images to load before initializing
    setTimeout(() => {
        const techCarousel = new TechStackCarousel();
        const projectCarousel = new ProjectsCarousel();
    }, 500);
});

// Keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft' && document.activeElement.closest('.tech-stack-carousel')) {
        document.getElementById('techPrev').click();
    } else if (e.key === 'ArrowRight' && document.activeElement.closest('.tech-stack-carousel')) {
        document.getElementById('techNext').click();
    } else if (e.key === 'ArrowUp' && document.activeElement.closest('.projects-carousel')) {
        document.getElementById('projectPrev').click();
    } else if (e.key === 'ArrowDown' && document.activeElement.closest('.projects-carousel')) {
        document.getElementById('projectNext').click();
    }
});