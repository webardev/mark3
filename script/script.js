

// cardGrid.addEventListener("click", ()=>{
//     if(workFirst.style.display == "grid"){
//     workFirst.style.display = "none";
//     workNext.style.display = "block";
//     }
//     else{
//     workFirst.style.display = "grid"
//     workNext.style.display = "none"
//     }
// })




// Typed......................
        var typed = new Typed('#element', {
            strings: ['Web Developer.', 'Graphic Designer.', 'Designer &amp; Developer.'],
            typeSpeed: 80,
            backSpeed: 10,
            smartBackspace: true,
            // loop: true,
        });
// Typed......................




let logo = document.querySelector(".logo-img")

logo.addEventListener("mouseover", ()=>{
        logo.src = "./images/logo2.png";
})

logo.addEventListener("mouseout", ()=>{
        logo.src = "./images/logo.png";
})


const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show');
        }
    });
});

let hidden = document.querySelectorAll('.hidden')
hidden.forEach((el)=> observer.observe(el))







let navbtn = document.querySelector(".nav-btn")
let sideNav = document.querySelector(".side-nav")
let menuBtn = document.querySelector(".menu-btn")
let sideContent = document.querySelector(".side-nav-content")



navbtn.addEventListener("click", ()=>{
    if(sideNav.style.right == "0%"){
        sideNav.style.right = "-100%";
        menuBtn.src = "./images/menu.png";
        // sideNav.style.transform = "skew(-20deg)"
        sideNav.style.borderBottomLeftRadius = "2000px"
        sideNav.style.borderTopLeftRadius = "2000px"
        // sideContent.style.transform = "translateX(100px)"





    }
    else{
        sideNav.style.right = "0%"
        menuBtn.src = "./images/close.png";
        // sideNav.style.transform = "skew(0deg)"
        sideNav.style.borderBottomLeftRadius = "0px"
        sideNav.style.borderTopLeftRadius = "0px"
        // sideContent.style.transform = "none"



    }

})









            const btns = document.querySelectorAll(".btn");

            btns.forEach((btn) => {
                btn.addEventListener("mousemove", function (e) {
                    const position = btn.getBoundingClientRect();
                    const x = e.pageX - position.left - position.width / 2;
                    const y = e.pageY - position.top - position.height / 2;

                    btn.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
                });
            });

            btns.forEach((btn) => {
                btn.addEventListener("mouseout", function (e) {
                    btn.children[0].style.transform = "translate(0px, 0px)";
                });
            });


            



        document.addEventListener("scroll", function(){
                const navSide = document.querySelector(".side-nav")


                if (window.scrollY > 0) {
                    // navSide.classList.add('side-navar')
                    navSide.style.backgroundColor = "#e2f4ff"
                }
                else {
                    // navSide.classList.remove('side-navar')
                    navSide.style.backgroundColor = "#F6F1F1"
                }
                console.log("dsadas")
            })
            





let workCursor = document.querySelector(".work-cursor")
let work = document.querySelector(".work-first")
let work1 = document.querySelector(".work1")
let work2 = document.querySelector(".work2")
let work3 = document.querySelector(".work3")
let work4 = document.querySelector(".work4")


function isTouchDevice(){
    try{
        document.createEvent("touchEvent");
        return true;
    }
    catch(e){
        return false;
    }
}

const move = (e)=>{
    try{
        var x = !isTouchDevice() ? e.pageX : e.touches
        [0].pageX;
        var y = !isTouchDevice() ? e.pageY : e.touches
        [0].pageY;
    }
    catch(e){}
    workCursor.style.left = x + "px";
    workCursor.style.top = y + "px";
}

work.addEventListener("mousemove", (e)=>{
    move(e);
    workCursor.style.opacity = "1"
    
});




work.addEventListener("mouseleave", (e)=>{
    workCursor.style.opacity = "0"
        workCursor.style.width = "0rem"
    workCursor.style.height = "0rem"
});





work1.addEventListener("mousemove", ()=>{
    workCursor.style.backgroundImage = "url(./images/work/burgerbar.jpg)";
    workCursor.style.width = "28rem"
    workCursor.style.height = "16rem"
    workCursor.classList.add('work-hover')
})


work2.addEventListener("mousemove", ()=>{
    workCursor.style.backgroundImage = "url(./images/work/playstation.jpg)";
    workCursor.style.width = "28rem"
    workCursor.style.height = "16rem"
})


work3.addEventListener("mousemove", ()=>{
    workCursor.style.backgroundImage = "url(./images/work/scp.jpg)";
    workCursor.style.width = "28rem"
    workCursor.style.height = "16rem"
})


work4.addEventListener("mousemove", ()=>{
    workCursor.style.backgroundImage = "url(./images/work/playstation.jpg)";
    workCursor.style.width = "28rem"
    workCursor.style.height = "16rem"
})




let homeBtn = document.querySelector(".side-home")
let aboutBtn = document.querySelector(".side-about")
let workBtn = document.querySelector(".side-work")
let contactBtn = document.querySelector(".side-contact")

let navBtn = document.querySelectorAll("#nav-btn");

navBtn.forEach(btn => {
    btn.addEventListener("click", () => {
            if(sideNav.style.right == "0%"){
        sideNav.style.right = "-100%";
        menuBtn.src = "./images/menu.png";
        // sideNav.style.transform = "skew(-20deg)"
        sideNav.style.borderBottomLeftRadius = "3000px"
        sideNav.style.borderTopLeftRadius = "3000px"



    }
    else{
        sideNav.style.right = "0%"
        menuBtn.src = "./images/close.png";
        // sideNav.style.transform = "skew(0deg)"
        sideNav.style.borderBottomLeftRadius = "0px"
        sideNav.style.borderTopLeftRadius = "0px"
    }
    });
});






let cardList = document.querySelector(".card-list")
let cardGrid = document.querySelector(".card-grid")
let workFirst = document.querySelector(".work-first")
let workNext = document.querySelector(".work-next")


cardList.addEventListener("click", ()=>{
    workFirst.style.display = "block";
    workNext.style.display = "none";
})

cardGrid.addEventListener("click", ()=>{
    workFirst.style.display = "none";
    workNext.style.display = "grid";
})








let cards = document.querySelector(".cardzs")
let des = document.querySelector(".des")
let about = document.querySelector(".about-btn")

window.addEventListener("scroll", ()=>{

  let value = window.scrollY;

  cards.style.marginLeft = value * .3 + 'px'
  des.style.marginRight = value * .3 + 'px'


})


  if (window.isIntersecting){
    about.style.width = "90rem"
  }