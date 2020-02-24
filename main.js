const numberInput = document.querySelector(".form__input");
const resultDiv = document.querySelector(".result-box");

numberInput.addEventListener("input", (event) => {
    event.preventDefault();

    const inputNumber = Number(event.target.value);

    // console.log(typeof inputNumber);

    if (inputNumber < 0) {
        return resultDiv.textContent = "Entered number is smaller than 0.";
    }
    if (!inputNumber) {
        return resultDiv.textContent = "Wrong number format";
    }

    if (inputNumber === 0 || inputNumber == 1) {
        return resultDiv.textContent = "No primary numbers here";
    }

    let resultArray = [];

    primaryTest = (number) => {

        for (let i = 1; i < number; i++) {
            resultArray.push(i);
        }

        resultDiv.textContent = resultArray;
    }

    primaryTest(inputNumber);
})