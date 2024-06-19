// ----------Custom Cursor----------
let mouse = new Mouse({

  mouse : 'defult',
  // To change the type of mouse
  // Accepts 3 options : defult / cirle / point
  // default option : cirle
  
  color: 'var(--skin-color)',
  // To change the color of the mouse
  // default option : #ffda79
  
  mouseHover : false,
  // Adds a hover effect to the element on which the mouse is on
  // Accepts 3 options : false / border / background
  // default option : false
  
  mousePointer: false,
  // To show or hide the mouse from the page
  // Accepts 2 options : false / true
  // default option : false
  
  el: 'a,button,p,input,h1,h2,h3,h4,h5,h6,img,label,span,i,textarea',
  // The items you want to hover effect
  // accept any item
  // , Should be placed between the elements
  // default option : a
  
  el_hover: true,
  // Activate or disable hover effect on items
  // Accepts 2 options : false / true
  // default option : true
  
  mouse_clicked: true,
  // To activate or disable the effect of clicking on the page
  // Accepts 2 options : false / true
  // default option : true
  
  clrChanged : true,
  // Change the color of the mouse automatically
  // Accepts 2 options : false / true
  // default option : false
  
});
mouse.mouse();

// ----------Cursor Tracker Bubble animtion----------
var mouseX=window.innerWidth/2,
    mouseY=window.innerHeight/2;

var circle = { 
     el:$('#cursor-tracker'),
     x:window.innerWidth/2, 
     y:window.innerHeight/2, 
     w:80, 
     h:80, 
     update:function(){
                   l = this.x-this.w/2; 
                   t = this.y-this.h/2; 
                   this.el.css({ 
                            'transform':
                            'translate3d('+l+'px,'+t+'px, 0)' });
                           }
}

$(window).mousemove (function(e){
    mouseX = 83;
    mouseY = 670;
})

setInterval (move,1000/60)
function move(){
  circle.x = lerp (circle.x, mouseX, 0.1);
  circle.y = lerp (circle.y, mouseY, 0.1);
  circle.update() 
}

function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}

// ----------Toggle Display and Chase on Check and Uncheck----------

const checkBubble = document.querySelector(".click-bubble"),
      bubbleContainer = document.querySelector(".bubble-container");


      function toggleChase(){

            // Toggle Tips
        var toggleTip = document.querySelector(".cursor-tracker-tooltip");
        if (toggleTip.style.opacity == "0") {
          toggleTip.style.opacity = "1"
        }
        else{
          toggleTip.style.opacity = "0";
        }

              // toggleChase
            if (checkBubble.checked == true) {
              $(window).mousemove (function(e){
                        mouseX = e.clientX;
                        mouseY = e.clientY;
                  })
            }
            else{
                  $(window).mousemove (function(e){
                        mouseX = 80;
                        mouseY = 670;
              })
                }
          }

function toggleDisplay() {
  checkBubble.style.visibility = "visible";
}


// ----------Logo----------
const logoCard = document.querySelector('.logo-card'),
	logoCardInner = document.querySelector('.logo-card-inner'),
	logoCardRush = document.querySelector('.logo-card-rush');

function mouseEnterBlur(){
	logoCard.classList.add("card2");
	logoCardInner.classList.add("blur2");
	logoCardRush.innerHTML = "RUSHER";
}
function mouseLeaveBlur(){
	logoCard.classList.remove("card2");
	logoCardInner.classList.remove("blur2");
	logoCardRush.innerHTML = "";
}
/*---------- Nav Bar --- Hamburger Menu ----------*/
/*---------- Small Bouncing Balls Animation ----------*/
// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.querySelector(".bouncing-balls").append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

// ----------About----------
// var j = 0;
// let i = document.getElementById('social-menu').childNodes;
// let expan = document.querySelector('.social-container');
// expan.addEventListener('click', expand)

