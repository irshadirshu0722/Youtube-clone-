var tabBox = document.querySelector(".video-category")
arrow=document.querySelectorAll(".video-category-section .icon")
// console.log(arrow);


let isdragging=false;

arrow.forEach(icon => {
    icon.addEventListener("click",()=>{
        console.log("enter");
        tabBox.scrollLeft+=icon.id==="left" ? -350:350;
    }
    )
});

const dragging = (e)=>{
    console.log("dragging.....");
    if(!isdragging) return;
    tabBox.scrollLeft-=e.movementX;
}
const dragstop= () =>{
    isdragging=false
}
tabBox.addEventListener("mousedown",()=> isdragging=true)
tabBox.addEventListener("mousemove",dragging);
tabBox.addEventListener("mouseup",dragstop);


