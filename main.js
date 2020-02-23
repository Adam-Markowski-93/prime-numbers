const numberInput = document.querySelector(".form__input");
const resultDiv = document.querySelector(".result-box");

numberInput.addEventListener("input", (event) => {
    event.preventDefault();

    console.log(event.target.value);

})