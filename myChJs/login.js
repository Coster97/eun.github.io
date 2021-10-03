
const login = document.querySelector(".login")
const siteBox = document.querySelector(".hidden")
const todoBox = document.querySelector("#todo")


const link = document.querySelector("#즐겨찾기")
const logout = document.querySelector(".logOut")


const welcome = document.querySelector("#welcome")

const geoBox = document.querySelector(".geolocation")

function saveUser() {
    localStorage.setItem("name", JSON.stringify(id.value))
}


function showWelcome(event) {
    
    event.preventDefault();
    saveUser();
    logout.style.display = "block";
    link.style.display = "block";
    todoBox.style.display = "block";
    login.style.display = "none";
    siteBox.style.display = "block"
    geoBox.style.display = "block";
    welcome.style.opacity = 0;
    



    
    
    
}

login.addEventListener("submit", showWelcome);

