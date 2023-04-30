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
let backspace = document.querySelector(".backspace");
let ralt = document.querySelector(".ralt")
let lalt = document.querySelector(".lalt")
let enter = document.querySelector(".enter")
let win = document.querySelector(".win")
let link = document.querySelector(".lang-lnk")

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
        
        if(e.code == "ShiftLeft"){
            shift.classList.remove("active")
        }
        if(e.code == "Tab"){
            tab.classList.remove("active");
        
        }
        if(e.code == "CapsLock"){
            caps.classList.remove("active")
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
backspace.addEventListener("click", () => {
    let value = text.innerText;
    value = value.slice(0, -1);
    text.innerText = value;
  });

window.addEventListener("click", function(e){   
    let key = e.target
    if(key.hasAttribute("key") && key != backspace 
    && key != caps && key != shift 
    && key != tab && key != ralt 
    && key != lalt && key != enter 
    && key !=lctrl && key !=rctrl 
    && key != up && key != down 
    && key !=right && key !=left 
    && key != del && key !=win
    && key != space){
    text.innerText += key.getAttribute("key");
    key.classList.add("active");
    this.setTimeout(()=>{
        key.classList.remove("active")
    },200)

    }
function delClass(){
    key.classList.remove("active")
}
})
document.addEventListener('keydown', function(event) {
    if (event.altKey && event.key === 's') {
    link.click();
    }
  });


