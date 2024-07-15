//get values from user
function getValues() {
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    //parse input values into integers
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    //check to see if values are int
    if(Number.isInteger(startValue) && Number.isInteger(endValue)) {
        //generate numbers
        let numbers = generateNumbers(startValue, endValue)
        
        //display the output
        displayNumbers(numbers)
    } else {
        alert("Only integers allowed. Please enter a number.")
    }
}

//generates numbers
function generateNumbers(startValue, endValue) {
    let numbers = [];

    for(i = startValue; i <= endValue; i++) {
        numbers.push(i);
    }

    return numbers;
}

//displays numbers
function displayNumbers(numbers) {
    let templateCols = "";

    //<div>0</div>
    for(let index = 0; index < numbers.length; index++) {
        
        let className = "";
        if(numbers[index] % 2 == 0) {
            className = "even";
        }else{
            className = "odd";
        }
        templateCols += `<div class="${className}">${numbers[index]}</div>`;
    }
    
document.getElementById("resultsData").innerHTML = templateCols;

}