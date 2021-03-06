const numberInput = document.querySelector(".form__input");
const resultDiv = document.querySelector(".result-box");

numberInput.addEventListener("input", (event) => {
    event.preventDefault();

    const inputNumber = Number(event.target.value);

    if (inputNumber < 0 || inputNumber > 10000) {
        return resultDiv.textContent = "Entered number is smaller than 0 or it is bigger than 10000";
    }
    if (isNaN(inputNumber)) {
        return resultDiv.textContent = "Wrong number format";
    }

    if (inputNumber === 0 || inputNumber == 1) {
        return resultDiv.textContent = "No primary numbers here";
    }

    primaryTest = (number) => {

        let resultArray = [];
        let counter = 0;

        for (let i = 2; i < number; i++) {

            for (let j = 2; j <= (Math.floor(Math.sqrt(i))); j++) {
                if (i % j === 0) {
                    counter += 1;
                }
            }

            if (counter === 0) {
                resultArray.push(" " + i);
            }
            counter = 0;
        }
        return resultArray;
    }
    resultDiv.textContent = primaryTest(inputNumber);
})