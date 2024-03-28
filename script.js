const options = {
    animateHistoryBrowsing: false,
    animationSelector: '[class*="transition-"]',
    containers: ["#swup"],
    cache: true,
    linkSelector: 'a[href]'
    // linkSelector:
    //   'a[href^="' +
    //   window.location.origin +
    //   '"]:not([data-no-swup]), a[href^="/"]:not([data-no-swup])',
    // skipPopStateHandling: function(event) {
    //   if (event.state && event.state.source == "swup") {
    //     return false;
    //   }
    //   return true;
    // }
  };

const swup = new Swup(options);

const imageWrapper = document.querySelector('.image-wrapper')
const imageItems = document.querySelectorAll('.image-wrapper > *')
const imageLength = imageItems.length
const perView = 3
let totalScroll = 0
const delay = 5000

imageWrapper.style.setProperty('--per-view', perView)
for(let i = 0; i < perView; i++) {
  imageWrapper.insertAdjacentHTML('beforeend', imageItems[i].outerHTML)
}

let autoScroll = setInterval(scrolling, delay)

function scrolling() {
  totalScroll++
  if(totalScroll == imageLength + 1) {
    clearInterval(autoScroll)
    totalScroll = 1
    imageWrapper.style.transition = '0s'
    imageWrapper.style.left = '0'
    autoScroll = setInterval(scrolling, delay)
  }
  const widthEl = document.querySelector('.image-wrapper > :first-child').offsetWidth + 24
  imageWrapper.style.left = `-${totalScroll * widthEl}px`
  imageWrapper.style.transition = '3s'
}