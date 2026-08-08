// ĐỔI LINK NÀY thành link Discord thật của Ballas
const DISCORD_URL = "https://discord.gg/YOUR-INVITE";

["discordTop","joinBtn","joinBtn2"].forEach(id=>{
  const el=document.getElementById(id);
  if(el) el.href=DISCORD_URL;
});

const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");
let playing=false;
musicBtn.addEventListener("click", async()=>{
  try{
    if(!playing){await music.play();playing=true;musicBtn.textContent="❚❚";musicBtn.setAttribute("aria-label","Tắt nhạc");}
    else{music.pause();playing=false;musicBtn.textContent="♫";musicBtn.setAttribute("aria-label","Bật nhạc");}
  }catch(e){alert("Muốn bật nhạc, hãy thêm file assets/music.mp3 vào repository.");}
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show");});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const glow=document.querySelector(".cursorGlow");
document.addEventListener("pointermove",e=>{
  glow.style.left=e.clientX+"px"; glow.style.top=e.clientY+"px";
});
