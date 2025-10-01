var click = 0;
let wish = document.querySelector("#button")

let code= " happy birthday  press gift again for more wishes >>> "


let code2 = "Happy birthday to my amazing sister! Thank you for always being my rock, my confidante, and my best friend. I hope your day is filled with love and joy😃🤩📈, press again more inspiring quotes >"

let code3 = "It's not about winning or losing! It's about me taking you on right here, right now! ~ mumen Rider"

let code4 = "Throughout Heaven and Earth, I Alone Am The Honored One ~ gojo satoru"

let code5 = "I'm incomparably strong next to how I was before ~ sung jinwoo"

let code6 = "Do not pray for an easy life, pray for the strength to endure a difficult one ~ Bruce lee"

let code7 = "“I don't stop when I'm tired, I stop when I'm done ~ david goggins"


let code8 = " I know you like it no need to thanks, anyways happy birthday big sister>>"

let code9 = " be a adapter  ~ patel ranveer"

wish.addEventListener("click", function() {
 click = click+1
 console.log(click)
 
 
 if(click === 1) {
  console.log("activated the alert")
  alert(code)
 }else if(click === 4) {
  alert(code2)
 }else if(click==8) {
  alert(code3)
 }else if(click==12) {
  alert(code4)
 }else if(click==14) {
  alert(code5)
 }else if(click===16) {
  alert(code6)
 }else if(click === 18) {
  alert(code7)
 }else if(click===20) {
  alert(code8)
 }else if(click=== 100) {
  alert(code9)
 }
 
})
