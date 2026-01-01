const outerThemeBtn = document.getElementById("outer");
const innerThemeBtn = document.getElementById("inner");

function applyTheme(theme) {
    //INTIAL CODE
    document.body.classList.toggle("dark");
    if(theme === "dark"){
        outerThemeBtn.style.justifyContent = "flex-start";
        innerThemeBtn.textContent = "🌙";
    }
    else{
        outerThemeBtn.style.justifyContent = "flex-end";
        innerThemeBtn.textContent = "☀️";
    }

     //OPTIMISED CODE
    //const isDark = theme === "dark";
    //document.body.classList.toggle("dark", isDark);
    //outerThemeBtn.style.justifyContent = isDark ? "flex-end" : "flex-start";
    //innerThemeBtn.textContent = isDark ? "🌙" : "☀️";

    if(theme=="dark"){
        localStorage.setItem("theme","light");
    }
    else{
        localStorage.setItem("theme","dark");
    }
    
}

innerThemeBtn.addEventListener("click", ()=>{
    //INTIAL CODE
    // const isDark= document.body.classList.contains("dark");
    // if(isDark){
    //     applyTheme("dark");
    //     localStorage.setItem("theme","light");
    // }
    // else{
    //     applyTheme("light");
    //     localStorage.setItem("theme","dark");
    // }

    //OPTIMISED CODE
    const appliedTheme = document.body.classList.contains("dark") ? "dark" : "light";
    applyTheme(appliedTheme);
});


//INITIAL THEME LOAD
const savedTheme = localStorage.getItem("theme");

if(savedTheme){
  applyTheme(savedTheme);
} 
else{
  applyTheme("light");
}



//GEOLOCATION API : EXTRA
function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch (e) {
    const box = document.getElementById("location-box");
    if (box) box.innerHTML = "<h2>Error</h2>";
  }
}

function showPosition(position) {
  const box = document.getElementById("location-box");
  if (!box) return;
  box.innerHTML = `
  Latitude : ${position.coords.latitude}    
  <br/>Longitude : ${position.coords.longitude}`;
}
