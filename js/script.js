$(".sidenav a").on("click", function() {
    $(".sidenav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
});

$(".navv a").on("click", function() {
    $(".navv").find(".top").removeClass("top");
    $(this).parent().addClass("top");
});

var typed = new Typed(".type", {
    strings: [
        "Tech-Bro",
        "Developer",
        "Hard-Worker"
    ],
    typeSpeed: 60,
    backSpeed: 60,
    loop: true
});


const counter=document.querySelectorAll('.counter');
 function counterUp(){ 
counter.forEach((counter) =>{
    counter.innerText='0';

    const updateCounter = ()=>{
        const target = +counter.getAttribute('data-target');
        const c =+counter.innerText;

        const increment = target/250;

        if(c < target){
            counter.innerText=`${Math.ceil(c + increment)}`;
            setTimeout(updateCounter,1);
        }
        else{
            counter.innerText=target;
        }
    };
    updateCounter();
});
 }

 $(document).ready(function(){
     $(this).scrollTop(0);
 });


//  $(function() {
//     //caches a jQuery object containing the header element
//     var header = $(".abt");
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();

//         if (scroll >1 && scroll <500 ) {
//             header.removeClass('.abt').addClass(".active");
//         } else {
//             header.removeClass(".abt").addClass('active');
//         }
//     });
// });