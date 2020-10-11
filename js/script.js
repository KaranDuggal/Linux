document.querySelector(".hamburger_menu").addEventListener("click",()=> {
    document.querySelector(".container").classList.toggle("change");
});

document.querySelector(".scroll_btn").addEventListener("click",() => {document.querySelector("html").style.scrollBehavior = "smooth"; setTimeout(()=> {document.querySelector("html").style.scrollBehavior = "unset";},1000)})