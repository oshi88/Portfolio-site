const scrollOutput = document.getElementById("scroll");
const winHeight = window.innerHeight;
let scrollheight;

window.onscroll = function(){aboutMe();}
window.onload = function(){DayNightSwitch();currentViewHeight()}

/*window.addEventListener('resize',)*/
function currentViewHeight(){  
    scrollHeight = Math.max(
  document.body.scrollHeight, document.documentElement.scrollHeight,
  document.body.offsetHeight, document.documentElement.offsetHeight,
  document.body.clientHeight, document.documentElement.clientHeight
);
}




$(document).ready(function(){

    if(window.innerWidth<0){/*800*/
       
        
    }else{
        $(".item-01").hover(function(){
    $(this).css("background-color", "rgb(40,40,40)");
      $(".gitBtn-01").css("opacity", "1"); 
            
    }, function(){
    $(this).css("background-color", "rgb(20,20,20)");
            $(".gitBtn-01").css("opacity", "0");
  });
    
  $(".item-02").hover(function(){
      
    $(this).css("background-color", "rgb(40,40,40)");
     $(".gitBtn-02").css("opacity", "1"); 
    }, function(){
    $(this).css("background-color", "rgb(20,20,20)");
      $(".gitBtn-02").css("opacity", "0"); 
  });
    }
    
  
        
    
  });

function DayNightSwitch(){
    btn = document.getElementById("darkmodeBtn");
    MoonSunLogo = document.getElementById("MoonSunID");
    cssRoot = document.querySelector(':root');
    if(MoonSunLogo.style.marginLeft === "55%"){                         /*--Day--*/
        MoonSunLogo.style.marginLeft = "0%";
        MoonSunLogo.src = "vector/final/sun.png"
        btn.style.backgroundImage = "url(vector/final/sky_clouds.jpg)"
        btn.style.border = "2px solid rgb(40,40,40)";
        cssRoot.style.setProperty('--dark10', 'rgb(255,255,255)');
        cssRoot.style.setProperty('--dark20', 'rgb(255,255,255)');
        cssRoot.style.setProperty('--dark25', 'rgb(255,255,255)');
        cssRoot.style.setProperty('--white', '#6FEDD6'); /*mint*/
        cssRoot.style.setProperty('--aliceblue', 'rgb(60,60,60)');
        cssRoot.style.setProperty('--grey', 'rgb(40,40,40)');
        cssRoot.style.setProperty('--black', 'rgb(0,0,0)');
        cssRoot.style.setProperty('--red', '#6FEDD6');
    } else {                                                            /*--Night--*/
        MoonSunLogo.style.marginLeft = "55%";
        btn.style.backgroundImage = "url(vector/final/night_sky.jpg)"
        MoonSunLogo.src = "vector/final/moon.png"
        btn.style.border = "2px solid rgb(30,30,30)";
        cssRoot.style.setProperty('--dark10', 'rgb(10,10,10)');
        cssRoot.style.setProperty('--dark20', 'rgb(20,20,20)');
        cssRoot.style.setProperty('--dark25', 'rgb(25,25,25)');
        cssRoot.style.setProperty('--white', 'white');
        cssRoot.style.setProperty('--aliceblue', 'aliceblue');
        cssRoot.style.setProperty('--grey', 'black');
        cssRoot.style.setProperty('--black', 'black');
        cssRoot.style.setProperty('--red', 'red');
    }
}

function aboutMe(){
    
    var currentScroll = window.pageYOffset;
    var scrollValue = currentScroll / (scrollHeight - winHeight);
    var number = Math.round(scrollValue*100);
   /* document.getElementById("scroll").innerHTML = number;*/
    var about = document.getElementById("aboutMe");
    var arrow = document.getElementById("aboutArrow");
    if(number>20){
        about.style.transform = "translate(0,10%)";
        about.style.borderBottom = "2px solid #808080";
        arrow.style.display = "none";
    }else{
        about.style.transform = "translate(0,-150%)";
        about.style.borderBottom = "0px solid #808080";
        arrow.style.display = "block";
    }
}


/*---- WORK MODE ----*/

const webBtn = document.getElementById("webBtn");
const animationBtn = document.getElementById("animationBtn");
const workContainer = document.getElementById("work-content");
webBtn.onclick = function(){
    workContainer.style.transform = "translate(-00%,0)";
    this.style = "color: var(--spotify)";
    animationBtn.style.color = "rgb(100,100,100)";
}

animationBtn.onclick = function(){
    workContainer.style.transform = "translate(-50%,0)";
    this.style = "color: var(--spotify)";
     webBtn.style.color = "rgb(100,100,100)";
}

/*---- WORK MODE ----*/

/*function aboutScroll(){
    aboutSection = document.getElementById('project-section');
    aboutSection.scrollIntoView();
    aboutSection.style = 'border-bottom: 2px solid rgba(30,215,96,1)';
}
function homeScroll(){
   window.scrollTo(0, 0);
}*/
const navHome = document.getElementById('HomeNavLink');
const navAbout = document.getElementById('aboutNavLink');
const navProject = document.getElementById('projectNavLink');


const aboutSection = document.getElementById('about-section');
const projectSection = document.getElementById('project-section');

function navScroller(e){
    var currentScroll = window.pageYOffset;
    var scrollValue = currentScroll / (scrollHeight - winHeight);
    var number = Math.round(scrollValue*100);
    
    navHome.style = 'border-bottom: 2px solid rgba(30,215,96,0)';
    navAbout.style = 'border-bottom: 2px solid rgba(30,215,96,0)';
    navProject.style = 'border-bottom: 2px solid rgba(30,215,96,0)';
    if(e === 'about'){
        aboutSection.scrollIntoView(false);
        navAbout.style = 'border-bottom: 2px solid rgba(30,215,96,1)'
    }else if(e === 'project'){
        navProject.style = 'border-bottom: 2px solid rgba(30,215,96,1)';
        projectSection.scrollIntoView({block: "start"}); 
    }else if(e==='home'){
        window.scrollTo(0, 0);
        navHome.style = 'border-bottom: 2px solid rgba(30,215,96,1)';
    }
    
}