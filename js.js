$(document).ready(function(){
    $(".modal-window2").hide();

    // MODAL-WINDOW1
    $("#cross").click(function(){
        $(".modal-window").hide();
    });

    $(".save").click(function(){
        var val = $(".modal-input").val();
        $(".user").html("Вітаємо, " + val);
        $(".modal-window").hide();
    });
    // MODAL-WINDOW1/

    // MODAL-WINDOW2
    $(".subscribe").click(function(){
        $(".modal-window2").show();
    });

    $("#cross2").click(function(){
        $(".modal-window2").hide();
    });
    // MODAL-WINDOW2/
});

// TASK1
let yearBtn = document.getElementById("year-btn");
let yearInput = document.getElementById("year-input");
let yearText = document.getElementById("year-text");

yearBtn.addEventListener("click", function(){
    if(yearInput.value % 4 == 0){
        yearText.style.color = "green";
        yearText.innerHTML = "Ви народилися у високосний рік!";
    }else{
        yearText.style.color = "red";
        yearText.innerHTML = "Ви народилися не у високосний рік!";
    }
    if(yearInput.value == "" && yearBtn){
        yearText.innerHTML = "Введіть рік!";
        yearText.style.color = "red";
    }
});
// TASK1/

// TASK2
let rndBtn = document.getElementById("rnd-btn");
let rndInput = document.getElementById("rnd-input");
let rndText = document.getElementById("rnd-text");

rndBtn.addEventListener("click", function(){
    let randomNumber = Math.floor(Math.random() * 10);
    if(randomNumber == rndInput.value){
        rndText.style.color = "green";
        rndText.innerHTML = "Ви вгадали! " + randomNumber;
    } else{
        rndText.style.color = "red";
        rndText.innerHTML = "Ви програли, комп’ютер загадав число " + randomNumber;
    }
    if(rndInput.value < 0 || rndInput.value > 10){
        rndText.innerHTML = "Введіть число від 0 до 10!";
        rndText.style.color = "red";
    }
});
// TASK2/

// TASK3
const rock = document.getElementById("rock");
const scissors = document.getElementById("scissors");
const paper = document.getElementById("paper");
const compVar = document.getElementById("comp-var");
const compPoints = document.getElementById("comp-points");
const playerPoints = document.getElementById("player-points");
const result = document.getElementById("result");
let player;

rock.addEventListener("click", function(){
    player = "Rock";
    console.log(player);
});
scissors.addEventListener("click", function(){
    player = "Scissors";
    console.log(player);
});
paper.addEventListener("click", function(){
    player = "Paper";
    console.log(player);
});

function computerChoice(){
    var computerChoices = Math.floor(Math.random() * 3);
    if (computerChoices == 0){
        computerChoices = "Rock";
        console.log(computerChoices);
    }
    else if(computerChoices == 1){
        computerChoices = "Paper";
        console.log(computerChoices);
    }
    else if(computerChoices == 2){
        computerChoices = "Scissors";
        console.log(computerChoices);
    }
    if(player == "Rock" && computerChoices == "Paper"){
        compPoints.ariaValueText++;
        compPoints.innerHTML = "Комп'ютер - " + compPoints.ariaValueText;
        result.innerText = "Ви програли раунд";
        result.style.color = "red"
    }
    else if(player == "Paper" && computerChoices == "Rock"){
        playerPoints.ariaValueText++;
        playerPoints.innerHTML = "Ви - " + playerPoints.ariaValueText;
        result.innerText = "Ви виграли раунд!";
        result.style.color = "green"
    }
    else if(player == "Paper" && computerChoices == "Scissors"){
        compPoints.ariaValueText++;
        compPoints.innerHTML = "Комп'ютер - " + compPoints.ariaValueText;
        result.innerText = "Ви програли раунд";
        result.style.color = "red"
    }
    else if(player == "Scissors" && computerChoices == "Paper" ){
        playerPoints.ariaValueText++;
        playerPoints.innerHTML = "Ви - " + playerPoints.ariaValueText;
        result.innerText = "Ви виграли раунд!";
        result.style.color = "green"
    }
    else if(player == "Rock" && computerChoices == "Scissors"){
        playerPoints.ariaValueText++;
        playerPoints.innerHTML = "Ви - " + playerPoints.ariaValueText;
        result.innerText = "Ви виграли раунд!";
        result.style.color = "green"
    }
    else if(player == "Scissors" && computerChoices == "Rock"){
        compPoints.ariaValueText++;
        compPoints.innerHTML = "Комп'ютер - " + compPoints.ariaValueText;
        result.innerText = "Ви програли раунд";
        result.style.color = "red"
    }
    else if(player == computerChoices){
        result.innerText = "Нічия!";
        result.style.color = "grey"
    }
}
compVar.addEventListener("click", computerChoice);
// TASK3/

