const itemBox = document.getElementById("item_box");
const itemDiscriptionBox = document.getElementById("item_discription");

itemBox.addEventListener("mouseover", mouseOver);

function mouseOver(){
    itemDiscriptionBox.style.transform = "translate(0,0)"
}