// function expand(){
// 	if (j == 0) {
// 		document.getElementById('social-add').style.transform = 'rotate(45deg)';
// 		document.getElementById('social-menu').style.transform = 'scale(1)';
// 		i[1].style.transform = 'translateY(-80px)';
// 		i[3].style.transform = 'translate(70px,-40px)';
// 		i[5].style.transform = 'translate(70px,40px)';
// 		i[7].style.transform = 'translateY(75px)';
// 		i[9].style.transform = 'translate(-70px,40px)';
// 		i[11].style.transform = 'translate(-70px,-40px)';
// 		j = i;
// 	}else{
// 		document.getElementById('social-add').style.transform = 'rotate(0deg)';
// 		document.getElementById('social-menu').style.transform = 'scale(0.9)';
// 		i[1].style.transform = 'translateY(0)';
// 		i[3].style.transform = 'translate(0)';
// 		i[5].style.transform = 'translate(0)';
// 		i[7].style.transform = 'translateY(0)';
// 		i[9].style.transform = 'translate(0)';
// 		i[11].style.transform = 'translate(0)';
// 		j = 0;
// 	}
// }


// ********** Tooltips Activator ********** 

const styleSwitcher = document.querySelector(".style-switcher-toggler"),

      ActivatorContainer = document.querySelector(".activator-container"),
      ActivatorToolTip = document.querySelector(".activator-tooltips"),
      ActivatorBtn = document.querySelector(".tooltip-btn"),

      fixedToolTips = document.querySelector(".fixed-tooltips"),

      styleToolTip = document.querySelector(".style-tooltip"),

      modeToolTip = document.querySelector(".mode-tooltip"),

      HamToolTipContainer = document.querySelector(".ham-container"),
      HamToolTip = document.querySelector(".ham-tooltip"),

      TeamContainer = document.querySelector(".team-container"),
      TeamToolTip = document.querySelector(".team-tooltip"),

      CopyrightContainer = document.querySelector(".copyright-container"),
      CopyrightToolTip = document.querySelector(".copyright-tooltip"),

      CursorTrackerToolTip = document.querySelector(".cursor-tracker-tooltip");

  function toggleTips(){

    HamToolTipContainer.classList.toggle("tc-hide");
    HamToolTip.classList.toggle("tt-hide");

    TeamContainer.classList.toggle("tc-hide");
    TeamToolTip.classList.toggle("tt-hide");

    CopyrightContainer.classList.toggle("tc-hide");
    CopyrightToolTip.classList.toggle("tt-hide");

    ActivatorContainer.classList.toggle("tc-hide");
    ActivatorToolTip.classList.toggle("tt-hide");

    CursorTrackerToolTip.classList.toggle("tt-hide");

    styleToolTip.classList.toggle("tt-hide");

    modeToolTip.classList.toggle("tt-hide");

    // Background Color Change on Click
    ActivatorBtn.classList.toggle("tooltip-btn-green");

  }

  // *Fixed Tooltips *

    // Toggle Hide/unhide Tips
  function styleTipReveal() {
    styleToolTip.style.visibility = "visible";
    styleToolTip.style.opacity = "1";
  }
  function styleTipHide() {
    styleToolTip.style.visibility = "hidden";
    styleToolTip.style.opacity = ".4";
  }
  function modeTipReveal() {
    modeToolTip.style.visibility = "visible";
    modeToolTip.style.opacity = "1";
  }
  function modeTipHide() {
    modeToolTip.style.visibility = "hidden";
    modeToolTip.style.opacity = ".4";
  }

// Hide Fixed Container on click
  styleSwitcher.addEventListener("click", () =>{
    fixedToolTips.classList.toggle("ft-hide");
  })


  // ********** Light Modal **********
  // Popup on Load
  const popupModal = document.querySelector("#onload-popup"),
        popupBtn = document.querySelector(".popup-light-modal-btn");
  window.onload = function popupMessage() {
    popupBtn.click();
}