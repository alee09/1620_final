const interactive = document.querySelector(".interactive")
const thumb_bar = document.querySelector(".thumb-bar")
const focused = document.querySelector(".focused_image")


//this function  adds all the pictures into the displayed imgs at the top....
function imgbar(){
    for(let i = 1; i<=5; i++){
        let img = document.createElement(`img`);
        img.setAttribute("src", `./images/pic${i}.jpg`);
        img.setAttribute("class", `displayed_img`);
        document.getElementById("thumb-bar").appendChild(img);
    }
}
imgbar()

//this function hides the interactive tab.
let hiddenDefault = () => {
    document.querySelector("label").style.visibility = "hidden"
    document.querySelector("input").style.visibility = "hidden"
    document.querySelector("button").style.visibility = "hidden"
}
hiddenDefault()

document.getElementById("thumb-bar").addEventListener("mouseover", e => {
    document.querySelector("label").style.visibility = "visible";
    document.querySelector("input").style.visibility = "visible";
    document.querySelector("button").style.visibility = "visible";
    focused.src = e.target.src
})
document.querySelector(".btn").addEventListener("click",() => {
    const input = document.getElementById("effect")
    effect = input.value
    if(effect === "blur") {
        let string = focused.src
        let srclist = string.split('/')
        string = srclist[(srclist.length)-1].substring(0, 4)
        focused.src = `./images/${string}B.jpg`
        input.value = ''
    }else{
        console.log('an error occured: please input a blur')
    }
})