const btn = document.getElementById("surpriseBtn");

const messages = [
"❤️ You are the best thing that ever happened to me.",
"🌸 Every day with you is a beautiful memory.",
"🥰 Thank you for making my life so special.",
"🎂 Happy Birthday My Love!",
"💖 I Love You More Than Words Can Say."
];

btn.addEventListener("click",()=>{

let random=Math.floor(Math.random()*messages.length);

document.getElementById("message").innerHTML=messages[random];

for(let i=0;i<40;i++){

let heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="-20px";
heart.style.fontSize=(20+Math.random()*30)+"px";
heart.style.animation="fall 4s linear forwards";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},4000);

}

});
