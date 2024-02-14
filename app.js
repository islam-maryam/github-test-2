
const humberger = document.getElementById("humberger");
const Manubar = document.getElementById("Manubar");

humberger.addEventListener("click", ()=> {
    console.log(humberger.classList);

    if (humberger.classList.contains("off")){
        humberger.classList.remove("off")
        humberger.classList.add("on")

        menubar.classList.remove("hidden")
        menubar.classList.add("flex flex-col")
    }
    else{
        console.log("classs list is on");
        humberger.classList.remove("on")
        humberger.classList.add("off")

        menubar.classList.remove("flex flex-col")
        menubar.classList.add("hidden")
    }
})



