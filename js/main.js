$(document).ready(function(){
    var options = {
        strings: ['Student', 'Web Designer'],
        typeSpeed: 40,
        backSpeed: 40,
        loop: true
    };

    var typed = new Typed('.element', options)


    $('.aboutStickymenu').waypoint(function(direction){
        if(direction == 'down'){
            $('#nav').addClass('sticky');
        }
        else{
            $('#nav').removeClass('sticky');
        }
    })
})



function openNav() {
    document.getElementById('hamburger-overlay').style.width = '100%';
}
function closeNav() {
    document.getElementById('hamburger-overlay').style.width = '0';
}