// TASK4
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let resultNumber = document.getElementById("result-text");
let plusBtn = document.getElementById("plus");
let multiplyBtn = document.getElementById("multiply");
let substractBtn = document.getElementById("substract");
let divisionBtn = document.getElementById("division");
let firstNumber = number1.value;
let secondNumber = number2.value;

function plus(){
        firstNumber = +number1.value;
        secondNumber = number2.value;
        resultNumber.innerHTML = firstNumber + secondNumber;
        console.log(resultNumber);
}

function multiply(){
    firstNumber = +number1.value;
    secondNumber = number2.value;
    resultNumber.innerHTML = firstNumber * secondNumber;
    console.log(resultNumber);
}

function substract(){
    firstNumber = +number1.value;
    secondNumber = number2.value;
    resultNumber.innerHTML = firstNumber - secondNumber;
    console.log(resultNumber);
}

function division(){
    firstNumber = +number1.value;
    secondNumber = number2.value;
    resultNumber.innerHTML = firstNumber / secondNumber;
    console.log(resultNumber);
}

plusBtn.addEventListener("click", plus);
multiplyBtn.addEventListener("click", multiply);
substractBtn.addEventListener("click", substract);
divisionBtn.addEventListener("click", division);
// TASK4/

// TASK5
let timeBtn = document.getElementById("time-btn");
let timeText = document.getElementById("time-text");

timeBtn.addEventListener("click", function(){
    let minutes = +document.getElementById("time-input").value;

    const day = Math.floor(minutes/(60*24));
    minutes = minutes%(60*24);
    let hours = Math.floor(minutes/60);
    if (hours < 10){
        hours = "0" + hours;
    }
    minutes = minutes%60
    if (minutes < 10){
        minutes = "0" + minutes;
    }

    timeText.innerText = `${day} дн. ${hours}:${minutes}:00`;
});
// TASK5/

// TASK6

// TASK6/

// TASK7

// TASK7/

// TASK8
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");
let number5 = document.getElementById("number5");
let maxNumber = document.getElementById("max-number");

number3.addEventListener("change", function(){
    maxNumber.innerHTML = "Найбільше число, яке ви ввели - " + Math.max(number3.value, number4.value, number5.value);
});

number4.addEventListener("change", function(){
    maxNumber.innerHTML = "Найбільше число, яке ви ввели - " + Math.max(number3.value, number4.value, number5.value);
});

number5.addEventListener("change", function(){
    maxNumber.innerHTML = "Найбільше число, яке ви ввели - " + Math.max(number3.value, number4.value, number5.value);
});
// TASK8/

// TASK9
let arrow1 = document.getElementById("arrow1");
let arrow2 = document.getElementById("arrow2");
let imgCat = document.getElementById("cat1");
let nameText = document.getElementById("our-names");
let workText = document.getElementById("our-work");

arrow2.addEventListener("click", function(){
    if (imgCat.src = "./img/my-cat.jpg"){
        imgCat.src = "./img/my-cat2.jpg";
        nameText.innerHTML = "Гліб"
        workText.innerHTML = "Старався"
    }
});

arrow1.addEventListener("click", function(){
    if (imgCat.src = "./img/my-cat2.jpg"){
        imgCat.src = "./img/my_cat.jpg";
        nameText.innerHTML = "Гула Артур"
        workText.innerHTML = "Весь сайт"
    }
});
// TASK9/