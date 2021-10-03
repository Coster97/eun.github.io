
const login = document.querySelector(".login")
const siteBox = document.querySelector(".hidden")
const todoBox = document.querySelector("#todo")

const link = document.querySelector("#즐겨찾기")
const logout = document.querySelector(".logOut")

const memo = document.querySelector("#memo")

const welcome = document.querySelector("#welcome")

const geoBox = document.querySelector(".geolocation")







function showbye(event) {
    
    event.preventDefault();
    saveUser();
    logout.style.display = "none";
    link.style.display = "none";
    todoBox.style.display = "none";
    login.style.display = "block";
    siteBox.style.display = "none"
    memo.style.display = "none";
    geoBox.style.display = "none";
    welcome.style.opacity = 0.6;



    
    
    
}

logout.addEventListener("click", showbye);




