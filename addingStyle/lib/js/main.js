let rightSide = document.querySelector(".right_side");
rightSide.style["background-color"] = "red";

let names = document.querySelectorAll(".name");
for (let i = 0; i < names.length; i++) {
    names[i].style["text-shadow"] = "-6px 5px 2px yellow";
}