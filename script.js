var navMenuTag = document.querySelectorAll('.nav-menu li a');
var interval;
 for (var i=0; i<navMenuTag.length; i++){
    navMenuTag[i].addEventListener('click',function (event){
    event.preventDefault();
    var targetSectionId = this.textContent.trim().toLowerCase()
    var element = document.getElementById(targetSectionId);
    interval = setInterval(scrollVertical,30,element)
    })
 }
 function scrollVertical (element){
    var targetSectionCordinate = element.getBoundingClientRect()
    if (targetSectionCordinate.top <= 0){
        clearInterval(interval);
        return
    }
    window.scrollBy(0,30)
 }

 /*****Fill bars Animation */

 var progressBars = document.querySelectorAll('.skill-progress > div')
 var skillContainer = document.getElementById('skill-con')
 var animationDone =  false
 window.addEventListener('scroll', checkScroll)
  function intializeBar () {
   for (var bar of progressBars) {
      bar.style.width = 0 +'%'
   }
  }
  function fillBars() {
   for (let bar of progressBars) {
      let targetWidth = bar.getAttribute('data-bar-width')
      let Currentwidth = 0
      let  interval = setInterval(function(){
                if(Currentwidth > targetWidth) {
                  clearInterval(interval)
                  return
                }
                Currentwidth++
                bar.style.width = Currentwidth + '%'
      }, 5)
   }
  }
  intializeBar()
 function checkScroll() {
   if(!animationDone && skillContainer.getBoundingClientRect().top < window.innerHeight) {
      animationDone = true
      fillBars()
   }
   if (window.scrollY < 20) {
      animationDone = false
      intializeBar()
   }

 }

 window.addEventListener('scroll', function () {
   var b=window.scrollY
   console.log(b)
 } )

