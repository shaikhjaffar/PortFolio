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