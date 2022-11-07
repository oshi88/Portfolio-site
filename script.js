const scrollOutput = document.getElementById("scroll");
const winHeight = window.innerHeight;
let scrollheight;

window.onscroll = function(){aboutMe();isInViewport();navCustomisation()}
window.onload = function(){DayNightSwitch();currentViewHeight()}

/*window.addEventListener('resize',)*/
function currentViewHeight(){  
    scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);
}

function navCustomisation(){
    var scroll = scroller();
    var nav = document.getElementById('nav');
    if(scroll>=4){
        nav.style.height = '5vh';
    }else{
        nav.style.height = '10vh';
    }
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

function scroller(){
    var currentScroll = window.pageYOffset;
    var scrollValue = currentScroll / (scrollHeight - winHeight);
    var number = Math.round(scrollValue*100);
    return number;
}

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
    var scroll = scroller();
    var nav = document.getElementById("nav");
    var about = document.getElementById("aboutMe");
    var arrow = document.getElementById("aboutArrow");
    if(scroll>20){
        about.style.transform = "translate(0,10%)";
        /*about.style.borderBottom = "2px solid #808080";*/
        arrow.style.display = "none";
    }else{
        about.style.transform = "translate(0,-150%)";
        /*about.style.borderBottom = "0px solid #808080";*/
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
    var scroll = scroller();
    navBorderClear();
    
    if(e === 'about'){
        aboutSection.scrollIntoView(false);
        navAbout.style = 'color: rgba(30,215,96,1)'
    }else if(e === 'project'){
        navProject.style = 'color: rgba(30,215,96,1)';
        projectSection.scrollIntoView({block: "start"}); 
    }else if(e === 'home'){
        window.scrollTo(0, 0);
        navHome.style = 'color: rgba(30,215,96,1)';
    }
}

function navBorderClear(){
    navHome.style = 'color: white';
    navAbout.style = 'color:white';
    navProject.style = 'color: white';
}

/*function isInViewport(){
    const aboutRect = aboutSection.getBoundingClientRect();
    const projectRect = projectSection.getBoundingClientRect();
    navBorderClear();
    const aboutCheck = aboutRect.top >= 0 &&
        aboutRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) ;
    
    const projectCheck = projectRect.top >= 0 &&
        projectRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) ;
    
    
    if(aboutCheck === true){
        navAbout.style = 'color: rgba(30,215,96,1)'
    }else if(projectCheck === true){
        navProject.style = 'color: rgba(30,215,96,1)'
        console.log('project section check')
    }else{
        navHome.style = 'color: rgba(30,215,96,1)'
    }
}  */

