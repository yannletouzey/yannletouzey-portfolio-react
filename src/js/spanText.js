const spanText = () => {
    const spanText = document.querySelectorAll(".container__carousel--link div");
    spanText.forEach((element) => {
        const letters = element.children[0].textContent.split("");
        element.innerHTML = "";
        letters.forEach((e, index) => {
            element.innerHTML += `<span style="display: inline-block; transition: 0.5s; transition-delay: ${0.03 * index}s">${e}</span>`;
        });
    });
}
export default spanText;