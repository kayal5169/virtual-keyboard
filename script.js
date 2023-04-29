let keyboard = document.querySelector(".keyboard")
let keys = document.querySelectorAll(".key");
let text = document.querySelector(".text");
let space = document.querySelector(".space");
let shift = document.querySelector(".shift");
let lctrl = document.querySelector(".l-ctrl");
let rctrl = document.querySelector(".r-ctrl");
let del = document.querySelector(".del");
let tab = document.querySelector(".tab");
let left = document.querySelector(".left");
let right = document.querySelector(".right");
let up = document.querySelector(".up");
let down = document.querySelector(".down");
let caps = document.querySelector(".caps");

for( let i = 0;i < keys.length; i++){
    keys[i].setAttribute('key', keys[i].innerText)
    keys[i].setAttribute('UpperCase', keys[i].innerText.toUpperCase())
}

window.addEventListener("keydown", function(e){
    for( let i = 0;i < keys.length; i++){
        if(e.key == keys[i].getAttribute("key") ||
         e.key == keys[i].getAttribute("UpperCase")){
            keys[i].classList.add("active")
        }
        if(e.code == "Space"){
            space.classList.add("active")
        }
        if(e.code == "ShiftLeft"){
            shift.classList.add("active")
        }
        if(e.code == "CapsLock"){
            caps.classList.add("active")
        }
        if(e.code == "Delete"){
            del.classList.add("active")
        }
        if(e.code == "Tab"){
            tab.classList.add("active")
        }
        if(e.code == "ControlLeft"){
            lctrl.classList.add("active")
        }
        if(e.code == "ControlRight"){
            rctrl.classList.add("active")
        }
        if(e.code == "ArrowUp"){
            up.classList.add("active")
        }
        if(e.code == "ArrowDown"){
            down.classList.add("active")
        }
        if(e.code == "ArrowRight"){
            right.classList.add("active")
        }
        if(e.code == "ArrowLeft"){
            left.classList.add("active")
        }
    }
})

window.addEventListener("keyup", function(e){
    for( let i = 0;i < keys.length; i++){
        if(e.key == keys[i].getAttribute("key") ||
         e.key == keys[i].getAttribute("UpperCase")){
            keys[i].classList.remove("active")
            keys[i].classList.add("remove")
        }
        if(e.code == "Space"){
            space.classList.remove("active")
        }
        if(e.code == "CapsLock"){
            caps.classList.remove("active")
        }
        if(e.code == "ShiftLeft"){
            shift.classList.remove("active")
        }
        if(e.code == "Tab"){
            tab.classList.remove("active");
            
        }
        if(e.code == "ArrowUp"){
            up.classList.remove("active")
        }
        if(e.code == "ArrowDown"){
            down.classList.remove("active")
        }
        if(e.code == "ArrowRight"){
            right.classList.remove("active")
        }
        if(e.code == "ArrowLeft"){
            left.classList.remove("active")
        }
        if(e.code == "Delete"){
            del.classList.remove("active")
        }
        if(e.code == "ControlLeft"){
            lctrl.classList.remove("active")
        }
        if(e.code == "ControlRight"){
            rctrl.classList.remove("active")
        }
        
    }
})



