const contentQS = document.querySelector(".content");
const buttonQS = document.querySelector("#button")

const onButtonClick = () => {
    contentQS.innerHTML = "You just tested JavaScript DOM Manipulation!"
}

buttonQS.addEventListener("click", onButtonClick);
