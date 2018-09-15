let divsForAnimation = document.getElementsByClassName("scroll");
let bodyRect = document.getElementsByTagName("body")[0].getBoundingClientRect();

divsForAnimation[0].children[0].classList.add("animate");

document.getElementById("parent").onscroll = () => {
    for(let i = 0; i < divsForAnimation.length;i++) {
        let rect = divsForAnimation[i].getBoundingClientRect();

        if(rect.top >= bodyRect.top && rect.bottom <= bodyRect.bottom) {
            divsForAnimation[i].children[0].classList.add("animate");
        } else if(
            rect.bottom < bodyRect.top ||
            rect.top > bodyRect.bottom
        ) {
            divsForAnimation[i].children[0].classList.remove("animate");
        }
    }
}